// js/scrollHandler.js

export default function handleScroll() {
  const footer = document.querySelector('.footer');
  const playButtonFooter = document.querySelector('.playButtonFooter');
  const howToHeaderEng = document.querySelector('.howToHeaderEng');
  const trailerHeaderEng = document.querySelector('.trailerHeaderEng');
  const windowTrailerVideo = document.querySelector('.windowTrailerVideo');
  const playVideoButton = document.querySelector('.playVideoButton');
  const roadmapHeaderEng = document.querySelector('.roadmapHeaderEng');
  const scrollPosition = window.scrollY + window.innerHeight;
  const threshold = document.documentElement.scrollHeight - window.innerHeight;

  // Логика для footer
  if (scrollPosition >= threshold) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }

  // Логика для playButtonFooter
  if (playButtonFooter) {
    const playButtonFooterRect = playButtonFooter.getBoundingClientRect();
    const isVisible = playButtonFooterRect.top < window.innerHeight && playButtonFooterRect.bottom >= 0;

    if (isVisible) {
      playButtonFooter.classList.add('visible');
    } else {
      playButtonFooter.classList.remove('visible');
    }
  }

  // Логика для howToHeaderEng
  const pixelThreshold1 = 500; // Укажите пороговое значение прокрутки в пикселях
  if (howToHeaderEng) {
    if (window.scrollY >= pixelThreshold1) {
      howToHeaderEng.classList.add('visible');
    } else {
      howToHeaderEng.classList.remove('visible');
    }
  }

  // Логика для trailerHeaderEng
  const pixelThreshold2 = 1550; // Укажите пороговое значение прокрутки в пикселях
  if (trailerHeaderEng) {
    if (window.scrollY >= pixelThreshold2) {
      trailerHeaderEng.classList.add('visible');
    } else {
      trailerHeaderEng.classList.remove('visible');
    }
  }

  // Логика для windowTrailerVideo
  const pixelThreshold3 = 1850; // Укажите пороговое значение прокрутки в пикселях
  if (windowTrailerVideo) {
    if (window.scrollY >= pixelThreshold3) {
      windowTrailerVideo.classList.add('visible');
      playVideoButton.classList.add('visible');
    } else {
      windowTrailerVideo.classList.remove('visible');
      playVideoButton.classList.remove('visible');
    }
  }

  // Логика для roadmapHeaderEng
  const pixelThreshold4 = 2600; // Укажите пороговое значение прокрутки в пикселях
  if (roadmapHeaderEng) {
    if (window.scrollY >= pixelThreshold4) {
      roadmapHeaderEng.classList.add('visible');
    } else {
      roadmapHeaderEng.classList.remove('visible');
    }
  }
}

// Подключаем обработчик прокрутки
window.addEventListener('scroll', handleScroll);
