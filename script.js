const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let hoverCounter = 0;
const maxHoverCount = 7; 

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay!";
  gif.src = "https://i.pinimg.com/originals/17/e1/39/17e13977ee118b9e920b24326a49f1d6.gif";
});

noBtn.addEventListener("mouseover", () => {
  hoverCounter++;

  if (hoverCounter === maxHoverCount) {
    gif.src = "http://images15.fotki.com/v1670/photos/7/803707/16109089/AS001944_04-vi.gif";
    question.innerHTML = "Pretty please???";
  }

  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
