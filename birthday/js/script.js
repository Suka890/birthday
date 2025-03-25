const audio = document.querySelector('audio');
const body = document.querySelector('body');

audio.addEventListener('play', () => {
    body.classList.add('play-music');
});

audio.addEventListener('pause', () => { // Fixed typo
    body.classList.remove('play-music');
});





document.addEventListener("DOMContentLoaded", function () {
    function createFlower() {
        let card = document.querySelector(".card");
        let text = document.querySelector(".text");
        let cardRect = card.getBoundingClientRect();
        let textRect = text.getBoundingClientRect();
        let flower = document.createElement("div");
        flower.classList.add("flower");

        let x, y;
        let spawnOutsideText = false;
        let attempts = 0;

        while (!spawnOutsideText && attempts < 10) {
            x = Math.random() * (cardRect.width - 50);
            y = Math.random() * (cardRect.height - 50);

            // Ensure flowers don't overlap with text
            if (
                x + cardRect.left > textRect.right || // Right of text
                x + cardRect.left + 50 < textRect.left || // Left of text
                y + cardRect.top > textRect.bottom || // Below text
                y + cardRect.top + 50 < textRect.top // Above text
            ) {
                spawnOutsideText = true;
            }
            attempts++;
        }

        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        card.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }

    setInterval(createFlower, 700);
});









const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(window.innerHeight);  // Random height anywhere on screen
    var ml = random(window.innerWidth - 100);  // Random width anywhere on screen
    var dur = random(5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    position: absolute; /* Make sure balloons are positioned freely */
    top: ${mt}px; /* Set a random position anywhere on the screen */
    left: ${ml}px;
    animation: float ${dur}s ease-in infinite;
    `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createBalloons(30)
});

window.addEventListener("click", () => {
  removeBalloons();
});
