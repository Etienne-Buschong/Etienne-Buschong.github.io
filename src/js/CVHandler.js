class CVHandler {

    constructor() {
        this.beforeLine =  document.getElementsByClassName('cv-container__before-line')[0];
        this.CVButton = document.getElementsByClassName('cv-container__button')[0];
        this.afterLine = document.getElementsByClassName('cv-container__after-line')[0];
    }

    register() {
        this.CVButton.addEventListener('mouseenter', event => {
            console.log(event);
           this.beforeLine.classList.add('cv-container__before-line--animate');
           this.afterLine.classList.add('cv-container__after-line--animate');
        });

        this.CVButton.addEventListener('mouseleave', event => {
            this.beforeLine.classList.remove('cv-container__before-line--animate');
            this.afterLine.classList.remove('cv-container__after-line--animate');
        });
    }
}

module.exports = CVHandler;