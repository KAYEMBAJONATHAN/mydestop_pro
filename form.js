const form = document.querySelector('.form');
const submit = document.getElementById('get-in-touch-button');

function checkUppercase(event) {
  const email = document.getElementById('email').value;
  const erroMessagediv = document.querySelector('.error-message-div');

  if (erroMessagediv.querySelector('p') !== null) {
    const paragraph = erroMessagediv.querySelector('p');
    erroMessagediv.removeChild(paragraph);
    erroMessagediv.getElementsByClassName.display = 'none';
    submit.style.marginTop = '40px';
  }

  if (email.toLowerCase() !== email) {
    const errorMessage = 'Please make sure that your emails do not contain any upper case caracters';
    erroMessagediv.appendChild(document.createElement('p')).innerHTML = errorMessage;

    erroMessagediv.style.display = 'flex';
    submit.style.marginTop = '70px';
    event.preventDefault();
  }
  return true;
}

