import './App.css';
import React, {useEffect, useState} from 'react'

import Landing from './landing/landing';
import About from './about/about';

function App() {

  const useMouse = () => {

    const [mousePosition, setMousePosition] = useState({ x: null, y: null })

    useEffect(() => {
        function handle(e) {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        document.addEventListener("mousemove", handle)
        return () => document.removeEventListener("mousemove", handle)
    });

    return mousePosition;
}

const { x, y } = useMouse();

  return (
    <div className='App'>
      <div className="cursor" style={{ left: `${x}px`, top: `${y}px` }}></div>
      <div className="cursor-2" style={{ left: `${x}px`, top: `${y}px` }}></div>
      <Landing />
      <About />
    </div>
  );
}

export default App;
