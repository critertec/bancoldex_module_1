import { useState, useEffect } from 'react'
import Layout from '../../layout/ContainerApp/index'
import WelcomePage from '../WelcomePage'
import SelectLevelPage from '../SelectLevelPage/'
import GameSpeakPage from '../GamePage/Scenes/Speak/index'
import GameOptionsPage from '../GamePage/Scenes/SelectOption/index'
import GameFeedBackPage from '../GamePage/Scenes/FeedBack/index.jsx'
import GameFeedBackEndPage from '../GamePage/Scenes/FeedBackEnd/index'

import { instructions, stories } from './data'

import "./App.css"

function App() {
  const [state, setState] = useState({
    scene: 'welcome'
  });
  const [storiesData, setStoriesDate ] = useState([])
  const [scene, setScene ] = useState('welcome');
  const [currentStory, setCurrentStory] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentOption, setCurrentOption]= useState({});

  const nextScene = () => {

    console.log('nextScene')
    switch(scene){
      case "welcome": {
        setScene('selectLevel');
      }; break;
      case "game-speak": {
        setScene('game-options');
      }; break;
    }
  }

  const backScene = () => {
    if (scene === 'game-speak'){
      setScene('selectLevel');
    }
  }

  const selectStory = (history) => {
    console.log('selected', history)

    setCurrentStory(history);
    formatQuestion(history, history.answer);
    setScene('game-speak');

  }

  const formatQuestion = (history, answer, scene) => {

    if (answer.end){
      setCurrentQuestion(answer)
      setScene('game-feedbackEnd');
      console.log("END", answer)
      return;
    }

    if (!answer?.options){
      // return  setCurrentQuestion(answer);
      return alert('not options')
    }

    if (currentStory){
        let newAnswer = {
          ...answer,
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
    }
  }

  const selectOption = (option) => {
    console.log('selectOption', option)
    setCurrentOption(option);

    // Hacer operacione Puntaje

    // Dar feedback
    if (!option.feedback){
      alert('No hay feedback');
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
            stories={storiesData}
            selectStory={selectStory}
          />
        );
      case 'game-speak':
        return (
          <GameSpeakPage 
            currentStory={currentStory}
            currentQuestion={currentQuestion}
            nextScene={nextScene}
          />
        );
      case 'game-options':
        return (
          <GameOptionsPage 
            currentStory={currentStory}
            currentQuestion={currentQuestion}
            selectOption={selectOption}
          />
        )
      case 'game-feedback':
        return (
          <GameFeedBackPage 
            currentStory={currentStory}
            currentOption={currentOption}
            newQuestion={newQuestion}
          />
        )
      case "game-feedbackEnd":
        return (
          <GameFeedBackEndPage 
            currentStory={currentStory}
            currentQuestion={currentQuestion}
          />
        )
    }
  }

  const init = () => {
    // Almacenar Data
    console.log(stories)

    setScene('welcome');
    setStoriesDate(stories)
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
    >
        <Scene />
    </Layout>
  );
}

export default App;
