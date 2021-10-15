
const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector("#main-audio"),
playpausebtn = container.querySelector(".play-pause");
nextBtn = container.querySelector(".next");
prevBtn = container.querySelector("prev");

let musicIndex = 1;

window.addEventListener("load" , ()=>{
    loadMusic(musicIndex);
})

// load music function

function loadMusic(indexNumb){
    musicName.innertext = allMusic[indexNumb - 1].name;
    musicArtist.innertext = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic [indexNumb -1].img}.jpg`;
    mainAudio.src = `songs/${allMusic [indexNumb -1].src}.mp3`;
}

//play music function

function playMusic(){
    container.classList.add("paused");
    playpausebtn.querySelector("i").innertext = "pause";
    mainAudio.play();
}

// pause music function

function pauseMusic(){
    container.classList.add("paused");
    playpausebtn.querySelector("i").innertext = "play_arrow";
    mainAudio.pause();
}

// next music function
function nextMusic(){
    musicIndex++;
    loadMusic(musicIndex);
    playMusic();
}

//play or music button event

playpausebtn.addEventListener("click" , ()=>{
    const isMusicPaused = container.classList.contains("paused");

    isMusicPaused ? pauseMusic() : playMusic();
});

// next music button event

nextBtn.addEventListener("click" , ()=> {
nextMusic();
});