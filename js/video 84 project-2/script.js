console.log("hllo ji")
let currentSong = new Audio

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min
    }
    return `${min}:${sec}`;
}


async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/assets/songs/")
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    console.log(as)
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".m4a")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    console.log(songs)
    return songs;
}

const playMusic = (track, pause = false) => {
    currentSong.src = "/assets/songs/" + track
    if (!pause) {
        currentSong.play()
        document.querySelector("#play img").src = "svg/pause.svg"
    }
    console.log(currentSong.src)

    let seekbarSong = document.querySelector(".name")
    seekbarSong.innerHTML = `<a href="#">${track.replaceAll("%20", " ")}</a>`
    console.log(seekbarSong)
}

async function main() {
    let songs = await getSongs()
    playMusic(songs[0], true)

    let songAdd = document.querySelector(".song-list-card-container")

    for (const song of songs) {
        songAdd.innerHTML = songAdd.innerHTML + ` <div class="song-list-card flex-space-between">
                            <div class="flex-start play-song">
                                <div class="song-list-img flex-center">
                                    <img src="assets/songs_img/aura.jpg" alt="">
                                </div>
                                <div class="song-name playlist-song-name" data-song="${song}">
                                    ${song.replaceAll("%20", " ")}
                                </div>
                            </div>
                            <div class="song-duration">
                                00
                            </div>
                        </div>`;
    }

    Array.from(document.querySelector(".song-list-card-container").getElementsByClassName("song-list-card")).forEach(e => {
        e.addEventListener("click", element => {
            let song_name = e.querySelector(".song-name").dataset.song
            console.log(song_name)
            playMusic(song_name)
        })
    })
    //listen for timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".current-time").innerHTML = formatTime(currentSong.currentTime)
        document.querySelector(".circule").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
        document.querySelector(".seekbar-fill").style.width = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })
    currentSong.addEventListener("loadedmetadata", () => {
        document.querySelector(".duration").innerHTML = formatTime(currentSong.duration)
    });

    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            document.querySelector("#play img").src = "svg/pause.svg"
        }
        else {
            currentSong.pause()
            document.querySelector("#play img").src = "svg/play.svg"
        }
    })

    let seekbar = document.querySelector(".seekbar")
    seekbar.addEventListener("click", e => {

        let rect = seekbar.getBoundingClientRect()

        let percent =
            (e.clientX - rect.left) / rect.width

        currentSong.currentTime =
            percent * currentSong.duration
    })


}
main()  