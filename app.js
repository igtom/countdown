const daysSpan = document.getElementById('days')
const hoursSpan = document.getElementById('hours')
const minutesSpan = document.getElementById('minutes')
const secondsSpan = document.getElementById('seconds')


const myNextBirthday = '23 Jan 2022';

const countdown = () => {
    const nextBirthday = new Date(myNextBirthday);
    const currentDate = new Date();

    const totalSeconds = (nextBirthday - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysSpan.innerHTML = formatTime(days);
    hoursSpan.innerHTML = formatTime(hours);
    minutesSpan.innerHTML = formatTime(minutes);
    secondsSpan.innerHTML = formatTime(seconds);
}

const formatTime = time => {
    return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)