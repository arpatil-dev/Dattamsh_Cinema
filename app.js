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



function addOneDay(date = new Date()) {
    date.setDate(date.getDate() + 1);

    return date;
}

function changeWeekDays(currentDate) { //####-##-##

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let weekArr = [];
    let dayArr = [];
    var date = new Date(currentDate);
    for (let i = 0; i < 6; i++) {
        let dayName = days[date.getDay()];
        weekArr[i] = "" + dayName;
        dayArr[i] = date.getDate();
        date = addOneDay(date);
    }
    let dateArr = [weekArr, dayArr]
    return dateArr;
}




function changeHtml(currentDate) {
    let container = document.getElementById('month-date-container');
    let arr = changeWeekDays(currentDate)

    let weekArr = arr[0];
    let dayArr = arr[1];

    let newHtml = `
    <li>
    <h6>${weekArr[0].substring(0, 3)}</h6>
    <h6 class="date_point">${dayArr[0]}</h6>
</li>
<li>
    <h6>${weekArr[1].substring(0, 3)}</h6>
    <h6 class="date_point">${dayArr[1]}</h6>
</li>
<li>
    <h6>${weekArr[2].substring(0, 3)}</h6>
    <h6 class="date_point">${dayArr[2]}</h6>
</li>
<li>
    <h6>${weekArr[3].substring(0, 3)}</h6>
    <h6 class="date_point">${dayArr[3]}</h6>
</li>
<li>
    <h6>${weekArr[4].substring(0, 3)}</h6>
    <h6 class="date_point">${dayArr[4]}</h6>
</li>
<li>
    <h6>${weekArr[5].substring(0, 3)}</h6>
    <h6 class="date_point">${dayArr[5]}</h6>
</li>
    `;
    container.innerHTML = newHtml;
    console.log(newHtml);
}

changeHtml(getCurrentDateFormatted());

function incrementDate(currentDate, incrementCount) {
    let arr = []
    arr[0] = currentDate.getDate();
    for (let i = 1; i < incrementCount; i++) {
        // Increment the current date by one day
        currentDate.setDate(currentDate.getDate() + 1);

        // Check if the date is near the end of the month
        if (currentDate.getDate() === 1) {
            // Move to the next month
            currentDate.setMonth(currentDate.getMonth() + 1);

            // If the next month is January, increment the year
            if (currentDate.getMonth() === 0) {
                currentDate.setFullYear(currentDate.getFullYear() + 1);
            }
        }
        arr[i] = currentDate.getDate();
    }
    console.log(arr)
    return arr;
}
// let newDate = new Date('2024-01-29');
// incrementDate(newDate,6);
function getCurrentDateFormatted() {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    return formattedDate;
}
function changeDates(currentDate) {
    let newPvr = JSON.parse(localStorage.getItem('pvr'));
    let counter = 0;

    let dateArr = incrementDate(currentDate, 6);
    for (let i = 0; i < 36; i++) {


        console.log(newPvr[i].movie + " =: DATE := " + newPvr[i].date);
        newPvr[i].date = dateArr[counter];
        counter++;
        if (counter == 6) {
            counter = 0;
        }

    }
    localStorage.setItem('pvr', JSON.stringify(newPvr));

}

