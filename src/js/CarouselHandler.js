class Carousel {
    constructor(domElement) {
        this.domElement = domElement;
        this.domItems = this.domElement.querySelectorAll('.carousel-items > .carousel-item');
        this.leftArrowDomElem = this.domElement.querySelector('.carousel-left-arrow');
        this.rightArrowDomElem = this.domElement.querySelector('.carousel-right-arrow');
        this.pageIndicatorContainer = this.domElement.querySelector('.carousel-page-indicator-container');
        this.pageIndicatorDots = [];
        this.pageIndicatorHighlightClass = 'carousel-page-indicator-dot--highlighted';
        this.pageIndicatorDotClass = 'carousel-page-indicator-dot';
        this.currentIndex = 0;
        this.numItems = this.domItems.length;
        this.constructAndFillIndicatorDots();
        this.setItemVisibility();
        this.leftArrowDomElem.addEventListener('click', this.leftArrowClicked.bind(this));
        this.rightArrowDomElem.addEventListener('click', this.rightArrowClicked.bind(this));
    }

    constructAndFillIndicatorDots() {
        for (let i = 0; i < this.numItems; i++) {
            const dot = document.createElement('div');
            dot.classList.add(this.pageIndicatorDotClass);
            if (i === this.currentIndex) {
                dot.classList.add(this.pageIndicatorHighlightClass);
            }
            this.pageIndicatorDots.push(dot);
            this.pageIndicatorContainer.appendChild(dot);
            dot.addEventListener('click', this.indicatorDotPressed.bind(this, i))
        }
    }

    indicatorDotPressed(index) {
        this.setItemVisibility(index);
    }

    setItemVisibility(visibleIndex = 0) {
        this.domItems.forEach((domItem, index) => {
            domItem.style.display = index === visibleIndex ? 'block': 'none';
            const indicatorDot = this.pageIndicatorDots[index];
            if (index === visibleIndex) {
                indicatorDot.classList.add(this.pageIndicatorHighlightClass);
            } else {
                indicatorDot.classList.remove(this.pageIndicatorHighlightClass);
            }
        })
    }

    rightArrowClicked() {
        const newIndex = (this.currentIndex + 1) % this.numItems;
        this.setItemVisibility(newIndex);
        this.currentIndex = newIndex;
    }

    leftArrowClicked() {
        const newIndex = Math.abs(this.currentIndex - 1) % this.numItems;
        this.setItemVisibility(newIndex);
        this.currentIndex = newIndex;
    }

}

class CarouselHandler {

    constructor() {
        this.carouselsDomElement = document.getElementsByClassName('carousel');
        this.carouselElements = [];
        for (const carousel of this.carouselsDomElement) {
            this.carouselElements.push(new Carousel(carousel));
        }
    }

}

module.exports = CarouselHandler;