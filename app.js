$(document).ready(function () {
    let [milliseconds, second] = [0, 0]
    let timer = document.querySelector('.timer');
    let int = null;

    $('.start-btn').click(function () {
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(getTime, 10);
    });

    $('.stop-btn').click(function () {
        clearInterval(int);
    });

    $('.reset-btn').click(function () {
        clearInterval(int);
        [milliseconds, second] = [0, 0];
        timer.innerHTML = '00 : 00';
    });

    function getTime() {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            second++;
        }

        let s = second < 10 ? "0" + second : second;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

        timer.innerHTML = `${s} : ${ms}`;
    }
})