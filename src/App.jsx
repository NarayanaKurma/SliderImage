import { useState } from 'react';

import reactLogo from './assets/react.svg';
import heroImg from './assets/hero.png';
import viteLogo from './assets/vite.svg';
import ImageSlider from './imageSlide';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
           <ImageSlider url='https://picsum.photos/v2/list'/>
    </>
  )
}

export default App
