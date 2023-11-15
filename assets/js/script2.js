let timeLeft = 10; 
let timerId = setInterval(countdown, 1000);
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        console.log(timeLeft + ' seconds');
        timeLeft--;
    }
}


