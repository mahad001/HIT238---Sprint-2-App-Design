import {useState, useEffect} from 'react';
import Player from './components/Player';


function App() {
  
  const [songs] = useState( [

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
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex +1 );

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;