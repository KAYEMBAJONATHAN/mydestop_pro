const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const textAreaBoxInput = document.getElementById('msg');
const formStorage = document.getElementById('form');

let userInfo = JSON.parse(localStorage.getItem('userInfo'));
console.log(userInfo);

if (userInfo !== null) {
  if (userInfo.hasOwnProperty('username')) {
    nameInput.value = userInfo.username;
  }
  if (userInfo.hasOwnProperty('email')) {
    emailInput.value = userInfo.email;
  }
  if (userInfo.hasOwnProperty('msg')) {
    textAreaBoxInput.value = userInfo.msg;
  }
} else {
  userInfo = {};
}

formStorage.addEventListener('change', () => {
  populateStorage('username');
  populateStorage('email'); 
  populateStorage('message');
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});

function populateStorage(infoType) {
  if (infoType === 'username') {
    userInfo.username = nameInput.value;
  } else if (infoType === 'email') {
    userInfo.email = emailInput.value;
  } else if (infoType === 'message') {
    userInfo.msg = textAreaBoxInput.value;
  }
  console.log(userInfo);
}
