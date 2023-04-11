import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import moon from './images/moon.png';
import land from './images/land.png';
import cat from './images/cat.gif';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer 
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize:'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize:'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}

          onClick={()=>ref.current.scrollTo(3)}
        >
          <h1> Welcome to my website </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={2}

          onClick={()=>ref.current.scrollTo(0)}
        >
          <h1> WOOOOOOO! </h1>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start:1.2, end:2.7}}
        >
          <img src={cat} style={{height:"100vh"}}/>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
