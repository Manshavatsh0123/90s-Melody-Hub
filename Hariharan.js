const music = new Audio('music/1.mp3');
//music.play();

const songs = [
    {
        id:1,
        songname:'Tu Hi Re <br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/1.jpg",
    },
    {
        id:2,
        songname:'Chappa Chappa<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/2.jpg",
    },
    {
        id:3,
        songname:'Roja Jaaneman<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/3.jpg",
    },
    {
        id:4,
        songname:'Nahin Saamne<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/4.jpg",
    },
    {
        id:5,
        songname:'Krishna Dhun<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/5.jpg",
    },
    {
        id:6,
        songname:'Mere Dushman Mere Bhai <br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/6.jpg",
    },
    {
        id:7,
        songname:'Bharat Humko Jaan Se Pyara Hai<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/7.jpg",
    },
    {
        id:8,
        songname:'Jhanjhariya<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/8.jpg",
    },
    {
        id:9,
        songname:'Tanha Tanha <br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/9.jpg",
    },
    {
        id:10,
        songname:'Jiya Jale<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/10.jpg",
    },
    {
        id:11,
        songname:'Ae Ajnabi<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/11.jpg",
    },
    {
        id:12,
        songname:'Sunta Hai Mera Khuda<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/12.jpg",
    },
    {
        id:13,
        songname:'Aye Hairathe<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/13.jpg",
    },
    {
        id:14,
        songname:'Dheeme Dheeme<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/14.jpg",
    },
    {
        id:15,
        songname:'Bahon Ke Darmiyan<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/15.jpg",
    },
    {
        id:16,
        songname:'Humko Maloom Hai<br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/16.jpg",
    },
    {
        id:17,
        songname:'Taal Se Taal Mila <br><div class="subtitle">Hariharan</div>',
        poster:"img/Hari/17.jpg",
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
        music.src =`music/Hari/${index}.mp3`;
        poster_master_play.src = `img/Hari/${index}.jpg`;
        download_music.href = `music/Hari/${index}.mp3`;
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
        music.src =`music/Hari/${index}.mp3`;
        poster_master_play.src = `img/Hari/${index}.jpg`;
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
        music.src =`music/Hari/${index}.mp3`;
        poster_master_play.src = `img/Hari/${index}.jpg`;
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
    music.src =`music/Hari/${index}.mp3`;
    poster_master_play.src = `img/Hari/${index}.jpg`;
    download_music.href = `music/Hari/${index}.mp3`;
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
    music.src =`music/Hari/${index}.mp3`;
    poster_master_play.src = `img/Hari/${index}.jpg`;
    download_music.href = `music/Hari/${index}.mp3`;
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
    music.src =`music/Hari/${index}.mp3`;
    poster_master_play.src = `img/Hari/${index}.jpg`;
    download_music.href = `music/${index}.mp3`;
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




