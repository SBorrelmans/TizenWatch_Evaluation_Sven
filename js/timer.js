const startingSeconds = 5;
let time = startingSeconds;

setInterval(updateCountdown, 1000);

function updateCountdown() {
    time--;
    if (time < 0) {
        window.location.href = "http://google.com";
    } // can i remove the {}? because it gives an error but looks better as a one-liner
}