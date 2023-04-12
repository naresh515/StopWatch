$(document).ready(function () {
    let [hour, minute, second, milliseconds] = [99, 50, 59, 99]
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
        [hour, minute, second, milliseconds] = [0, 0, 0, 0];
        timer.innerHTML = '00 : 00 : 00 : 00';
    });

    function getTime() {
        milliseconds += 10;
        if (milliseconds >= 1000) {
            milliseconds = 0;
            second++;
        }
        if (second == 60) {
            second = 0;
            minute++
        }
        if (minute == 60) {
            minute = 0;
            hour++
        }


        let h = hour < 10 ? "0" + hour : hour;
        let m = minute < 10 ? "0" + minute : minute;
        let s = second < 10 ? "0" + second : second;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

        timer.innerHTML = `${h} : ${m} :${s} : ${ms}`;
    }
})