console.log("Welcome to spotify")

// Intialize the variables
let songIndex = 0;
let audioElement = new Audio ('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    },

    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    },

    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    },

    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    },

    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    },

    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    },

    
    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    },

    
    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    },

    
    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    },

    
    {
        songName: "Salam-e-Ishq", 
        filepath: "songs/1.mp3" , 
        coverPath: "covers/1.jpg"
    }
]

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        //Here classList property returns or add the CSS classnames.
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
/*1. event occurs when the play time of a media changes.

2. event occurs while the media is playing.

3. event occurs when the user moves the play position*/

audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
   
    
})


