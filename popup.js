const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

menu.onclick = function showMenu() {
  mobileMenu.style.display = 'block';
};
closeBtn.onclick = function closeMenu() {
  mobileMenu.style.display = 'none';
};
mobileMenu.onclick = function close() {
  mobileMenu.style.display = 'none';
};

// create popup card//**

const portfolioData = [
  {
    title: 'Tonic',
    workDetails: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/Portfolio1.png',
    image2: './images/dskPortfolio1.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },

  {
    title: 'Multi-Post<br /> Stories',
    workDetails: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/Portfolio2.png',
    image2: './images/dskPortfolio2.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },

  {
    title: 'Multi-Post<br /> Stories',
    workDetails: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/Portfolio3.png',
    image2: './images/dskPortfolio3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },

  {
    title: 'Multi-Post<br /> Stories',
    workDetails: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/Portfolio4.png',
    image2: '../images/dskPortfolio.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },
];

// ------------------------- Projects section --------------------//

const project = document.querySelector('.grid-container');
portfolioData.forEach((cardData, index) => {
  project.innerHTML += `<div class="card">
  <div class="row">
    <div class="col-1 work-1">
    <a href="#"
      ><img src="${cardData.image}" class="mobile-only" alt="portfolio-1"
    /></a>

       <a href="#"
      ><img src="${cardData.image2}" class="desktop-only" alt="portfolio-1"
    /></a>
    
    </div>

    <div class="col-2">
    <a href="#"><h2>${cardData.title}</h2></a>
    <div class="work-details flex2">
      <a href="#"><h3>${cardData.workDetails[0]}</h3></a>
      <div class="bullet-point"></div>
      <a href=""><h4>${cardData.workDetails[1]}</h4></a>
      <div class="bullet-point"></div>
      <a href=""><h4>${cardData.workDetails[2]}</h4></a>
    </div>
    <p>
      ${cardData.description}
    </p>
    <ul>
      <li class="work-tools">
        <button type="button" class="tools">${cardData.workTools[0]}</button>
        <button type="button" class="tools">${cardData.workTools[1]}</button>
        <button type="button" class="tools">${cardData.workTools[2]}</button>
      </li>
    </ul>
    <div>
      <button type="button" class="primary-btn" id="${index}">See Project</button>
    </div>
  </div>
  </div>
</div>`;
});

// ------------------------- Projects section --------------------//

// ------------------------- Pop-up section --------------------//

const dynamic = document.querySelector('.popup');
function displayPopUp(cardObject) {
  dynamic.innerHTML = `<div class="row">
                <div class="right-col work-1">
                  <a href="#"><h2>${cardObject.title}</h2></a>
                <div class="work-details flex2">
                  <a href="#"><h3>${cardObject.workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${cardObject.workDetails[1]}</h4></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${cardObject.workDetails[2]}</h4></a>
                  
                </div>
                <div class='close'>
          <img src="./images/greyX.svg" alt="close" class='x-icon'
            id="close"/>
        </div>
                  
                <a href="#"
                  ><img src="${cardObject.image}" class="mobile-only" alt="portfolio-1"
                /></a>
  
                   <a href="#"
                  ><img src="${cardObject.image2}" class="desktop-only" alt="portfolio-1"
                /></a>
                
                </div>
                <div class="left-col">
                <div class="text-side">
                <p class="desktop-only" >
                  ${cardObject.details}
                </p>
                <p class="mobile-only" >
                  ${cardObject.details}
                </p>
                </div>
                <div class="links-side">
                <ul>
                  <li class="work-tools">
                    <button type="button" class="tools desktop-only"> ${cardObject.workTools[0]}</button>
                    <button type="button" class="tools desktop-only">${cardObject.workTools[1]}</button>
                    <button type="button" class="tools desktop-only">${cardObject.workTools[2]}</button>
                    <button type="button" class="tools desktop-only">${cardObject.workTools[3]}</button>
                    <button type="button" class="tools desktop-only">${cardObject.workTools[4]}</button>
                    <button type="button" class="tools desktop-only">${cardObject.workTools[5]}</button>
                    <button type="button" class="tools mobile-only">${cardObject.workTools[0]}</button>
                    <button type="button" class="tools mobile-only">${cardObject.workTools[1]}</button>
                    <button type="button" class="tools mobile-only">${cardObject.workTools[2]}</button>
                  </li>
                </ul>
               <div class='live-btn'>
                  <div class= "btn-1">
                  <button type="button" class="pop-btn">
                    <a href="#" target="_blank">See Live</a>
                    <span><img src="#" alt='live'>
                  </button>
                </div>
                  
                  <div class= "btn-2">
                  <button type="button" class="pop-btn">
                  <a href="#" target="_blank">See Source</a>
                  <span><img src="./images/bluegithub.svg" alt='gitHub'>
                  </button>
                  </div>
                </div>
              </div>
              </div>
              </div>`;
  dynamic.style.display = 'block';
  const overlay = document.querySelector('.back-pop');
  overlay.style.display = 'flex';
  const popup = document.querySelector('.popup');
  const closeModal = document.querySelector('.x-icon');
  closeModal.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  });
}

const display = document.querySelectorAll('.primary-btn');
Array.from(display).forEach((element, index) => {
  element.addEventListener('click', () => {
    displayPopUp(portfolioData[index]);
  });
});

// ------------------------- Pop-up section ends --------------------//

// --------- implement the validation form ---------------

const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  const emailData = email.value;

  for (let i = 0; i < emailData.length; i += 1) {
    if (emailData[i] !== emailData[i].toLowerCase()) {
      e.preventDefault();
      error.innerText = 'Please enter email in lowercase!';
    }
  }
});

// ------------------- Local-Storage ------------------
const contactForm = document.getElementById('form');
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Message = document.getElementById('message');

contactForm.addEventListener('input', () => {
  const contactData = {
    username: Name.value,
    email: Email.value,
    message: Message.value,
  };
  localStorage.setItem('userData', JSON.stringify(contactData));
});

const GetDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
if (GetDataFromLocalStorage) {
  Name.value = GetDataFromLocalStorage.username;
  Email.value = GetDataFromLocalStorage.email;
  Message.value = GetDataFromLocalStorage.message;
}
