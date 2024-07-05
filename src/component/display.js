import React, { useState } from 'react';
import { SecoundaryButton, Button } from "./button";
import './display.css'
import {Input,InputText} from './input';
import Stone from '../component/img/rockcolor.jpg'
import paper from '../component/img/papercolor.jpg'
import Scissors from '../component/img/scissorscolor.jpg'
import Play from '../component/img/play.jpg'
import reload from '../component/img/iconmonstr-restore-lined-240.png'

function Game() {
  const [letsPlay, setLetsPlay] = useState(false);
  const [userVal, setUserVal] = useState(0);
  const [botVal, setBotVal] = useState(0);
  const [rounds, setRounds] = useState(0);
  const[humanChoice, setHumanChoice]=useState("")
  const[aiChoice, setAiChoice]=useState("")
  const[userName, setUserName]=useState("Human")
  
  const handlePlayClick = (e) => {
    
    setLetsPlay(true);
    setUserVal(0)
    setBotVal(0)
    if(!userName){
      setUserName('Human')
    }
  };

  const handleResetClick = () => {
    window.location.reload();
  };

  const handleStoneClick = (event) => {
    if (!letsPlay) {
      window.alert('Please Click on Play');
      return;
    }

    if (rounds === 0) {
      if (userVal > botVal) {
        window.alert('Player Wins');
      } else {
        window.alert('Bot Wins');
      }
      window.location.reload();
      return;
    }
   

    const botMove = parseInt(Math.random() * 3);

    if (botMove === 2) {
      setRounds((prevRounds) => prevRounds - 1);
      setUserVal((prevUserVal) => prevUserVal + 1);
      setAiChoice("Scissors")
      setHumanChoice('Stone')
     
    } else if (botMove === 0) {
      setAiChoice("Stone")
      setHumanChoice('Stone')
    } else {
      setRounds((prevRounds) => prevRounds - 1);
      setBotVal((prevBotVal) => prevBotVal + 1);
      setAiChoice("Paper")
      setHumanChoice('Stone')
    }
  };
  const handlePaperClick = () => {
    if (!letsPlay) {
      window.alert('Please Click on Play');
      return;
    }

    if (rounds === 0) {
      if (userVal > botVal) {
        window.alert('Player Wins');
      } else {
        window.alert('Bot Wins');
      }
      window.location.reload();
      return;
    }
   

    const botMove = parseInt(Math.random() * 3);

    if (botMove === 0) {
      setRounds((prevRounds) => prevRounds - 1);
      setUserVal((prevUserVal) => prevUserVal + 1);
      setAiChoice("Stone")
      setHumanChoice('Paper')
    } else if (botMove === 1) {
      setAiChoice("Paper")
      setHumanChoice('Paper')
      // Handle tie
    } else {
      setRounds((prevRounds) => prevRounds - 1);
      setBotVal((prevBotVal) => prevBotVal + 1);
      setAiChoice("Scissors")
      setHumanChoice('Paper')
    }
    };
const handleScissorsClick = () => {
      if (!letsPlay) {
        window.alert('Please Click on Play');
        return;
      }
  
      if (rounds === 0) {
        if (userVal > botVal) {
          window.alert('Player Wins');
        } else {
          window.alert('Bot Wins');
        }
        window.location.reload();
        return;
      }
     
  
      const botMove = parseInt(Math.random() * 3);
  
      if (botMove === 1) {
        setRounds((prevRounds) => prevRounds - 1);
        setUserVal((prevUserVal) => prevUserVal + 1);
        setAiChoice("Paper " )
        setHumanChoice('Scissors')
      } else if (botMove === 0) {
       
        setAiChoice("Scissors")
        setHumanChoice('Scissors')
      } else {
        setRounds((prevRounds) => prevRounds - 1);
        setBotVal((prevBotVal) => prevBotVal + 1);
        setAiChoice("Stone")
          setHumanChoice('Scissors')
      }

    };
  return (
    <div className='main'>
      
     <Input setRounds={setRounds}/>
      <InputText setUserName={setUserName}/>

     <div className='button-pp'>
    <Button className="play" onClick={handlePlayClick} ><img src={Play} alt='Play icon'/></Button>
     </div>
      

      <div className='text'>
        <div className='human'>

      <div id="userscore">{userVal}</div>
        <h3> {userName} </h3>
        <div className='human-choice'>{humanChoice}</div>
        </div>
        <div className='ai'>
        <div id="botscore">{botVal}</div>
        <h3> AI </h3>
        <div className='bot-choice' >{aiChoice}</div>
        </div>
      </div>

      <div id ='game-button'>
        <SecoundaryButton className='box'id='stone' onClick={handleStoneClick}><img src={Stone} alt='Stone Icon'/>
        </SecoundaryButton>
        <SecoundaryButton className='box'id='paper' onClick={handlePaperClick}><  img src={paper} alt='Paper'/></SecoundaryButton>
        <SecoundaryButton className='box'id='scissors' onClick={handleScissorsClick}><img src={Scissors} alt='scissors'/></SecoundaryButton>
      </div>
        <h3>Round Left: <span id="round">{rounds}</span></h3>
      <Button className="reset" onClick={handleResetClick}><img src={reload} alt='reload'/></Button>
    </div>
  );
}

export default Game;
