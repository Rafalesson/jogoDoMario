const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const cloud = document.querySelector(".cloud");
const restart = document.querySelector(".restart")

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const reiniciarJogo = () => {
    location.reload()
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudPosition = cloud.offsetLeft

    
    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition + 50}px`
        
        mario.src = "img/mario3.gif"
        mario.style.animation = "none"
        // mario.style.bottom = `${marioPosition}px`

        cloud.style.animation = "none"
        cloud.style.left = `${cloudPosition}px`

        restart.style.display = "block"
        restart.addEventListener('click', reiniciarJogo)

        clearInterval(loop);
    }

}, 10);

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    jump();
  }
});
