import React, { useState } from 'react';
import './style/app.scss'

// adiding
import Player from './components/Player'
import Song from './components/Song'
import Liabry from './components/Libary'

import data from './util';

function App() {

  const [songs, setSong] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Liabry songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
