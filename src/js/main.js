const OctagonHandler = require('./OctagonHandler');
const CVHandler = require('./CVHandler');

window.onload = function () {
    const octagonHandler = new OctagonHandler();
    octagonHandler.register();

    const cvHandler = new CVHandler();
    cvHandler.register();

    const header = document.getElementsByClassName('header')[0];
    console.log("Header", window.getComputedStyle(header).clipPath);
};




