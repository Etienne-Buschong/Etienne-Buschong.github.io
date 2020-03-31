const OctagonHandler = require('./OctagonHandler');
const CVHandler = require('./CVHandler');
const CarouselHandler = require('./CarouselHandler');

window.onload = function () {
    const octagonHandler = new OctagonHandler();
    octagonHandler.register();

   // const cvHandler = new CVHandler();
    // cvHandler.register();

    const carouselHandler = new CarouselHandler();

};




