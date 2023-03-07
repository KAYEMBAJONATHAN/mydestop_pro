const form = document.querySelector('.form');
const submit = document.getElementById('get-in-touch-button');

function checkUppercase(event) {


  if (email.toLowerCase() !== email) {
    const errorMessage = 'Please make sure that your emails do not contain any upper case caracters';
    erroMessagediv.appendChild(document.createElement('p')).innerHTML = errorMessage;

    erroMessagediv.style.display = 'flex';
    submit.style.marginTop = '70px';
    event.preventDefault();
  }
  return true;
}
form.addEventListener('submit', checkUppercase);