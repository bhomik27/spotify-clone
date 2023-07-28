console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let songItemPlay = document.getElementsByClassName('songItemPlay');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif  = document.getElementById('gif');
let masterSongName  = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));


let songs = [
    {songName: "After Hours" , filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg" },
    {songName: "Blinding Lights" , filePath: "songs/2.mp3", coverPath: "covers/cover2.png" },
    {songName: "Die For" , filePath: "songs/3.mp3", coverPath: "covers/cover3.jpg" },
    {songName: "Often" , filePath: "songs/4.mp3", coverPath: "covers/cover4.jpg" },
    {songName: "Reminder" , filePath: "songs/5.mp3", coverPath: "covers/cover5.jpg" },
    {songName : "Starboy" , filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg" },
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//handle play/pause click

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;


    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        gif.style.opacity = 0;

    }
})


//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100; 
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
        
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
                element.addEventListener('click', (e)=>{
                    makeAllPlays();
                    songIndex = parseInt(e.target.id);


                    if(audioElement.paused || audioElement.currentTime<=0){
                        audioElement.play();
                        e.target.classList.remove('fa-play');
                        e.target.classList.add('fa-pause');
                        gif.style.opacity = 1;
                
                
                    }
                    else{
                        audioElement.pause();
                        e.target.classList.add('fa-play');
                        e.target.classList.remove('fa-pause');
                        gif.style.opacity = 0;
                
                    }

                    audioElement.src = `songs/${songIndex+1}.mp3`;
                    masterSongName.innerText = songs[songIndex].songName;
                    audioElement.currentTime = 0;
                    audioElement.play();
                    gif.style.opacity = 1;
                    masterPlay.classList.remove('fa-play');
                    masterPlay.classList.add('fa-pause');
                })

}) 


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;

})
