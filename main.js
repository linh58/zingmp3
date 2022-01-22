const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const contentNavItems = $$('.content__navbar-item')


contentNavItems.forEach((contentNavItem) => {
    contentNavItem.onclick = () => {
        $('.content__navbar-item.content__navbar-active').classList.remove('content__navbar-active')
        contentNavItem.classList.add('content__navbar-active')
    }
})

const sideBar = $('.app__sidebar')
const expandButton = $('.sidebar__expand-icon')
const expandTexts = $$('.expand-text')
const sidebarLogo = $('.sidebar__logo-img')
const sidebarSmallLogo = $('.sidebar__small-logo')
const libraryItems = $$('.sidebar__library-item')
const sidebarLogos = $$('.sidebar__logo')
const sidebarItems = $$('.sidebar__item')
const libraryTitle = $('.sidebar__library-title h4')
const main = $('.app')
const navbar = $('.sidebar__navbar')



expandButton.onclick = function() {
    if(sideBar.classList.toggle('expand')) {
        sideBar.style.transition = '0.3s ease-out'
        expandTexts.forEach(function(expandText) {
            expandText.style.display = 'block'
        })
        sidebarLogos.forEach(function(sidebarLogo) {
            sidebarLogo.style.textAlign = 'unset'
        })
        libraryItems.forEach(function(libraryItem) {
            libraryItem.style.justifyContent = 'unset'
        })
        sidebarItems.forEach(function(sidebarItem) {
            sidebarItem.style.padding = '16px 0 16px 27px'
            sidebarItem.style.justifyContent = 'unset'
        })
        sidebarLogo.style.display = 'block'
        sidebarSmallLogo.style.display = 'none'
        libraryTitle.style.display = 'block'
    }
    else {
        expandTexts.forEach(function(expandText) {
            expandText.style.display = 'none'
        })
        sidebarLogos.forEach(function(sidebarLogo) {
            sidebarLogo.style.textAlign = 'center'
        })
        libraryItems.forEach(function(libraryItem) {
            libraryItem.style.justifyContent = 'center'
        })
        sidebarItems.forEach(function(sidebarItem) {
            sidebarItem.style.padding = '16px 0'
            sidebarItem.style.justifyContent = 'center'
        })
        sidebarLogo.style.display = 'none'
        sidebarSmallLogo.style.display = 'block'
        libraryTitle.style.display = 'none'
    }
}
const logout = $('.option__logout')
const optionButton = $('.option__button')
function openLogOut() {
    logout.classList.toggle('logout-active')
}
function hideLogOut() {
    logout.classList.remove('logout-active')
}
main.addEventListener('click', hideLogOut)
optionButton.addEventListener('click', openLogOut)
optionButton.addEventListener('click', function(e) {
    e.stopPropagation()
})
logout.addEventListener('click', function(e) {
    e.stopPropagation()
})


const PLAYER_STORAGE_KEY = 'ZING_MP3'

