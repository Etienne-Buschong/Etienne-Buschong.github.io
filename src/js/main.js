const OctagonHandler = require('./OctagonHandler');
const CVHandler = require('./CVHandler');
const CarouselHandler = require('./CarouselHandler');
const FormHandler = require('./FormHandler');

window.onload = function () {
    const octagonHandler = new OctagonHandler();
    octagonHandler.register();

    const formHandler = new FormHandler();
    const carouselHandler = new CarouselHandler();

};




