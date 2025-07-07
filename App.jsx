import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { useContext, useRef } from 'react';
import { PlayerContext } from './components/PlayerContext';
import { createContext } from 'react';
function App() {

  const { audioRef, track
  } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black text-white">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      <Player />
      {track && <audio ref={audioRef} src={track.file} preload='auto'></audio>}
      <audio ref={audioRef} src={track.file} preload="auto" />

    </div>

  );
}

export default App;
