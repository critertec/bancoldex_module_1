import { useState, useEffect } from 'react'
import Layout from '../../layout/ContainerApp/index'
import WelcomePage from '../WelcomePage'
import SelectLevelPage from '../SelectLevelPage/'
// import GameSpeakPage from '../GamePage/Scenes/Speak/index'
// import GameOptionsPage from '../GamePage/Scenes/SelectOption/index'
// import GameFeedBackPage from '../GamePage/Scenes/FeedBack/index.jsx'
import GameFeedBackEndPage from '../GamePage/Scenes/FeedBackEnd/index'

import GameScene from '../../content/scene/index'

import { instructions, stories, titleModule } from './data'

import useSound from 'use-sound';

import SoundBtn from '../../../assets/SOUNDS/ETC_Sfx_Swipe_01.mp3'
import SoundPtsOk from '../../../assets/SOUNDS/ETC_Sfx_Correcto_01.mp3'
import SoundPtsBad from '../../../assets/SOUNDS/ETC_Sfx_Incorrecto_01.mp3'
import SoundPts from '../../../assets/SOUNDS/ETC_Sfx_Puntaje_01.mp3'

import ModalHomeConfirm from '../../content/Modals/HomeConfirm/index'
import ModalHelp from '../../content/Modals/Help/index'

import { withScorm } from 'react-scorm-provider';
// import Scorm from '../../../scorm/Scorm'

import "./App.css"

