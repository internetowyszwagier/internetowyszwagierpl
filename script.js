// --- Typewriter ---
const TEXT = '<internetowy szwagier> naprawa stron internetowych </>';
const SPEED = 83; // ms per character

const h1 = document.getElementById('typewriter');
const caret = h1.querySelector('.caret');
let i = 0;

function type() {
  if (i < TEXT.length) {
    caret.insertAdjacentText('beforebegin', TEXT[i]);
    i++;
    setTimeout(type, SPEED);
  }
}

type();

// --- Scroll to top ---
const btn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
