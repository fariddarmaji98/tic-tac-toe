import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/menu';
import Board from './components/board';

const App = () => {
  const [mode, setMode] = useState(null)

  useEffect(() => {
    console.log('===> mode', mode)
  }, [mode])

  return (<main className='bg-sky-300 h-screen'>
    {mode === null && (<Menu mode={mode} setMode={setMode} />)}
    {mode !== null && (<Board mode={mode} />)}
  </main>);
}

export default App;
