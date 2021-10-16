import {useState} from 'react';
import Player from './components/Player';


function App() {
  
  const [songs, setsongs] = useState( [

    {
        name: "Demons",
        artist: "Imagine Dragons",
        img_src: "./images/imagine.jpg",
        src: "./songs/demons.mp3",
    },
    {
        name: "Alone",
        artist: "Alan Walker",
        img_src: "./images/alan.jpg",
        src: "./songs/alone.mp3",
    },
        
    {
        name: "On My Way",
        artist: "Alan Walker",
        img_src: "./images/alan2.jpg",
        src: "./songs/On-My-Way.mp3",
        
        
    },

    
    {
        name: "only you",
        artist: "Ric Hassani",
        img_src: "./images/ric.jpg",
        src: "./songs/only-you.mp3",
    }

]);

const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  
  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
