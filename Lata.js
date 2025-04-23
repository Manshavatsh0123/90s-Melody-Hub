const music = new Audio('music/lata/1.mp3');
//music.play();

const songs = [
    {
        id:1,
        songname:'Lag Ja Gale<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/1.jpg",
    },
    {
        id:2,
        songname:'Ajeeb Dastan Hai Yeh <br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/2.jpg",
    },
    {
        id:3,
        songname:'Tere Bina Zindagi Se Koi Shikwa To Nahi<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/3.jpg",
    },
    {
        id:4,
        songname:' Pyar Kiya To Darna Kya<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/4.jpg",
    },
    {
        id:5,
        songname:' Ek Pyaar Ka Nagma Hai<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/5.jpg",
    },
    {
        id:6,
        songname:'Tujhse Naraz Nahi Zindagi<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/6.jpg",
    },
    {
        id:7,
        songname:'Dil Deewana Bin Sajna Ke<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/7.jpg",
    },
    {
        id:8,
        songname:'Mohe Panghat Pe<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/8.jpg",
    },
    {
        id:9,
        songname:'Kabhi Kabhie Mere Dil Mein<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/9.jpg",
    },
    {
        id:10,
        songname:'Chalte Chalte Yun Hi Koi<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/10.jpg",
    },
    {
        id:11,
        songname:'Tum Aa Gaye Ho Noor Aa Gaya <br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/11.jpg",
    },
    {
        id:12,
        songname:'Mere Haathon Mein<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/12.jpg",
    },
    {
        id:13,
        songname:'Baharon Phool Barsao<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/13.jpg",
    },
    {
        id:14,
        songname:'Naam Gum Jaayega<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/14.jpg",
    },
    {
        id:15,
        songname:'Hothon Mein Aisi Baat<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/15.jpg",
    },
    {
        id:16,
        songname:'Yeh Sama Sama Hai Ye Pyar Ka<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/16.jpg",
    },
    {
        id:17,
        songname:'Beeti Na Bitai Raina<br><div class="subtitle">Lata Mangeshkar</div>',
        poster:"img/lata/17.jpg",
    }
        
]
//Image and songName Control by JavaScript
Array.from(document .getElementsByClassName('songItem')) .forEach((e ,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster ; 
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname ;
});

//search data start
let search_result = document.getElementsByClassName('search_result')[0];

songs.forEach(element => {
    const{id,songname,poster} =element;
    
    let card = document.createElement('a');
    card.classList.add('card');
    card.href ="#" + id;
    card.innerHTML =`
    <img src="${poster}" alt="">
                <div class="content">
                ${songname}
                </div>
    `;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () =>{
    let input_value =input.value.toUpperCase();
    let items =search_result.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items [index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display ="flex";
        } else {
            items[index].style.display ="none";
        }

        if (input_value == 0) {
            search_result.style.display ="none";
        } else {
            search_result.style.display ="";
        }
        
    }
});
//search data end

//Music play,Wave music-play-Btn 
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay .addEventListener('click',() => {
    if(music.paused || music.currentTime <= 0 ){
     music.play();
     wave.classList.add('active1');
     masterPlay.classList.add('fa-circle-pause');
     masterPlay.classList.remove('fa-circle-play');
    } else{
       music.pause();
       wave.classList.remove('active1');
       masterPlay.classList.remove('fa-circle-pause');
       masterPlay.classList.add('fa-circle-play');
    }
});

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style .background ='rgb(105 ,105 ,105 ,.0)';
    })
}
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) =>{
        el.classList.remove('fa-circle-pause');
        el.classList.add('fa-circle-play');
    })
}

//Music Play(1-17)
let index =0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array .from(document.getElementsByClassName('playlistPlay')).forEach((e) =>{
    e.addEventListener('click',(el) =>{
        index = el.target.id ;
        //console.log(index);
        music.src =`music/lata/${index}.mp3`;
        poster_master_play.src = `img/lata/${index}.jpg`;
        download_music.href = `music/lata/${index}.mp3`;
        music.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        })
        songTitles.forEach(elss =>{
            let{songname} = elss;
            title.innerHTML = songname;
            download_music.setAttribute('download', songname);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105 ,105 ,105 ,.1)";
        makeAllPlays();
        el.target.classList.add('fa-circle-pause');
        el.target.classList.remove('fa-circle-play');
        wave.classList.add('active1');
   });
})


