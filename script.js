const typedText = document.getElementById('typed-text');
const text = typedText.textContent.trim();
let currentCharIndex = 0;

const contentToFadeIn = Array.from(document.querySelectorAll('h2, p, ul'));

function typewriter() {
  if (currentCharIndex === text.length) {
    contentToFadeIn.forEach((element) => {
      element.classList.add('fade-in');
    });
    return;
  }

  typedText.textContent = text.slice(0, currentCharIndex + 1);
  currentCharIndex++;

  setTimeout(typewriter, 100);
}

typewriter();
