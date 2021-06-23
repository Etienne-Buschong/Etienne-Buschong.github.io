const elem1 = document.getElementById('confetti-element-1');
const elem2 = document.getElementById('confetti-element-2');
const elem3 = document.getElementById('confetti-element-3');

generateConfetti(elem1, 40, getRandomInt(1000, 1500));
generateConfetti(elem2, 40, getRandomInt(1000, 1500));
generateConfetti(elem3, 40, getRandomInt(1000, 1500));


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateConfetti(elem, remaining, timeout) {
    if (remaining === 0) {
        return;
    }
    elem.style.top = `${getRandomInt(10, 50)}vh`;
    elem.style.left = `${getRandomInt(10, 90)}vw`;
    party.confetti(elem, { count: party.variation.range(40, 60)});
    setTimeout(generateConfetti, timeout, elem, remaining - 1, timeout);
}