// console.log("DATE := "+(new Date().getDate()))
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
    let d = new Date(getCurrentDateFormatted());
    let dtArr = incrementDate(d,6);
    pvr = [
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[0], 
            img: 'img/jawan.jpg',
            video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
            background: 'img/bg.png',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[1],
            img: 'img/jawan.jpg',
            video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
            background: 'img/bg.png',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[2],
            img: 'img/jawan.jpg',
            video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
            background: 'img/bg.png',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[3],
            img: 'img/jawan.jpg',
            video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
            background: 'img/bg.png',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[4],
            img: 'img/jawan.jpg',
            video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
            background: 'img/bg.png',
        }, {
            pvr: 'PVR DATTAMSH',
            movie: 'Jawan',
            loc: 'Dwarka Sector 14, New Delhi',
            audi: 1,
            type: 'Regular',
            series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
            row_section: 3,
            seat: 24,
            j: [1, 5, 8, 15, 12, 11],
            h: [1, 11],
            f: [4, 5, 7],
            e: [1, 17],
            d: [4, 15],
            c: [1],
            b: [7, 4],
            a: [],
            price: [770, 770, 540, 540, 540, 540, 410, 410],
            date: dtArr[5],
            img: 'img/jawan.jpg',
            video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
            background: 'img/bg.png',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[0],
            img: 'img/eesho.jpeg',
            video: 'video/Eesho.mp4',
            background: 'img/eesho_banner_1.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[1],
            img: 'img/eesho.jpeg',
            video: 'video/Eesho.mp4',
            background: 'img/eesho_banner_1.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[2],
            img: 'img/eesho.jpeg',
            video: 'video/Eesho.mp4',
            background: 'img/eesho_banner_1.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[3],
            img: 'img/eesho.jpeg',
            video: 'video/Eesho.mp4',
            background: 'img/eesho_banner_1.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[4],
            img: 'img/eesho.jpeg',
            video: 'video/Eesho.mp4',
            background: 'img/eesho_banner_1.jpg',
        }, {
            pvr: 'PVR DATTAMSH',
            movie: 'Eesho',
            loc: 'Dwarka Sector 14, New Delhi',
            audi: 1,
            type: 'Regular',
            series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
            row_section: 3,
            seat: 24,
            j: [],
            h: [1],
            f: [4, 17],
            e: [1, 6, 7, 17],
            d: [4, 21],
            c: [1, 18],
            b: [7, 4],
            a: [],
            price: [790, 790, 560, 560, 560, 560, 430, 430],
            date: dtArr[5],
            img: 'img/eesho.jpeg',
            video: 'video/Eesho.mp4',
            background: 'img/eesho_banner_1.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[0],
            img: 'img/Gadar2.jpg',
            video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
            background: 'img/gadar_bg.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[1],
            img: 'img/Gadar2.jpg',
            video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
            background: 'img/gadar_bg.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[2],
            img: 'img/Gadar2.jpg',
            video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
            background: 'img/gadar_bg.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[3],
            img: 'img/Gadar2.jpg',
            video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
            background: 'img/gadar_bg.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[4],
            img: 'img/Gadar2.jpg',
            video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
            background: 'img/gadar_bg.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
            movie: 'Gadar2',
            loc: 'Dwarka Sector 14, New Delhi',
            audi: 1,
            type: 'Regular',
            series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
            row_section: 3,
            seat: 24,
            j: [1, 11],
            h: [1, 2, 3, 19, 10, 11],
            f: [4, 17],
            e: [1, 17],
            d: [4, 15, 14, 22, 21],
            c: [1, 18],
            b: [7, 4],
            a: [],
            price: [770, 770, 540, 540, 540, 540, 410, 410],
            date: dtArr[5],
            img: 'img/Gadar2.jpg',
            video: 'video/Gadar2 Official Trailer-(HDvideo9).mp4',
            background: 'img/gadar_bg.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[0],
            img: 'img/jailer.webp',
            video: 'video/Jailer.mp4',
            background: 'img/jailer_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[1],
            img: 'img/jailer.webp',
            video: 'video/Jailer.mp4',
            background: 'img/jailer_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[2],
            img: 'img/jailer.webp',
            video: 'video/Jailer.mp4',
            background: 'img/jailer_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[3],
            img: 'img/jailer.webp',
            video: 'video/Jailer.mp4',
            background: 'img/jailer_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[4],
            img: 'img/jailer.webp',
            video: 'video/Jailer.mp4',
            background: 'img/jailer_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
            movie: 'Jailer',
            loc: 'Dwarka Sector 14, New Delhi',
            audi: 1,
            type: 'Regular',
            series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
            row_section: 3,
            seat: 24,
            j: [1, 11],
            h: [11],
            f: [4, 5, 14, 16, 17],
            e: [1],
            d: [4, 15, 21],
            c: [1],
            b: [4],
            a: [],
            price: [770, 770, 540, 540, 540, 540, 410, 410],
            date: dtArr[5],
            img: 'img/jailer.webp',
            video: 'video/Jailer.mp4',
            background: 'img/jailer_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[0],
            img: 'img/spiderman.jpg',
            video: 'video/Spiderman.mp4',
            background: 'img/spiderman_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[1],
            img: 'img/spiderman.jpg',
            video: 'video/Spiderman.mp4',
            background: 'img/spiderman_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[2],
            img: 'img/spiderman.jpg',
            video: 'video/Spiderman.mp4',
            background: 'img/spiderman_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[3],
            img: 'img/spiderman.jpg',
            video: 'video/Spiderman.mp4',
            background: 'img/spiderman_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[4],
            img: 'img/spiderman.jpg',
            video: 'video/Spiderman.mp4',
            background: 'img/spiderman_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
            movie: 'Spiderman',
            loc: 'Dwarka Sector 14, New Delhi',
            audi: 1,
            type: 'Regular',
            series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
            row_section: 3,
            seat: 24,
            j: [1, 5, 6, 15, 12, 11],
            h: [1,],
            f: [4, 5, 14, 16, 17],
            e: [1,],
            d: [4, 22, 21],
            c: [1,],
            b: [7, 4],
            a: [],
            price: [770, 770, 540, 540, 540, 540, 410, 410],
            date: dtArr[5],
            img: 'img/spiderman.jpg',
            video: 'video/Spiderman.mp4',
            background: 'img/spiderman_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[0],
            img: 'img/eternals.jpg',
            video: 'video/Eternals.mp4',
            background: 'img/eternals_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[1],
            img: 'img/eternals.jpg',
            video: 'video/Eternals.mp4',
            background: 'img/eternals_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[2],
            img: 'img/eternals.jpg',
            video: 'video/Eternals.mp4',
            background: 'img/eternals_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[3],
            img: 'img/eternals.jpg',
            video: 'video/Eternals.mp4',
            background: 'img/eternals_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[4],
            img: 'img/eternals.jpg',
            video: 'video/Eternals.mp4',
            background: 'img/eternals_banner.jpg',
        },
        {
            pvr: 'PVR DATTAMSH',
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
            date: dtArr[5],
            img: 'img/eternals.jpg',
            video: 'video/Eternals.mp4',
            background: 'img/eternals_banner.jpg',
        },
        // ... (similar changes for other entries)
    ];
}

localStorage.setItem('pvr', JSON.stringify(pvr));
let newDate1 = new Date(getCurrentDateFormatted());
// changeDates(newDate1);

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
            console.log(el.innerText+": :"+date.getDate()-1)
            offDate();
            el.classList.add('h6_active');
            main_date = +el.innerText;
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
            console.log(data);
            addSeats(data)
        }
        if(el.innerText < date.getDate()-1){
            console.log("alhdiasohdih");
            console.log(el.innerText+": :"+date.getDate()-1)
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
    let seat_price1 = 0;
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
            main_date: main_date,
            seat_no: seat_no,
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
                            <h6>${main_date} January 2024</h6>
                        </div>
                        <div class="card">
                            <h6>Seat ${seat_no}</h6>
                            <h6>${document.getElementById('time').innerText}</h6>
                        </div>
                        
                        <svg id="${seat_sr}${seat_no}barcode"></svg>
                        <h5>DATTAMSH CINEMA</h5>
                    </div>
                    <div class="tic_details" style=" background: url(${data[0].background})no-repeat center -35px /cover">
                        <div class="type">4DX</div>
                        <h5 class="pvr"><span>Dattamsh</span> Cinema</h5>
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
