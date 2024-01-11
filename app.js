let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
// console.log(url_segment[1]);


let play_btn = document.getElementById('play');
let video = document.getElementById('video');


play_btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    } else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
})

video.addEventListener('ended', () => {
    video.play();
})


let date = new Date();
let main_date = date.getDate();
console.log((main_date))


Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6_active')
    }
})
let pvr = [];
console.log(JSON.parse(localStorage.getItem('pvr')));
if (JSON.parse(localStorage.getItem('pvr')) != null) {
    pvr = JSON.parse(localStorage.getItem('pvr'));
    console.log("Hello");
} else {
    console.log("bye");
    pvr = [{
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 10,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 2, 16, 17, 18, 12, 11],
        h: [1, 2, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 11,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'IMAX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 16, 17, 18, 12, 11],
        h: [1, 2, 6, 19, 2, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [820, 820, 590, 590, 590, 590, 460, 460],
        date: 12,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 10, 2, 17, 18, 12, 11],
        h: [1, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [780, 780, 550, 550, 550, 550, 420, 420],
        date: 13,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 18, 12, 11],
        h: [1, 2, 4, 19, 22, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [790, 790, 560, 560, 560, 560, 430, 430],
        date: 14,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 8, 22, 6, 15, 12, 11],
        h: [1, 2, 3, 19, 22, 7, 10, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [770, 770, 540, 540, 540, 540, 410, 410],
        date: 15,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'IMAX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 7, 22, 6, 15, 16, 17],
        h: [1, 2, 2, 19, 22, 7, 10, 17],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 16,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    }, {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 12, 11],
        h: [1, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 17],
        d: [4, 21],
        c: [1, 2, 11, 18],
        b: [7, 4],
        a: [],
        price: [790, 790, 560, 560, 560, 560, 430, 430],
        date: 17,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Eesho',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 10, 2, 17, 18, 12, 11],
        h: [1, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [780, 780, 550, 550, 550, 550, 420, 420],
        date: 11,
        img: 'img/eesho.jpeg',
        video: 'video/Eesho.mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Eesho',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 18, 12, 11],
        h: [1, 2, 4, 19, 22, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [790, 790, 560, 560, 560, 560, 430, 430],
        date: 12,
        img: 'img/eesho.jpeg',
        video: 'video/Eesho.mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Eesho',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 8, 22, 6, 15, 12, 11],
        h: [1, 2, 3, 19, 22, 7, 10, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [770, 770, 540, 540, 540, 540, 410, 410],
        date: 13,
        img: 'img/eesho.jpeg',
        video: 'video/Eesho.mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Eesho',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'IMAX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 7, 22, 6, 15, 16, 17],
        h: [1, 2, 2, 19, 22, 7, 10, 17],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 14,
        img: 'img/eesho.jpeg',
        video: 'video/Eesho.mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Eesho',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 12, 11],
        h: [1, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 17],
        d: [4, 21],
        c: [1, 2, 11, 18],
        b: [7, 4],
        a: [],
        price: [790, 790, 560, 560, 560, 560, 430, 430],
        date: 15,
        img: 'img/eesho.jpeg',
        video: 'video/Eesho.mp4',
        background: 'img/bg.png',
    },{
        pvr: 'PVR Vegus',
        movie: 'Gadar2',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 11,
        img: 'img/gadar2.jpg',
        video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
        background: 'img/gadar_bg.jpg',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Gadar2',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 18, 12, 11],
        h: [1, 2, 4, 19, 22, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [790, 790, 560, 560, 560, 560, 430, 430],
        date: 12,
        img: 'img/gadar2.jpg',
        video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
        background: 'img/gadar_bg.jpg',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Gadar2',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 10, 2, 17, 18, 12, 11],
        h: [1, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [780, 780, 550, 550, 550, 550, 420, 420],
        date: 13,
        img: 'img/gadar2.jpg',
        video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
        background: 'img/gadar_bg.jpg',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Gadar2',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'IMAX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 16, 17, 18, 12, 11],
        h: [1, 2, 6, 19, 2, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [820, 820, 590, 590, 590, 590, 460, 460],
        date: 14,
        img: 'img/gadar2.jpg',
        video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
        background: 'img/gadar_bg.jpg',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Gadar2',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 15, 12, 11],
        h: [1, 2, 3, 19, 22, 7, 10, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [770, 770, 540, 540, 540, 540, 410, 410],
        date: 15,
        img: 'img/gadar2.jpg',
        video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
        background: 'img/gadar_bg.jpg',
      },{
        pvr: 'PVR Vegus',
        movie: 'Jailer',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 11,
        img: 'img/jailer.webp',
        video: 'video/Jailer.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Jailer',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 18, 12, 11],
        h: [1, 2, 4, 19, 22, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [790, 790, 560, 560, 560, 560, 430, 430],
        date: 12,
        img: 'img/jailer.webp',
        video: 'video/Jailer.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Jailer',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 10, 2, 17, 18, 12, 11],
        h: [1, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [780, 780, 550, 550, 550, 550, 420, 420],
        date: 13,
        img: 'img/jailer.webp',
        video: 'video/Jailer.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Jailer',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'IMAX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 16, 17, 18, 12, 11],
        h: [1, 2, 6, 19, 2, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [820, 820, 590, 590, 590, 590, 460, 460],
        date: 14,
        img: 'img/jailer.webp',
        video: 'video/Jailer.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Jailer',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 15, 12, 11],
        h: [1, 2, 3, 19, 22, 7, 10, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [770, 770, 540, 540, 540, 540, 410, 410],
        date: 15,
        img: 'img/jailer.webp',
        video: 'video/Jailer.mp4',
        background: 'img/bg.png',
      },{
        pvr: 'PVR Vegus',
        movie: 'Spiderman',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 11,
        img: 'img/spiderman.jpg',
        video: 'video/Spiderman.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Spiderman',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 18, 12, 11],
        h: [1, 2, 4, 19, 22, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [790, 790, 560, 560, 560, 560, 430, 430],
        date: 12,
        img: 'img/spiderman.jpg',
        video: 'video/Spiderman.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Spiderman',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 10, 2, 17, 18, 12, 11],
        h: [1, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [780, 780, 550, 550, 550, 550, 420, 420],
        date: 13,
        img: 'img/spiderman.jpg',
        video: 'video/Spiderman.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Spiderman',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'IMAX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 16, 17, 18, 12, 11],
        h: [1, 2, 6, 19, 2, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [820, 820, 590, 590, 590, 590, 460, 460],
        date: 14,
        img: 'img/spiderman.jpg',
        video: 'video/Spiderman.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Spiderman',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 15, 12, 11],
        h: [1, 2, 3, 19, 22, 7, 10, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [770, 770, 540, 540, 540, 540, 410, 410],
        date: 15,
        img: 'img/spiderman.jpg',
        video: 'video/Spiderman.mp4',
        background: 'img/bg.png',
      },{
        pvr: 'PVR Vegus',
        movie: 'Eternals',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 11,
        img: 'img/eternals.jpg',
        video: 'video/Eternals.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Eternals',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 18, 12, 11],
        h: [1, 2, 4, 19, 22, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [790, 790, 560, 560, 560, 560, 430, 430],
        date: 12,
        img: 'img/eternals.jpg',
        video: 'video/Eternals.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Eternals',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 10, 2, 17, 18, 12, 11],
        h: [1, 7, 10, 17, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [780, 780, 550, 550, 550, 550, 420, 420],
        date: 13,
        img: 'img/eternals.jpg',
        video: 'video/Eternals.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Eternals',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'IMAX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 16, 17, 18, 12, 11],
        h: [1, 2, 6, 19, 2, 18, 12, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [820, 820, 590, 590, 590, 590, 460, 460],
        date: 14,
        img: 'img/eternals.jpg',
        video: 'video/Eternals.mp4',
        background: 'img/bg.png',
      },
      {
        pvr: 'PVR Vegus',
        movie: 'Eternals',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: 'Regular',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [1, 5, 11, 22, 6, 15, 12, 11],
        h: [1, 2, 3, 19, 22, 7, 10, 11],
        f: [4, 5, 14, 16, 17],
        e: [1, 6, 7, 16, 17],
        d: [4, 15, 14, 22, 21],
        c: [1, 2, 10, 11, 18],
        b: [7, 4],
        a: [],
        price: [770, 770, 540, 540, 540, 540, 410, 410],
        date: 15,
        img: 'img/eternals.jpg',
        video: 'video/Eternals.mp4',
        background: 'img/bg.png',
      },
    // ... (similar changes for other entries)
    ];
}

localStorage.setItem('pvr', JSON.stringify(pvr));

let addSeats = (arr) => {
    // console.log(arr)
    arr.forEach((el, i) => {
        const { series, row_section, seat, price, a, b, c, d, e, f, h, j } = el;

        // Create Row 
        for (let index = 0; index < series.length; index++) {
            //   console.log(series[index]);
            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];
            booked_seats = [...eval(series[index].toLocaleLowerCase())];
            // console.log(booked_seats);


            // Create Seats 

            for (let seats = 0; seats < seat; seats++) {

                if (seats === 0) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }

                let li = document.createElement('li');
                let filter = booked_seats.filter(el => {
                    return el === seats;
                })
                // console.log(filter);

                if (filter.length > 0) {
                    li.className = "seat booked";
                } else {
                    li.className = "seat";
                }

                li.id = series[index] + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', series[index]);
                li.innerText = price[index];


                li.onclick = () => {
                    if (li.className === 'seat booked') {
                        li.classList.remove('selected');
                    } else {
                        li.classList.toggle('selected');
                    }
                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    if (len > 0) {
                        document.getElementById('book_ticket').style.display = 'unset';
                    } else {
                        document.getElementById('book_ticket').style.display = 'none';
                    }
                }


                row.appendChild(li);

                if (seats === seat - 1) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }
            }

            document.getElementById('chair').appendChild(row);
        }


    })
}


const storedMovieObjects = JSON.parse(localStorage.getItem('movieObjects'));

let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
// console.log(data);

document.getElementById('title').innerText = data[0].movie;
document.getElementById('poster').src = data[0].img;
document.getElementById('video').src = data[0].video;

var styleElem = document.head.appendChild(document.createElement("style"));

styleElem.innerHTML = `.book .right:before {background: url(${data[0].background})no-repeat center -30px/cover}`;


addSeats(data)



let offDate = () => {
    Array.from(document.getElementsByClassName('date_point')).forEach(el => {
        el.classList.remove('h6_active');
    })
}

Array.from(document.getElementsByClassName('date_point')).forEach(el => {
    el.addEventListener('click', () => {
        if (el.innerText > date.getDate() - 1) {
            offDate();
            el.classList.add('h6_active');
            main_date = +el.innerText;
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
            console.log(data);
            addSeats(data)
        }
    })
})
document.getElementById('payment').style.display = 'none';

function authenticateUser() {
    // Predefined username and password

    let email = document.getElementById('emailInput');
    let upi = document.getElementById('upiInput');
    // const upiIdPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Example usage:
    // const userEnteredUpiId = upi;
    let proceed = 0;
    // if (upiIdPattern.test(userEnteredUpiId)) {
    console.log('');
    proceed = 1;
    // } else {
    //     console.log('Invalid UPI ID');
    // }

    // Check if the input credentials match the predefined ones
    if (proceed == 1) {
        getTickets(1);
        return 1; // Credentials match
    } else {
        getTickets(0);
        return 0; // Credentials do not match
    }
}

document.getElementById('book_ticket').addEventListener('click', () => {

    document.getElementById('payment').style.display = 'block';
    document.getElementById('chair').style.display = 'none';
    let seat_price1=0; 
    Array.from(document.getElementsByClassName('selected')).forEach(el => {
        
        seat_price1 += Number((el.innerText));
        console.log(seat_price1);
    })
    document.getElementById('amount').value = `Pay Rs ${seat_price1}`;
    

})

function getTickets(auth) {
    Array.from(document.getElementsByClassName('selected')).forEach(el => {
        let seat_no = el.getAttribute('book');
        let seat_sr = el.getAttribute('sr').toLocaleLowerCase();
        let seat_price = el.innerText;

        let obj = {
            movie: url_segment[1],
            date: main_date
        }

        let getData = JSON.parse(localStorage.getItem('pvr')).map((obj) => {
            if (
                obj.movie === url_segment[1] && obj.date === main_date
            ) {
                obj[seat_sr].push(+seat_no);
                console.log("OBJECT := " + obj);
            }

            return obj;
        });

        console.log(getData);


        document.getElementById('chair').innerHTML = '';
        let data = getData.filter(obj => obj.date === main_date && obj.movie === url_segment[1]);
        localStorage.setItem('pvr', JSON.stringify(getData));
        addSeats(data);


        document.getElementById('screen').style.display = 'none';
        document.getElementById('chair').style.display = 'none';
        document.getElementById('det').style.display = 'none';
        document.getElementById('book_ticket').style.display = 'none';
        document.getElementById('back_ticket').style.display = 'unset';
        if (auth == 1) {
            document.getElementById('ticket').style.display = 'block';
            document.getElementById('payment').style.display = 'none';
            

        } else {
            document.getElementById('ticket').style.display = 'none';
        }


        
        (function () {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('3hHpddiGJipZ2SgLr');
        })();
        
        let name = document.getElementById('name');
        let email = document.getElementById('emailInput');
        console.log(email.value);
        emailjs.send("service_vq6wd85", "template_xu15xe6", {
            from_name: "Book Karo Pvt.Ltd",
            to_name: name.value,
            message: `Tickets Booked...!!!\nDate : ${main_date}\nSeat : ${seat_no}`,
            sendTo: email.value,
            main_date : main_date,
            seat_no : seat_no,
            seat_sr: seat_sr.toUpperCase(),
            url_segment: url_segment[1],
            seat_price: seat_price,
        });

        let tic = document.createElement('div');
        tic.className = 'tic';
        tic.innerHTML = `
                    <div class="barcode">
                        <div class="card">
                            <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
                            <h6>${main_date} January 2023</h6>
                        </div>
                        <div class="card">
                            <h6>Seat ${seat_no}</h6>
                            <h6>${document.getElementById('time').innerText}</h6>
                        </div>
                        
                        <svg id="${seat_sr}${seat_no}barcode"></svg>
                        <h5>VEGUS CINEMA</h5>
                    </div>
                    <div class="tic_details" style=" background: url(${data[0].background})no-repeat center -35px /cover">
                        <div class="type">4DX</div>
                        <h5 class="pvr"><span>Vegus</span> Cinema</h5>
                        <h1>${url_segment[1]}</h1>
                        <div class="seat_det">
                            <div class="seat_cr">
                                <h6>ROW</h6>
                                <h6>${seat_sr.toLocaleUpperCase()}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>SEAT</h6>
                                <h6>${seat_no}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>DATE</h6>
                                <h6>${main_date} <sub>Jan</sub></h6>
                            </div>
                            <div class="seat_cr">
                                <h6>TIME</h6>
                                <h6>${document.getElementById('time').innerText} <sub>pm</sub></h6>
                            </div>
                        </div>
                    </div>
        `
        document.getElementById('ticket').appendChild(tic);
        JsBarcode(`#${seat_sr}${seat_no}barcode`,
        `${seat_sr.toLocaleUpperCase()}${seat_no}${seat_price}${main_date}12024`);
        
        // JsBarcode("#asdsad", "J188001012024");
    
})
        

        
}
//${JsBarcode('#'+seat_sr+''+seat_no+'barcode', +seat_sr.toLocaleUpperCase()+''+seat_no +''+seat_price+''+ main_date +"12024")}

document.getElementById('back_ticket').addEventListener('click', () => {
    document.getElementById('screen').style.display = 'inline-block';
    document.getElementById('chair').style.display = 'block';
    document.getElementById('det').style.display = 'flex';
    document.getElementById('book_ticket').style.display = 'unset';
    document.getElementById('back_ticket').style.display = 'none';
    document.getElementById('ticket').style.display = 'none';
})
