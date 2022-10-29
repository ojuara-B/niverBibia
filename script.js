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
       
    
    {
        image: "assets/images/bia04.png",
        title: "Dança da Imitação",
        artist: "Caninípolis",
        file: "assets/Musicas/DANÇA DA IMITAÇÃO.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia05.png",
        title: "Pirulo que bate bate",
        artist: "Baby Roger",
        file: "assets/Musicas/Pirulobate.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia06.png",
        title: "Dança Bolofofos",
        artist: "Bolofofos",
        file: "assets/Musicas/dancabolofos.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia07.png",
        title: "Dança Maluca",
        artist: "Bolofofos",
        file: "assets/Musicas/dancamaluca.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia08.png",
        title: "Abacaxi Flamingo",
        artist: "Bolofofos",
        file: "assets/Musicas/abacaxiflamingo.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia09.png",
        title: "Parabéns da Galinha",
        artist: "Galinha Pintadinha",
        file: "assets/Musicas/parabensgalinha.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia10.png",
        title: "Parabéns 3 Palavrinhas",
        artist: "3palavrinhas",
        file: "assets/Musicas/parabens3palavrinhas.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia01.png",
        title: "Parabéns do Bita",
        artist: "Mundo Bita",
        file: "assets/Musicas/parabensbita.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia02.png",
        title: "Dança da Imitação",
        artist: "Caninópolis",
        file: "assets/Musicas/dancadaimitacao.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia03.png",
        title: "Trem da alegria",
        artist: "Caninópolis",
        file: "assets/Musicas/tremdaalegria.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia04.png",
        title: "Mostro uma Mãozinha",
        artist: "Um herói do Coração",
        file: "assets/Musicas/mostroumamao.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia05.png",
        title: "Tindolelê",
        artist: "Patati Patata",
        file: "assets/Musicas/tindolele.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia06.png",
        title: "Ciranda das Águas",
        artist: "Mundo Bita",
        file: "assets/Musicas/cirandadasaguas.mp3",
        background: "linear-gradient(35deg, #ffc0cb 10%, #ffcbdb 35%, #ff69b4 100%)" 
    },

    {
        image: "assets/images/bia07.png",
        title: "Chuá Tibum",
        artist: "Mundo Bita",
        file: "assets/Musicas/chuatibum.mp3",
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