function App({ Scorm }) {
  const [state, setState] = useState({
    questionsAsked: 0,
    stories: []
  });

  const [scene, setScene ] = useState('welcome');
  const [currentStory, setCurrentStory] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentOption, setCurrentOption]= useState({});
  const [currentPuntage, setCurrentPuntage] = useState(0);
  const [modalHome, setModalHome] = useState(false);
  const [modalHelp, setModalHelp] = useState(false);

  // Sonidos
  const [stateSound, setStateSound] = useState(true);

  const [soundBtn] = useSound(SoundBtn, {
    volume: '0.15'
  })
  const [soundPtsOk] = useSound(SoundPtsOk, {
      volume: '0.15'
  })
  const [soundPtsBad] = useSound(SoundPtsBad, {
    volume: '0.15'
  })
  const [soundPts] = useSound(SoundPts, {
    volume: '0.15'
  })

  const sound = (type) => {
    if (!stateSound){
      return ;
    }

    switch (type) {
      case 'btn':
        soundBtn();
        break;
      case "good":
        soundPtsOk();
        // break;
      case 'bad': 
        soundPtsBad();
        break;
      
      default:
        soundPts(); 
      
    }
  }

  const nextScene = () => {

    sound('btn');
    switch(scene){
      case "welcome": {
        setScene('selectLevel');
      }; break;
      case "game-speak-intro":
      case "game-speak": {
        if (currentQuestion.options){
          setScene('game-options');
        }else {
          newQuestion({
            optionSelected: null,
            withScene: null
          });
        }
      };
    }
  }

  const backScene = () => {
    sound('btn');
    switch(scene){
      case "selectLevel":
        setScene("welcome");
      break;
      case "game-speak-intro":
        setScene('selectLevel');
      break;

    }
  }

  const selectStory = (history) => {
    sound('btn');

    setCurrentStory(history);
    setCurrentPuntage(0);
    formatQuestion(history, history.answer, 'game-speak-intro');

  }

  const calcScore = () => {
    let pts = currentPuntage < currentStory.ptsMax ?
    currentPuntage
    :
    currentStory.ptsMax

    return pts;
  }

  const newQuestion = ({ optionSelected = null, withScene = null }) => {
    // Esta funcion se ejecuta cuando no hay options
    let option = optionSelected || currentOption; 

    // console.log('newQuestion', {

    //   option,
    //   currentQuestion,
    //   currentOption,
    //   scene
    // })

    switch (!withScene ? scene: withScene) {
      case 'game-options': {
        if (option.answer?.options){
          formatQuestion(currentStory, option.answer, 'game-speak');
          // setScene('game-options')
          return;
        }

        let newAnswer = option.answer;

        if (newAnswer?.end){
          setCurrentQuestion(newAnswer);
          endStory();
          return;
        }
        
        setCurrentQuestion(newAnswer)
        setScene('game-speak')
      
      }; break;

      case 'game-feedback': {
        let newAnswer = option.answer; 

        if (newAnswer.options){
          formatQuestion(currentStory, newAnswer, 'game-speak');

          return;
        }

        if (newAnswer.answer){
          setCurrentQuestion(newAnswer);
          setScene('game-speak')
          return;
        }

        if (newAnswer.end){
          // Final
          setCurrentQuestion({
            num: state.questionsAsked,
            ...newAnswer
          })
          endStory();
          return;
        }

        return alert('error aui')

      }; break;

      case "game-speak-intro":
      case "game-speak" : {
        
        let newAnswer = currentQuestion.answer; 
  
        if (newAnswer?.options){
          
          return alert('tien optine')
        } 

        if (!newAnswer)  { 

          return alert('Null newAnswer')
        };
        
        setCurrentQuestion({
          num: state.questionsAsked,
          ...newAnswer
        })

        if (newAnswer.end){
          // Final
          endStory();
          return;
        }

        // newAnswer speak
        setScene('game-speak')
      };break;
    }

    return;

  }

  // API LMS

  const storeLMS = async(newState) => {
    // Calcular las estrellas
    const stars = newState.stories.reduce((acc, val) =>  (acc + val.star), 0)
    console.log('Calculo de Estrellas', {
      stars
    })

    // Data To Store
    const newStore = newState.stories.reduce((acc, val)=>({
      ...acc,
      [val.id]: {
        score: val.score,
        star: val.star
      }
    }), {})

    console.log('newStore', newStore)

    // Actualizar el score
    Scorm.updateScore(stars);

    // Actualizar el store
    Scorm.setStore(newStore);
    Scorm.finish();
  }

  const endStory = () => {
    // Nuevos Calculos
    let newScoreStory = calcScore();

    // Modificar el estado

    let newState = {
      ...state, 
      questionsAsked: state.questionsAsked + 1,
      stories: state.stories.map(story => story.id !== currentStory.id ?
        story
        :
        {
          ...story,
          score: newScoreStory,
          star: scoreToStar(story, newScoreStory)
        })
    }

    // Actualizar store
    storeLMS(newState);
    
    setState(newState)
    setCurrentPuntage(newScoreStory);
    setScene('game-feedbackEnd');

    console.log("Final Pts", newState)
  }

  const scoreToStar = (story, pts) => {
    let porcentage = 100 / Number(story.ptsMax / pts)
    let newScore = (Number(porcentage.toFixed(2)))
    let star = 0;

    if (newScore === 0){
      star = 0;
    } else if (newScore < 50){
      star = 1;
      
    }else if (newScore < 75){
      star = 2;
    }else {
      star = 3;
    }
    
    // Guardo el Calculo en LMS
    // props.sco.setSuspend_data(`story_${story.id}.score`, pts)
    // props.sco.setSuspend_data(`story_${story.id}.star`, star)

    return star;
  } 

  const incrementQuestion = () => {
    setState({
      ...state, 
      questionsAsked: state.questionsAsked + 1
    })
    
  }

  const formatQuestion = (story, question, scene) => {
    sound('btn');

    
    let history = story || currentStory;
    let answer = question || currentQuestion;
    
    if (!answer.options) return 'not Option, format';

    let newAnswer = {
      ...answer,
      num: state.questionsAsked,
      options: answer.options
        .map(option => ({ 
            ...option, 
            ...history.listOptions.find(listOption => listOption.id === option.id)
        }))
    }

    // Verificar error
    // if (newAnswer.options.every(option => typeof(option) === 'string')){
    //   alert("No se encontro algun option")
    // }

    incrementQuestion();
    setCurrentQuestion(newAnswer);

    if (scene){
      setScene(scene)
    }

    return newAnswer;
  }

  const selectOption = ( { option } ) => {
    setCurrentOption(option);

    // Hacer operacione Puntaje
    switch(option.type){
      case 'buena': {
        sound('good');
        setCurrentPuntage(currentPuntage + 3);
      }; break;
      case 'neutral': {
        sound('neutral');
        setCurrentPuntage(currentPuntage + 2);
      }; break;
      case 'mala': {
        sound('bad');
      }; break;
    }
    // Dar feedback
    if (!option.feedback){
      // alert('No hay feedback');
      // formatQuestion(currentStory, option.answer, 'game-speak')
      newQuestion({ optionSelected: option });
      return;
    }
    setScene("game-feedback")
  }

  const goToScene = (scene) => {
    sound('btn');
    setScene(scene)
  }

  const onReturn = () => {
    setCurrentPuntage(0)
    selectStory(currentStory)
  }

  const Scene = () => {
    switch(scene){
      case 'welcome':
        return (
          <WelcomePage 
            texts={instructions}
            nextScene={nextScene}
          />
        );
      case 'selectLevel':
        return (
          <SelectLevelPage
            stories={state.stories}
            selectStory={selectStory}

            state={state}
          />
        );
      case 'game-speak-intro':
      case 'game-speak':
      case 'game-options':
      case 'game-feedback':
        return (
          <GameScene 
            currentStory={currentStory}
            currentQuestion={currentQuestion}
            scene={scene}

            nextScene={nextScene} 
            selectOption={selectOption} 

            currentOption={currentOption}
            newQuestion={()=> {
              // newQuestion
              newQuestion({
                optionSelected: null,
                withScene: null
              });
            }}
          />
        );
      case "game-feedbackEnd":
        return (
          <GameFeedBackEndPage 
            currentStory={currentStory}
            currentQuestion={currentQuestion}
            goToScene={goToScene}
            currentPuntage={currentPuntage}
            onCallNext = {()=>{
              setScene('selectLevel')
            }}
            onCallReturn = {onReturn}
          />
        )
    }
  }


  const init = async() => {
    // Almacenar Data
    console.log(stories)

    let store = Scorm.getStore() ?? [];

    let newState = {
      ...state,

      stories: stories.map( story => {
        let item = store[story.id];
        let score = item?.score;
        let star = item?.star;

        console.log(`item ${store.id} `, item)

        return {
          ...story,
          score: score ? score : 0,
          star: star ? star : 0
        }
      })
    }
    
    setScene('welcome');
    setState(newState)
  }

  const getName = () => {
    const name = Scorm.getLearnerName()
    console.log(name)
  }

  useEffect(()=>{
    init();
    getName();
  }, []);

  // useEffect(()=>{
  //   console.log('Props SCO', props.sco)
  // }, [props.sco])

  return (
    <Layout
      titleModule={titleModule}
      state={state}
      currentStory={currentStory}

      scene={scene} 
      backScene={backScene}
      goToScene={goToScene}

      stateSound={stateSound}
      setStateSound={setStateSound}

      modalHome={()=>{
        if (scene.startsWith('game') && scene !== 'game-feedbackEnd'){
          setModalHome(true)
        }else {
          setScene('selectLevel')
        }
      }}

      modalHelp={()=>{ 
        setModalHelp(true)
      }}
    >
        <Scene />

        {modalHome && 
          <ModalHomeConfirm
            handleChange={setModalHome}
            onCall={()=>{
              setScene('selectLevel')
              setModalHome(false)
            }}
          />
        }

        {modalHelp && 
          <ModalHelp
            show={modalHelp}
            handleChange={setModalHelp}
            onCall={()=>{
              setModalHelp(false)
            }}
          />
        } 
    </Layout>
  );
}

export default  withScorm()(App);
