class FormHandler {

    constructor() {
        this.form = document.getElementById('contact-form');
        this.formContainer = document.querySelector('.form-container');
        this.mailSendContainer = document.querySelector('.mail-send-container');
        this.inputFields =
            [...this.form.querySelectorAll('input'), ...this.form.querySelectorAll('textarea')];
        this.trapInputFields = this.form.querySelectorAll('.input-trap');
        this.formFocusStartTime = -1;
        this.copyEmailButton = document.getElementById('copyEmailButton');
        this.copiedToClipboardHint = document.getElementById('clipboardHint');
        this.suspiciousFormSubmissionHint = document.getElementById('suspiciousHint');
        this.formFadeDelayMS = '400';
        this.form.addEventListener('submit', this.formSubmitted.bind(this));
        this.copyEmailButton.addEventListener('click', this.copyEmailToClipboard.bind(this));
        this.inputFields.forEach(inputField => inputField.addEventListener('focus', this.formFocused.bind(this)));
        this.status = -1;
    }

    formFocused() {
        if (this.formFocusStartTime === -1) {
            this.formFocusStartTime = new Date().getTime();
        }
    }

    clearInputs() {
        this.inputFields.forEach(inputField => inputField.value = '');
    }

    trapsAreFilled() {
        for (const trapInput of this.trapInputFields) {
            if (trapInput.value !== '') {
                return true;
            }
        }
        return false;
    }

    copyEmailToClipboard() {
        navigator.clipboard.writeText('etienne@buschong.de').then(() => {
            this.toggleFadeInHint(this.copiedToClipboardHint);
        });
    }

    toggleFadeInHint(hint, timeout = 1500) {
        hint.style.visibility = 'visible';
        hint.style.opacity = '1';
        setTimeout(() => {
            hint.style.visibility = 'hidden';
            hint.style.opacity = '0';
        }, timeout);
    }

    formSubmitted(event) {
        event.preventDefault();
        // Try to prevent spam with some additional analysis of user behaviour
        const formFillEndTime = new Date().getTime();
        const secondsPassed = (formFillEndTime - this.formFocusStartTime) / 1000;
        if (secondsPassed < 4 || this.trapsAreFilled()) {
            this.clearInputs();
            this.formFocusStartTime = -1;
            this.toggleFadeInHint(this.suspiciousFormSubmissionHint, 5000);
            return;
        }
        console.log("Form Submitted");
        this.switchToMailSendView();
        return;
        const data = new FormData(this.form);
        const xhr = new XMLHttpRequest();
        xhr.open(this.form.method, this.form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = this.requestResponseFunction.bind(this, xhr);
        xhr.send(data);
    }

    requestResponseFunction(xhr) {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            this.status = 1;
        } else {
            this.status = 2
        }
    }

    switchToMailSendView() {
        this.formContainer.style.opacity = '0';
        setTimeout(() => {
            this.formContainer.style.visibility = 'hidden';
            this.mailSendContainer.style.opacity = '1';
        }, this.formFadeDelayMS);
    }
}


module.exports = FormHandler;