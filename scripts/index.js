class Input {
  constructor (target) {
    this.input = document.getElementById(target);
    this.iconError = document.getElementById('icon__error');
    this.iconSuccess = document.getElementById('icon__success');
    this.messageError = document.getElementById('message__error');
  }

  addError(message) {
    this.input.classList.add('active--error');
    this.iconError.classList.add('is-active');
    this.messageError.classList.add('is-active');
    this.messageError.innerHTML =  message;

    if(this.iconSuccess.classList.contains('is-active')) {
      this.removeSuccess()
    }
  }

  removeError () {
    this.input.classList.remove('active--error');
    this.iconError.classList.remove('is-active');
    this.messageError.classList.remove('is-active');
    this.messageError.innerHTML =  '';

    if(!this.iconSuccess.classList.contains('is-active')) {
      this.addSuccess
    }
  }

  addSuccess() {
    this.iconSuccess.classList.add('is-active');
    this.input.classList.add('active--success');
  }

  removeSuccess () {
    this.iconSuccess.classList.remove('is-active');
    this.input.classList.remove('active--success');
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateInput(inputVal) {
    if((!this.validateEmail(inputVal)) && (inputVal.length > 0)) {
      this.addError('Please enter a valid email address.')
    } else if (inputVal.length === 0) {
      this.addError('This field is required.')
    } else {
      this.removeError()
      this.addSuccess()
    }
  }

  registerInput(){
    if (
      !this.input ||
      !this.iconError ||
      !this.messageError
    ) return;

    this.input.addEventListener('blur', () => {
      this.validateInput(this.input.value)
    });

    this.input.addEventListener('keyup', () => {
      this.validateInput(this.input.value)
    });
  }
}


const emaiCapture = new Input('email__capture');
emaiCapture.registerInput()