const songList = $('.song__list')
const audio = $('#audio')
const toggleButton = $('.player__toggle-button')
const playIcon = $('.play-icon')
const pauseIcon = $('.pause-icon')
const cdThumb = $('.cd-thumb-img')
const songTitle = $('.player__left-title')
const songSinger = $('.player__left-singer')
const nextButton = $('.player__next-button')
const prevButton = $('.player__prev-button')
const progress = $('#progress--main')
const trackTimes = $$('.track-time')
const durationTimes = $$('.duration-time')
const randomButton = $('.player__random-button')
const repeatButton = $('.player__repeat-button')
const volumeIcon = $('.volume--icon')
const progressVolume = $('#progress-volume')
const playerVolume =$('.player__right-volume')
const playallButton = $('.song__top-playall')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMuted: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: 'Waiting For Love',
            singer: 'Avicii',
            path: './assets/mp3/Waiting-For-Love-Avicii.mp3',
            image: './assets/img/content-song/song-img/waitingforlove.webp',
            time: '03:48'
        },
        {
            name: '21',
            singer: 'Gracie Abrams',
            path: './assets/mp3/21-Gracie-Abrams.mp3',
            image: './assets/img/content-song/song-img/21.webp',
            time: '03:05'
        },
        {
            name: 'Angel Baby',
            singer: 'Troye Sivan',
            path: './assets/mp3/Angel-Baby-Troye-Sivan.mp3',
            image: './assets/img/content-song/song-img/angelbaby.webp',
            time: '03:40'
        },
        {
            name: 'Blue',
            singer: 'Troye Sivan, Alex Hope',
            path: './assets/mp3/BLUE-Troye-Sivan-Alex-Hope.mp3',
            image: './assets/img/content-song/song-img/blue.webp',
            time: '03:31'
        },
        {
            name: 'Leave Before You Love Me',
            singer: 'Marshmello, Jonas Brothers',
            path: './assets/mp3/Leave-Before-You-Love-Me-Marshmello-Jonas-Brothers.mp3',
            image: './assets/img/content-song/song-img/leavebeforeyouloveme.webp',
            time: '02:35'
        },
        {
            name: 'Night Change',
            singer: 'One Direction',
            path: './assets/mp3/Night-Changes-One-Direction.mp3',
            image: './assets/img/content-song/song-img/nightchange.webp',
            time: '03:46'
        },
        {
            name: 'Save The Last Dance For Me',
            singer: 'Bruce Willies',
            path: './assets/mp3/Save-The-Last-Dance-For-Me-Bruce-Willis.mp3',
            image: './assets/img/content-song/song-img/savethelastdanceforme.webp',
            time: '03:21'
        },
        {
            name: 'Strawberries & Cigarettes',
            singer: 'Troye Sivan',
            path: './assets/mp3/Strawberries-Cigarettes-Troye-Sivan.mp3',
            image: './assets/img/content-song/song-img/strawberry.webp',
            time: '03:21'
        },
        {
            name: 'To The Moon',
            singer: 'hooligan.',
            path: './assets/mp3/To-The-Moon-hooligan.mp3',
            image: './assets/img/content-song/song-img/tothemoon.webp',
            time: '03:21'
        }, 
        {
            name: 'Chàng Trai Mặc Áo Xanh',
            singer: 'Mademoiselle',
            path: './assets/mp3/Chang-Trai-Mac-Ao-Xanh-Mademoiselle.mp3',
            image: './assets/img/content-song/song-img/changtraimacaoxanh.png',
            time: '04:14'
        },
        {
            name: 'What Makes You Beautiful',
            singer: 'One Direction',
            path: './assets/mp3/What-Makes-You-Beautiful-One-Direction.mp3',
            image: './assets/img/content-song/song-img/whatmakesyoubeautiful.webp',
            time: '03:18'
        },
    ],

    setConfig: function(key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },

    render: function() {
        const _this = this
        const htmls = this.songs.map(function(song, index) {
            return `
                <li class="song__item">
                    <div class="song__item-left">
                        <div class="song__item-img">
                            <img src="${song.image}" alt="">
                            <div class="song__img-overlay">
                                <i class="bi bi-play-fill img-overlay-icon"></i>
                                </div>
                            <img src="./assets/img/content-song/icon/icon-playing.gif" alt="" class="song__active-gif">
                        </div>
                        <div class="song__item-description">
                            <h5 class="song__item-title">${song.name}</h5>
                            <p class="song__item-singer">${song.singer}</p>
                        </div>
                    </div>
                    <p class="song__item-time hide-on-tablet hide-on-mobile">${song.time}</p>
                    <div class="song__item-options">
                        <div class="song__item-option option-icon hide-on-mobile">
                            <i class="bi bi-mic-fill"></i>
                        </div>
                        <div class="song__item-option option-icon hide-on-mobile">
                            <i class="bi bi-heart-fill option__active"></i>
                        </div>
                        <div class="song__item-option option-icon hide-on-tablet">
                            <i class="bi bi-three-dots"></i>
                        </div>
                    </div>
                </li>
            `
        })
        songList.innerHTML = htmls.join('')
        const songItems = $$('.song__item')
        const activeGifs = $$('.song__active-gif')
        const overlayPauses = $$('.img-overlay-icon')
        const songItemOptions = $$('.song__item-option')
        songItems.forEach(function(songItem, index) {
            
            if(index === _this.currentIndex) {
                songItem.classList.add('song__item-active')
            }
            songItem.onclick = function() {
                const activeGif = activeGifs[index]
                const overlayPause = overlayPauses[index]
                _this.currentIndex = index
                $('.song__item.song__item-active').classList.remove('song__item-active') 
                songItem.classList.add('song__item-active')
                _this.loadCurrentSong()
                audio.play()
                // if(songItem.classList.contains('song__item-active')) {
                //     activeGif.style.display = 'block'
                //     overlayPause.style.display = 'none'
                // }
                // else {
                //     activeGif.style.display = 'none'
                //     overlayPause.style.display = 'block'
                // }
            }
        })
        songItemOptions.forEach(songItemOption => {
            songItemOption.onclick = (e) => {
                e.stopPropagation()
            }
        })

    },

    trackTimeHandle: function() {
        const currentTime = audio.currentTime | 0;                
        const minutes = "0" + Math.floor(currentTime / 60);
        const seconds = "0" + (currentTime - minutes * 60);
        const cur = minutes.substr(-2) + ":" + seconds.substr(-2);

        return cur

    },

    durationTimeHandle: function() {
        const duration = audio.duration | 0;          

        const minutes = "0" + Math.floor(duration / 60);
        const seconds = "0" + (duration - minutes * 60);

        const dur = minutes.substr(-2) + ":" + seconds.substr(-2);

        return dur
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function() {
        const _this = this

        const cdThumbAnimate = cdThumb.animate([
            {
                transform: 'rotate(0)',
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 8000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()
        toggleButton.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            }
            else {
                audio.play()
            }
        }
        audio.onplay = function() {
            _this.isPlaying = true
            pauseIcon.style.display = 'block'
            playIcon.style.display = 'none'
            cdThumbAnimate.play()

        }
        audio.onpause = function() {
            _this.isPlaying = false
            pauseIcon.style.display = 'none'
            playIcon.style.display = 'block'
            cdThumbAnimate.pause()
        }

        playallButton.onclick = function() {
            const firstNode = songList.children[0]
            const songNode = songList.children
            for(var i = 0; i < songNode.length; i++) {
                if(songNode[i].classList.contains('song__item-active')) {
                    songNode[i].classList.remove('song__item-active')
                }
            }
            firstNode.classList.add('song__item-active')
            _this.currentIndex = 0
            _this.loadCurrentSong()
            audio.play()
        }

        nextButton.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }
            else {
                _this.nextSong()
            }
            _this.render()
            audio.play()
        }
        
        prevButton.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }
            else {
                _this.prevSong()
            }
            _this.render()
            audio.play()
        }

        randomButton.onclick = function() {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomButton.classList.toggle('active', _this.isRandom)
        }

        repeatButton.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatButton.classList.toggle('active', _this.isRepeat)
        } 

        playerVolume.onclick = function () {
           if(volumeIcon.classList.contains('bi-volume-up')) {
                audio.muted = true
                volumeIcon.classList.remove('bi-volume-up')
                volumeIcon.classList.add('bi-volume-mute')
           }
           else {
                audio.muted = false
                volumeIcon.classList.add('bi-volume-up')
                volumeIcon.classList.remove('bi-volume-mute')
           }
           
        }

        progress.oninput = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
                trackTimes.forEach(trackTime => {
                    trackTime.textContent = _this.trackTimeHandle()
                })
                durationTimes.forEach(durationTime => {
                    durationTime.textContent = _this.durationTimeHandle()
                })
            }
        }

        progressVolume.oninput = function(e) {
            const volumeUpdatePercent = e.target.value
            const volumeUpdate = e.target.value / 100
            progressVolume.value = volumeUpdatePercent
            audio.volume = volumeUpdate
            if(audio.volume === 0) {
                volumeIcon.classList.remove('bi-volume-up')
                volumeIcon.classList.add('bi-volume-mute')
            }
            else {
                volumeIcon.classList.add('bi-volume-up')
                volumeIcon.classList.remove('bi-volume-mute')
            }
        }

        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                nextButton.click()
            }
        }

        // songList.onclick = function(e) {
        //     var songNode = e.target.closest('.song__item:not(.song__item-active)')
        //     if(songNode.closest('.song__item:not(.song__item-active)')) {
        //         if(songNode) {
        //             _this.currentIndex = Number(songNode.dataset.index) 
        //             _this.loadCurrentSong()
        //             _this.render()
        //             audio.play()
        //         }
        //     }
        // }

    },
    
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    playRandomSong: function() {
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    loadConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },  

    loadCurrentSong: function() {
        const _this = this
        audio.src = this.currentSong.path
        cdThumb.src = this.currentSong.image
        songTitle.textContent = this.currentSong.name
        songSinger.textContent = this.currentSong.singer
    },

    start: function() {
        this.loadConfig()

        this.render()

        this.handleEvents()

        this.defineProperties()

        this.loadCurrentSong()

        randomButton.classList.toggle('active', this.isRandom)
        repeatButton.classList.toggle('active', this.isRepeat)
    }
}


app.start()
