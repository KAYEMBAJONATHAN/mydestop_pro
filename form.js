const form = document.querySelector('.form');
const submit = document.getElementById('get-in-touch-button');

function checkUppercase(e) {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  const email = document.getElementById('email').value;
  const erroMessagediv = document.querySelector('#erroMessagediv');

  if (!regex.test(email)) {
    e.preventDefault();

    erroMessagediv.innerHTML = 'Check your email  address';
    return;
  }

  if (erroMessagediv.querySelector('p') !== null) {
    const paragraph = erroMessagediv.querySelector('p');
    erroMessagediv.removeChild(paragraph);
    erroMessagediv.getElementsByClassName.display = 'none';
    submit.style.marginTop = '40pxx';
  }

  if (!regex.test(email)) {
    const errorMessage = 'Please make sure that your emails do not contain any upper case caracters';
    erroMessagediv.appendChild(document.createElement('p')).innerHTML = errorMessage;

    erroMessagediv.style.display = 'flex';
    submit.style.marginTop = '70px';
  }
}
form.addEventListener('submit', checkUppercase);