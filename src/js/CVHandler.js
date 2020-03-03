class CVHandler {

    constructor() {
        this.beforeLine = document.getElementsByClassName('cv-container__before-line')[0];
        this.CVButton = document.getElementsByClassName('cv-container__button')[0];
        this.afterLine = document.getElementsByClassName('cv-container__after-line')[0];
    }

    register() {
        this.CVButton.addEventListener('mouseenter', event => {
            this.beforeLine.classList.add('cv-container__before-line--animate-forward');
            this.afterLine.classList.add('cv-container__after-line--animate-forward');
            this.beforeLine.classList.remove('cv-container__before-line--animate-reverse');
            this.afterLine.classList.remove('cv-container__after-line--animate-reverse');
        });

        this.CVButton.addEventListener('mouseleave', event => {
            this.beforeLine.classList.add('cv-container__before-line--animate-reverse');
            this.afterLine.classList.add('cv-container__after-line--animate-reverse');
            this.beforeLine.classList.remove('cv-container__before-line--animate-forward');
            this.afterLine.classList.remove('cv-container__after-line--animate-forward');
        });
    }
}

module.exports = CVHandler;