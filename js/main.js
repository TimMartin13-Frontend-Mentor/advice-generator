const requestUrl = 'https://api.adviceslip.com/advice';

const card = document.querySelector(".card");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const adviceBtn = document.querySelector(".advice-btn");


const getAdvice = () => {
  fetch(requestUrl)
    .then(response => response.json())
    .then(data => 
      {
        adviceNumber.innerHTML = data.slip.id;
        adviceText.innerHTML = data.slip.advice;
      });
}

adviceBtn.addEventListener('click', getAdvice);
  
