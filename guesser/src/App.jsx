import { useState } from 'react'

import ZoomableImage from './ZoomableImage'
import './App.css'

import aa from './images/aa.jpg'
import beach from './images/beach.jpg'
import bed from './images/bed.jpg'
import butt from './images/butt.jpg'
import car from './images/car.png'
import cle from './images/cle.png'
import frost from './images/frost.jpg'
import hat from './images/hat.jpg'
import kiss from './images/kiss.jpg'
import mirror from './images/mirror.jpg'
import piano from './images/piano.png'
import rach from './images/rach.jpg'
import rachco from './images/rachco.jpg'
import scoot from './images/scoot.jpg'
import sit from './images/sit.png'
import stand from './images/stand.png'
import tiny from './images/tiny.jpg'
import tub from './images/tub.png'
import win from './images/win.png'
import yay from './images/yay.png'
import e2 from './images/e2.jpg'
import co from './images/co.png'
import eye from './images/eye.png'
import vic from './images/vic.png'
import ass from './images/ass.jpg'
import bear from './images/bear.jpg'
import clif from './images/clif.jpg'
import corn from './images/corn.png'
import field from './images/field.png'
import me from './images/me.jpg'
import pie from './images/pie.jpg'
import rock from './images/rock.jpg'
import room from './images/room.jpg'
import snif from './images/snif.png'
import woah from './images/woah.jpg'
import blanket from './images/blanket.png'
import brick from './images/brick.png'
import ecat from './images/ecat.png'
import lick from './images/lick.png'
import tree from './images/tree.png'
import tum from './images/tum.png'
import turt from './images/turt.png'
import yawn from './images/yawn.png'

const images = [
  { src:aa, ans:['cat']},
  { src:beach, ans:['rach']},
  { src:bed, ans:['both']},
  { src:butt, ans:['rach','cat']},
  { src:car, ans:['rik']},
  { src:cle, ans:['both']},
  { src:frost, ans:['rach','cat']},
  { src:hat, ans:['cat']},
  { src:kiss, ans:['rach','cat']},
  { src:mirror, ans:['rach','cat']},
  { src:piano, ans:['cat']},
  { src:rach, ans:['rach']},
  { src:rachco, ans:['rach','cat']},
  { src:scoot, ans:['both']},
  { src:sit, ans:['cat']},
  { src:stand, ans:['cat']},
  { src:tiny, ans:['both']},
  { src:tub, ans:['cat']},
  { src:win, ans:['cat']},
  { src:yay, ans:['both']},
  { src:e2, ans:['rik']},
  { src:co, ans:['cat']},
  { src:eye, ans:['rach']},
  { src:vic, ans:['rik']},
  { src:ass, ans:['rik']},
  { src:bear, ans:['rik']},
  { src:clif, ans:['both']},
  { src:corn, ans:['rik']},
  { src:field, ans:['both']},
  { src:me, ans:['rik']},
  { src:pie, ans:['rach']},
  { src:rock, ans:['both']},
  { src:room, ans:['both']},
  { src:snif, ans:['cat']},
  { src:woah, ans:['cat']},
  { src:blanket, ans:['cat']},
  { src:brick, ans:['cat']},
  { src:ecat, ans:['cat', 'rik']},
  { src:lick, ans:['cat']},
  { src:tree, ans:['both']},
  { src:tum, ans:['cat']},
  { src:turt, ans:['rach','rik','both','cat']},
  { src:yawn, ans:['cat']},
]

function App() {
  const [curImage, setCurImage] = useState(images[Math.floor(Math.random() * images.length)]);
  const [zoomOut, setZoomOut] = useState(false);
  const [scale, setScale] = useState(5);
  const [correct, setCorrect] = useState(true);
  const [score, setScore] = useState(0);

  const handleSwapImage = () => {
    setScale(5 + Math.floor(Math.random() * 10))
    const randomIndex = Math.floor(Math.random(3548092345) * images.length);
    setCurImage(images[randomIndex]);
    setZoomOut(false);
  }

  const handleGuess = (guess) => {
    if(!zoomOut){
      if(curImage.ans.includes(guess)){
        setCorrect(true);
        setScore(score+1);
      } else {
        setCorrect(false);
        setScore(0);
      }
      setZoomOut(true);
    }
  }

  return (
    <div className="App">
      <h1 style={{marginTop:0, marginBottom:15}}> Rach or Rik ? </h1>

      <ZoomableImage
        src={curImage.src}
        zoom={scale}
        zoomOut={zoomOut}
      />


      <div style={{marginTop:20}}>
        <button style={{marginRight:20, width:'20%', borderColor:'white'}}  onClick={()=> handleGuess('rach')}> rach </button>
        <button style={{marginRight:20, width:'20%', borderColor:'white'}} onClick={()=> handleGuess('rik')}> rik </button>
        <button style={{marginRight:20, width:'20%', borderColor:'white'}} onClick={()=> handleGuess('both')}> rachik </button>
        <button style={{width:'20%', borderColor:'white'}} onClick={()=> handleGuess('cat')}> cat </button>
      </div>

      <h2 style={{ color:'lime'}}>SCORE: {score}</h2>

      {zoomOut?<div style={{position:'absolute', left:'50%', top:'600px', transform:'translate(-50%)'}}>
        {correct ?
        <>
          <h1 style={{ marginBottom:10, backgroundColor:'rgb(50,200,50)', paddingLeft:10, paddingRight:10}}>CORRECT</h1>
          <button style={{width:'40%', borderColor:'lime'}}onClick={handleSwapImage}>NEXT</button>
        </>:
        <>
          <h1 style={{ marginBottom:10, backgroundColor:'red', paddingLeft:10, paddingRight:10}}> WRONG</h1>
          <button style={{width:'40%', borderColor:'red'}}onClick={handleSwapImage}>NEXT</button>
        </>
        }
        
      </div>:<></>}


    </div>
  )
}

export default App
