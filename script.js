const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, Curse Response have been submitted to Intergalactic-Cosmos Purba Swain";
  gif.src =
    "https://media1.giphy.com/media/JErAGpPtUV8ze/giphy.gif?cid=ecf05e479czwzmu06y9ow89vtz10hj2fi7g3u9yesm8vfe7m&ep=v1_gifs_related&rid=giphy.gif&ct=g";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
