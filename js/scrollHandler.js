// js/scrollHandler.js
export default function handleScroll() {
  const footer = document.querySelector('.footer');
  const scrollPosition = window.scrollY + window.innerHeight;
  const threshold = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollPosition >= threshold) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
}
