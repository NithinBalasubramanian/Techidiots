import React, { useEffect , useState  } from 'react'
import '../../keypad.css';

const Keypad = () => {
  
  let [ Keysetted , setKeysetted ] = useState('');

  let keyNow = '';

    useEffect(() => {
      changeChar();
        window.addEventListener("keydown",handleKeyDown);
    },[]);

    const changeChar = () => {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = randomChars. charAt(Math. floor(Math. random() * randomChars.length));
        setKeysetted(result);
        keyNow = result;
    }

    const handleKeyDown = (e) => {
      if(e.key.toUpperCase() === keyNow){
        console.log("matched");
        changeChar();
      }
    }
  
  return(
    <div className="keypadBody">
     <h1 className="title">Eyes on the screen - { Keysetted } </h1>
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
            <li className={ Keysetted === 'Q' ? 'pinky selected': 'pinky' } id="Q" >Q</li>
            <li className={ Keysetted === 'W' ? 'ring selected': 'ring' } id="W">W</li>
            <li className={ Keysetted === 'E' ? 'middle selected': 'middle' } id="E">E</li>
            <li className={ Keysetted === 'R' ? 'pointer1st selected': 'pointer1st' }  id="R">R</li>
            <li className={ Keysetted === 'T' ? 'pointer2nd selected': 'pointer2nd' } id="T">T</li>
            <li className={ Keysetted === 'Y' ? 'pointer2nd selected': 'pointer2nd' } id="Y">Y</li>
            <li className={ Keysetted === 'U' ? 'pointer1st selected': 'pointer1st' }  id="U">U</li>
            <li className={ Keysetted === 'I' ? 'middle selected': 'middle' } id="I">I</li>
            <li className={ Keysetted === 'O' ? 'ring selected': 'ring' } id="O">O</li>
            <li className={ Keysetted === 'P' ? 'pinky selected': 'pinky' } id="P">P</li>
            <li className="pinky" >[</li>
            <li className="pinky" >]</li>
            <li className="pinky" >\</li>
          </ul>
          <ul className="row row-2 keylist">
            <li className="pinky" id="caps">CAPS</li>
            <li className={ Keysetted === 'A' ? 'pinky selected': 'pinky' } id="A">A</li>
            <li className="ring" id="S">S</li>
            <li className={ Keysetted === 'D' ? 'middle selected': 'middle' } id="D">D</li>
            <li className={ Keysetted === 'F' ? 'pointer1st selected': 'pointer1st' } id="F">F</li>
            <li className={ Keysetted === 'G' ? 'pointer2nd selected': 'pointer2nd' } id="G">G</li>
            <li className={ Keysetted === 'H' ? 'pointer2nd selected': 'pointer2nd' } id="H">H</li>
            <li className={ Keysetted === 'J' ? 'pointer1st selected': 'pointer1st' }  id="J">J</li>
            <li className={ Keysetted === 'K' ? 'middle selected': 'middle' } id="K">K</li>
            <li className={ Keysetted === 'L' ? 'ring selected': 'ring' } id="L">L</li>
            <li className="pinky" >:</li>
            <li className="pinky" >''</li>
            <li className="pinky" id="enter">ENTER</li>
          </ul>
          <ul className="row row-3 keylist">
            <li className="pinky" id="left-shift">SHIFT</li>
            <li className={ Keysetted === 'Z' ? 'pinky selected': 'pinky' } id="Z">Z</li>
            <li className={ Keysetted === 'X' ? 'ring selected': 'ring' } id="X">X</li>
            <li className={ Keysetted === 'C' ? 'middle selected': 'middle' } id="C">C</li>
            <li className={ Keysetted === 'V' ? 'pointer1st selected': 'pointer1st' }  id="V">V</li>
            <li className={ Keysetted === 'B' ? 'pointer2nd selected': 'pointer2nd' } id="B">B</li>
            <li className={ Keysetted === 'N' ? 'pointer2nd selected': 'pointer2nd' } id="N">N</li>
            <li className={ Keysetted === 'M' ? 'pointer1st selected': 'pointer1st' }  id="M">M</li>
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
