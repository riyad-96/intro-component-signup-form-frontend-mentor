//! -------- mail validation --------
const emailInput = document.getElementById('emailInput')
const mailErrorIcon = document.getElementById('mailErrorIcon')
const mailErrorMessage = document.getElementById('mailErrorMessage')


function addMailErrorState() {
  emailInput.classList.add('error-state')
  emailInput.classList.add('mail-error-text-clr')
  mailErrorIcon.classList.add('show')
  mailErrorMessage.classList.add('show')
}

function removeMailErrorState() {
  emailInput.classList.remove('error-state')
  emailInput.classList.remove('mail-error-text-clr')
  mailErrorIcon.classList.remove('show')
  mailErrorMessage.classList.remove('show')
}

emailInput.addEventListener('keyup', () => {

  const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  
  if (emailInput.value === '') {
    removeMailErrorState()
  }
  else if (!emailInput.value.match(emailRegex)) {
    addMailErrorState()
  }
  else {
    removeMailErrorState()
  }

})


//! password should be at least 6 characters
const passInput = document.querySelector('.input4')

const passErrorIcon = document.querySelector('.last-icon')
const passErrorMessage = document.querySelector('.last-message')


function addPassErrorState() {
  passInput.classList.add('error-state')
  passErrorIcon.classList.add('show')
  passErrorMessage.classList.add('show')
}

function removePassErrorState() {
  passInput.classList.remove('error-state')
  passErrorIcon.classList.remove('show')
  passErrorMessage.classList.remove('show')
}

passInput.addEventListener('keyup', () => {

  if(passInput.value == ''){
    removePassErrorState()
  }
  else if (passInput.value.length < 6) {
    addPassErrorState()
  }
  else {
    removePassErrorState()
  }
})


//! empty input field validation
const inputGroup = document.querySelectorAll('.input-group')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const input4 = document.querySelector('.input4')
const claimBtn = document.getElementById('claimBtn')

const errorDivs = document.querySelectorAll('.input-group div')
const errorSpans = document.querySelectorAll('.input-group span')


inputGroup.forEach(inputGroup => {
  const errorDiv = inputGroup.querySelector('div')
  const errorSpan = inputGroup.querySelector('span')

  function removeError() {
    this.classList.remove('error-state')
    errorDiv.classList.remove('show')
    errorSpan.classList.remove('show')
  }

  const inputs = inputGroup.querySelectorAll('input:not(#emailInput, .input4)')
  inputs.forEach(input => {
    input.addEventListener('keyup', removeError)
  })
})


function areAllInputsEmpty() {
  return (
    input1.value === '' &&
    input2.value === '' &&
    input3.value === '' &&
    input4.value === ''
  )
}

const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function areAllInputsValid() {
  return (
    input1.value !== '' &&
    input2.value !== '' &&
    input3.value.match(emailRegex) &&
    input4.value.length >= 6
  )
}

function addErrorStates() {
  input1.classList.add('error-state')
  input2.classList.add('error-state')
  input3.classList.add('error-state')
  input4.classList.add('error-state')

  errorDivs.forEach(div => div.classList.add('show'))
  errorSpans.forEach(span => span.classList.add('show'))
}

function removeErrorStates() {
  input1.classList.remove('error-state')
  input2.classList.remove('error-state')
  input3.classList.remove('error-state')
  input4.classList.remove('error-state')

  errorDivs.forEach(div => div.classList.remove('show'))
  errorSpans.forEach(span => span.classList.remove('show'))
}

function clearInputValues() {
  input1.value = ''
  input2.value = ''
  input3.value = ''
  input4.value = ''
}

function resetForm() {
  clearInputValues()
  removeErrorStates()
}

claimBtn.addEventListener('click', () => {

  if (areAllInputsEmpty()) {
    addErrorStates()
    return;
  }
  else if (areAllInputsValid()) {
    resetForm()
  }

})