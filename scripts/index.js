addEventListener("contextmenu", event => event.preventDefault())


async function main(){
    let response=await fetch("http://127.0.0.1:3000/music/")
    let songs_directory=await response.text()
    let div=document.createElement('div')
    div.innerHTML=songs_directory
    let as = div.getElementsByTagName("a")
    let songs=[]
    for (let i = 0; i < as.length; i++) {
        if(as[i].href.endsWith('.mp3'))
        songs.push(as[i].href)
    }
    for(let i=0;i<songs.length;i++){
        let element = document.querySelector(".song-info")
        console.log(element)
    }
}

main()