//music bar
let currentStart = document .getElementById('currentStart');
let currentEnd = document .getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    //End time
    let min1 =Math.floor(music_dur / 60);
    let sec1 =Math.floor(music_dur % 60);
    
    if(sec1 <10){
        sec1 =`0${sec1}`;
    }
    currentEnd.innerText =`${min1}:${sec1}`;

    //Start time
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 <10){
        sec2 =`0${sec2}`;
    }
    currentStart.innerText =`${min2}:${sec2}`;
    
    //seek bar
    let progressBar = parseInt((music_curr / music_dur) *100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left =`${seekbar}%`;

});
seek.addEventListener('change',() =>{
    music.currentTime =seek.value * music.duration /100;
});


//volume setting
let vol_icon= document.getElementById('vol_icon');
let vol_seek = document.getElementById('vol_seek');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol_seek.addEventListener('change',() =>{
    
    if (vol_seek.value == 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-off');
    }
    if (vol_seek.value > 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }
    if (vol_seek.value > 50) {
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }
    let vol_a =vol_seek.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


//master-play music next or back
let back = document.getElementById('back');
let next = document.getElementById('next');

//back Music
back.addEventListener('click',() =>{
        index -= 1;
        if (index < 1) {
            index = Array.from(document.getElementsByClassName('songItem')).length;
        }
        music.src =`music/lata/${index}.mp3`;
        poster_master_play.src = `img/lata/${index}.jpg`;
        music.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        })
        songTitles.forEach(elss =>{
            let{songname} = elss;
            title.innerHTML = songname;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105 ,105 ,105 ,.1)";
        makeAllPlays();
        el.target.classList.add('fa-circle-pause');
        el.target.classList.remove('fa-circle-play');
        wave.classList.add('active1');
});

//forward Music
next.addEventListener('click',() => {
        index++ ;
        if (index > Array.from(document.getElementsByClassName('songItem')).length) {
            index = 1 ;
        }
        music.src =`music/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        })
        songTitles.forEach(elss =>{
            let{songname} = elss;
            title.innerHTML = songname;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105 ,105 ,105 ,.1)";
        makeAllPlays();
        el.target.classList.add('fa-circle-pause');
        el.target.classList.remove('fa-circle-play');
        wave.classList.add('active1');

});

// songs left - right
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () =>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let item_btn_left = document.getElementById('item_btn_left');
let item_btn_right = document.getElementById('item_btn_right');
let item = document.getElementsByClassName('item')[0];

item_btn_right.addEventListener('click', () =>{
    item.scrollLeft += 330;
});
item_btn_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',() =>{
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('fa-repeat');
            shuffle.classList.remove('fa-music');
            shuffle.classList.remove('fa-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.remove('fa-music');
            shuffle.classList.add('fa-shuffle');
            shuffle.innerHTML = 'random';
            break;    
        case "random":
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.add('fa-music');
            shuffle.classList.remove('fa-shuffle');
            shuffle.innerHTML = 'next';
            break;   
       
    }
});


const next_music = () =>{
    if (index == songs.length) {
        index = 1;
    } else {
        index ++;
    }
    music.src =`music/lata/${index}.mp3`;
    poster_master_play.src = `img/lata/${index}.jpg`;
    download_music.href = `music/lata/${index}.mp3`;
    music.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    })
    songTitles.forEach(elss =>{
        let{songname} = elss;
        title.innerHTML = songname;
        download_music.setAttribute('download', songname);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105 ,105 ,105 ,.1)";
    makeAllPlays();
    el.target.classList.add('fa-circle-pause');
    el.target.classList.remove('fa-circle-play');
    wave.classList.add('active1');
}


const repeat_music = () =>{
    index;
    music.src =`music/lata/${index}.mp3`;
    poster_master_play.src = `img/lata/${index}.jpg`;
    download_music.href = `music/lata/${index}.mp3`;
    music.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    })
    songTitles.forEach(elss =>{
        let{songname} = elss;
        title.innerHTML = songname;
        download_music.setAttribute('download', songname);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105 ,105 ,105 ,.1)";
    makeAllPlays();
    el.target.classList.add('fa-circle-pause');
    el.target.classList.remove('fa-circle-play');
    wave.classList.add('active1');
}

const random_music = () =>{
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor(Math.random() * songs.length) +1;
    }
    music.src =`music/lata/${index}.mp3`;
    poster_master_play.src = `img/lata/${index}.jpg`;
    download_music.href = `music/lata/${index}.mp3`;
    music.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    })
    songTitles.forEach(elss =>{
        let{songname} = elss;
        title.innerHTML = songname;
        download_music.setAttribute('download', songname);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105 ,105 ,105 ,.1)";
    makeAllPlays();
    el.target.classList.add('fa-circle-pause');
    el.target.classList.remove('fa-circle-play');
    wave.classList.add('active1');
}

music.addEventListener('ended', () =>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'random':
            random_music();
            break;
        case 'next':
            next_music();
            break;
    }
    
});




