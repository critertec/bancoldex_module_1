import { useState, useEffect } from 'react'
import Layout from '../../layout/ContainerApp/index'
import WelcomePage from '../WelcomePage'
import SelectLevelPage from '../SelectLevelPage/'
import GameSpeakPage from '../GamePage/Scenes/Speak/index'
import GameOptionsPage from '../GamePage/Scenes/SelectOption/index'
import GameFeedBackPage from '../GamePage/Scenes/FeedBack/index.jsx'
import GameFeedBackEndPage from '../GamePage/Scenes/FeedBackEnd/index'

import GameScene from '../../content/scene/index'

import { instructions, stories } from './data'

import useSound from 'use-sound';

import SoundBtn from '../../../assets/SOUNDS/ETC_Sfx_Swipe_01.mp3'
import SoundPtsOk from '../../../assets/SOUNDS/ETC_Sfx_Correcto_01.mp3'
import SoundPtsBad from '../../../assets/SOUNDS/ETC_Sfx_Incorrecto_01.mp3'
import SoundPts from '../../../assets/SOUNDS/ETC_Sfx_Puntaje_01.mp3'

import ModalHomeConfirm from '../../content/Modals/HomeConfirm/index'
import "./App.css"

function App() {
  const [state, setState] = useState({
    questionsAsked: 0,
    stories: []
  });
  const [storiesData, setStoriesDate ] = useState([])
  const [scene, setScene ] = useState('welcome');
  const [currentStory, setCurrentStory] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentOption, setCurrentOption]= useState({});
  const [currentPuntage, setCurrentPuntage] = useState(0);
  const [modalHome, setModalHome] = useState(false);

  // Sonidos
  const [stateSound, setStateSound] = useState(true);

  const [soundBtn] = useSound(SoundBtn)
  const [soundPtsOk] = useSound(SoundPtsOk)
  const [soundPtsBad] = useSound(SoundPtsBad)
  const [soundPts] = useSound(SoundPts)

  const sound = (type) => {
    if (!stateSound)
      return ;

    switch (type) {
      case 'btn':
        soundBtn();
        break;
      case "good":
        soundPtsOk();
      case "good":
        soundPts();
      case 'bad':
        soundPtsBad();
    }
  }

  const nextScene = () => {

    console.log('nextScene')
    sound('btn');
    switch(scene){
      case "welcome": {
        setScene('selectLevel');
      }; break;
      case "game-speak-intro":
      case "game-speak": 
        setScene('game-options');
      break;
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
    console.log('selected', history)

    sound('btn');
    setCurrentStory(history);
    setCurrentPuntage(0);
    formatQuestion(history, history.answer);
    setScene('game-speak-intro');

  }

  const calcScore = () => {
    let pts = currentPuntage < currentStory.ptsMax ?
    currentPuntage
    :
    currentStory.ptsMax

    return pts;
  }

  const formatQuestion = (history, answer, scene) => {
    sound('btn');
    
    if (answer.end){
      setCurrentQuestion({
        num: state.questionsAsked,
        ...answer
      })
      setScene('game-feedbackEnd');
      setState({
        ...state, 
        questionsAsked: state.questionsAsked + 1,
        stories: state.stories.map(story => story.id !== currentStory.id ?
          story
          :
          {
            ...story,
            score: calcScore()
          }  
        )
      })
      console.log("END", answer)
      console.log('puntaje', currentPuntage)
      return;
    }

    if (!answer?.options){
      // return  setCurrentQuestion(answer);
      return alert('not options')
    }

    if (currentStory){
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
    
        console.log('newAnswer', newAnswer)
    
        setCurrentQuestion(newAnswer);
        setScene(scene)
        setState({
          ...state, 
          questionsAsked: state.questionsAsked + 1
        })
    }
  }

  const selectOption = (option) => {
    console.log('selectOption', option)
    setCurrentOption(option);

    // Hacer operacione Puntaje
    switch(option.type){
      case 'buena':
        sound('good');
        setCurrentPuntage(currentPuntage + 3);
      break;
      case 'neutral':
        sound('neutral');
        setCurrentPuntage(currentPuntage + 2);
      break;
      case 'mala':
        sound('bad');
        // setCurrentPuntage(currentPuntage + 2);
      break;
    }
    // Dar feedback
    if (!option.feedback){
      // alert('No hay feedback');
      formatQuestion(currentStory, option.answer, 'game-speak')
      return;
    }

    setScene("game-feedback")
  }

  const newQuestion = () => {
    //newAnswer
    formatQuestion(currentStory, currentOption.answer, 'game-speak')
    console.log('newQuestion', currentQuestion)
    // setScene('game-speak')
  }

  const goToScene = (scene) => {
    soundBtn();
    setScene(scene)
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
            newQuestion={newQuestion}
          />
          // <GameSpeakPage 
          //   currentStory={currentStory}
          //   currentQuestion={currentQuestion}
          //   nextScene={nextScene}
          // />
        );
      // case 'game-options':
      //   return (
      //     <GameOptionsPage 
      //       currentStory={currentStory}
      //       currentQuestion={currentQuestion}
      //       selectOption={selectOption}
      //     />
      //   )
      // case 'game-feedback':
      //   return (
      //     <GameFeedBackPage 
      //       currentStory={currentStory}
      //       currentOption={currentOption}
      //       newQuestion={newQuestion}
      //     />
      //   )
      case "game-feedbackEnd":
        return (
          <GameFeedBackEndPage 
            currentStory={currentStory}
            currentQuestion={currentQuestion}
            goToScene={goToScene}
            currentPuntage={currentPuntage}
          />
        )
    }
  }

  const init = () => {
    // Almacenar Data
    console.log(stories)

    setScene('welcome');
    setState({
      ...state,
      stories: stories.map( story => ({
        ...story,
        score: 0
      }))

    })
    // setStoriesDate(stories.map())
  }

  useEffect(()=>{
    init();
  }, []);

  return (
    <Layout
      state={state}
      currentStory={currentStory}

      scene={scene} 
      backScene={backScene}
      goToScene={goToScene}

      stateSound={stateSound}
      setStateSound={setStateSound}

      modalHome={()=>{
        if (scene.startsWith('game')){
          setModalHome(true)
        }
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
    </Layout>
  );
}

export default App;
