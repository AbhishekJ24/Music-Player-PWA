addEventListener("contextmenu", event => event.preventDefault())


async function getSongs() {
    let response = await fetch("http://127.0.0.1:3000/music/")
    let songs_directory = await response.text()
    let div = document.createElement('div')
    div.innerHTML = songs_directory
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let i = 0; i < as.length; i++) {
        if (as[i].href.endsWith('.mp3'))
            songs.push(as[i].href)
    }
    return songs
}

async function main() {
    let songs = await getSongs()
    let songUL = document.querySelector(".songs-library-list").getElementsByTagName("ul")[0]
    for (const song of songs) {
        let s =song.split('/music/')[1].split('.mp3')[0]
        songUL.innerHTML = songUL.innerHTML + 
        `<li class="flex align-items m5 border-radius-10">
            <img src="/assets/img/thumb1.jpeg" alt="">
            <div class="song-info">
                <p>${s.replaceAll("%20"," ")}</p>
                <p>Artist</p>
            </div>
            <button>
                <img class="invert-svg" src="/assets/img/play-track.png" alt="">
            </button>
        </li>`
    }
}

main()