import React from 'react'
import '../../keypad.css';

const Keypad = () => {
  
  const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

timestamps.unshift(getTimestamp());

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
  return keys[getRandomNumber(0, keys.length-1)]
}

function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
  let start = Date.now()
}

function getTimestamp() {
  return Math.floor(Date.now() / 1000)
}

document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  
  keyElement.classList.add("hit")
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove("hit")
  })
  
  if (keyPressed === highlightedKey.innerHTML) {
    timestamps.unshift(getTimestamp());
    const elapsedTime = timestamps[0] - timestamps[1];
    console.log(`Character per minute ${60/elapsedTime}`)
    highlightedKey.classList.remove("selected");
    targetRandomKey();
  } 
})

targetRandomKey();
  
  return(
    <div className="keypadBody">
     <h1 className="title">Eyes on the screen</h1>
        <div className="keyboard">
          <ul className="row row-0 keylist">
            <li className="pinky" id="esc">ESC</li>
            <li className="pinky" id="1">1</li>
            <li className="ring" id="2">2</li>
            <li className="middle" id="3">3</li>
            <li className="pointer1st" id="4">4</li>
            <li className="pointer2nd" id="5">5</li>
            <li className="pointer2nd" id="6">6</li>
            <li className="pointer1st" id="7">7</li>
            <li className="middle" id="8">8</li>
            <li className="ring" id="9">9</li>
            <li className="pinky" id="10">0</li>
            <li className="pinky" >-</li>
            <li className="pinky" >+</li>
            <li className="pinky" id="back">BACK</li>
          </ul>
          <ul className="row row-1 keylist">
            <li className="pinky" id="tab">TAB</li>
            <li className="pinky" id="Q">Q</li>
            <li className="ring" id="W">W</li>
            <li className="middle" id="E">E</li>
            <li className="pointer1st" id="R">R</li>
            <li className="pointer2nd" id="T">T</li>
            <li className="pointer2nd" id="Y">Y</li>
            <li className="pointer1st" id="U">U</li>
            <li className="middle" id="I">I</li>
            <li className="ring" id="O">O</li>
            <li className="pinky" id="P">P</li>
            <li className="pinky" >[</li>
            <li className="pinky" >]</li>
            <li className="pinky" >\</li>
          </ul>
          <ul className="row row-2 keylist">
            <li className="pinky" id="caps">CAPS</li>
            <li className="pinky" id="A">A</li>
            <li className="ring" id="S">S</li>
            <li className="middle" id="D">D</li>
            <li className="pointer1st" id="F">F</li>
            <li className="pointer2nd" id="G">G</li>
            <li className="pointer2nd" id="H">H</li>
            <li className="pointer1st" id="J">J</li>
            <li className="middle" id="K">K</li>
            <li className="ring" id="L">L</li>
            <li className="pinky" >:</li>
            <li className="pinky" >''</li>
            <li className="pinky" id="enter">ENTER</li>
          </ul>
          <ul className="row row-3 keylist">
            <li className="pinky" id="left-shift">SHIFT</li>
            <li className="pinky" id="Z">Z</li>
            <li className="ring" id="X">X</li>
            <li className="middle" id="C">C</li>
            <li className="pointer1st" id="V">V</li>
            <li className="pointer2nd" id="B">B</li>
            <li className="pointer2nd" id="N">N</li>
            <li className="pointer1st" id="M">M</li>
            <li className="middle" >,</li>
            <li className="ring" >.</li>
            <li className="pinky" >;</li>
            <li className="pinky" id="right-shift">SHIFT</li>
          </ul>
        </div>
        <h1 className="title">Hands on the keyboard</h1> 
    </div>
  )
}

export default Keypad;
