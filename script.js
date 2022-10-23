let img = document.getElementById("img")
let audio = document.getElementById("audio")
let trackName = document.getElementById("track-name")
let trackArtist = document.getElementById("track-artist")
let back = document.getElementById("back")
let play = document.getElementById("play")
let foward = document.getElementById("foward")
let currentMusic = document.getElementById("current-time")
let totalMusic = document.getElementById("total-duration")
let progress = document.getElementById("progress")

let playing = false
let index = 0

let data = [
    {
        image: "assets/images/bia02.png",
        title: "Pula Pula Pipoquinha",
        artist: "Bob Zoom",
        file: "assets/Musicas/pulapulapipoquinha.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia01.png",
        title: "Funk do Patinho",
        artist: "Bento e Totó",
        file: "assets/Musicas/funkpatinho.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia03.png",
        title: "Dirigindo o Meu Carro",
        artist: "Xuxa",
        file: "assets/Musicas/Dirigindo.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },
        
]

localStorage.setItem("newData", JSON.stringify(data))
let musics = JSON.parse(localStorage.newData)

function RenderMe(){
    img.src = musics[index].image
    audio.src = musics[index].file
    document.body.style.backgroundImage = musics[index].background
    trackName.innerHTML = musics[index].title
    trackArtist.innerHTML = musics[index].artist
}
RenderMe()

function playPause(){
    playing ? goPause() : goPlay()
}
function goPause(){
    audio.pause()
    play.src = "assets/buttons/play-circle.svg"
    playing = false
}
function goPlay(){
    audio.play()
    play.src = "assets/buttons/pause-circle.svg"
    playing = true
}
function updateProgress(){
    let porcent = Math.floor((audio.currentTime / audio.duration) * 100)
    progress.value = porcent
    currentMusic.innerHTML = secondsInMinutes(Math.floor(audio.currentTime)
    )
    totalMusic.innerHTML = secondsInMinutes(Math.floor(audio.duration))
    if(audio.currentTime == audio.duration) {
        nextMusic()
    }
}
function changeProgress(){
    audio.currentTime = progress.value / progress.max * audio.duration
    goPlay()
    audio.play()
}
function secondsInMinutes(second) {
    let minutes = Math.floor(second / 60)
    let seconds = second % 60

    if(seconds < 10) {
        seconds = '0' + seconds
    }
    return minutes + ":" + seconds
}

function backMusic(){
    index --
    if(index < 0){
        index = musics.length - 1
    }
    RenderMe()
    goPlay()
}

function nextMusic(){
    index ++
    if(index > musics.length - 1){
        index = 0
    }
    RenderMe()
    goPlay()
}

play.addEventListener("click", playPause)
audio.addEventListener("timeupdate", updateProgress)
progress.addEventListener("change", changeProgress)
back.addEventListener("click", backMusic)
foward.addEventListener("click", nextMusic)