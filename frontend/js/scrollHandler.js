// js/scrollHandler.js

export default function handleScroll() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const threshold = document.documentElement.scrollHeight - window.innerHeight;

  // Определение порогов для всех элементов
  const thresholds = {
    howToHeaders: { desktop: 500, mobile: 280 },
    characters: { desktop: 700, mobile: 550 },
    arrows: { desktop: 700, mobile: 550 },
    trailerHeaders: { desktop: 1550, mobile: 910 },
    windowTrailerVideo: { desktop: 1850, mobile: 1120 },
    roadmapHeaders: { desktop: 2600, mobile: 1250 },
    smashToEarnCharacter: { desktop: 2900, mobile: 1400 },
    q3Header: { desktop: 2900, mobile: 1400 },
    roadMapQ3Text: { desktop: 2900, mobile: 1400 },
    arrowToFfffToEarn: { desktop: 2900, mobile: 1420 },
    ffffToEarnCharacter: { desktop: 3300, mobile: 1500 },
    q4Header: { desktop: 3300, mobile: 1500 },
    roadMapQ4Text: { desktop: 3300, mobile: 1500 },
    arrowToPlayToEarn: { desktop: 3300, mobile: 1520 },
    playToEarnCharacter: { desktop: 3700, mobile: 1600 },
    q1Header: { desktop: 3700, mobile: 1600 },
    roadMapQ1Text: { desktop: 3700, mobile: 1600 }
  };

  // Функция для получения текущего порога в зависимости от ширины экрана
  function getCurrentPixelThreshold(key) {
    return window.innerWidth <= 430 ? thresholds[key].mobile : thresholds[key].desktop;
  }

  // Функция для проверки и добавления классов видимости
  function checkAndSetVisibility() {
    const howToHeaders = {
      eng: document.querySelector('.howToHeaderEng'),
      cn: document.querySelector('.howToHeaderCn')
    };
    const characters = ['.startCharacter', '.smashCharacter', '.earnCharacter'];
    const arrows = ['.arrowToSmash', '.arrowToEarn', '.arrowToSmashMobile', '.arrowToEarnMobile'];
    const trailerHeaders = {
      eng: document.querySelector('.trailerHeaderEng'),
      cn: document.querySelector('.trailerHeaderCn')
    };
    const windowTrailerVideo = document.querySelector('.windowTrailerVideo');
    const playVideoButton = document.querySelector('.playVideoButton');
    const roadmapHeaders = {
      eng: document.querySelector('.roadmapHeaderEng'),
      cn: document.querySelector('.roadmapHeaderCn')
    };
    const smashToEarnCharacter = document.querySelector('.smashToEarnCharacter');
    const q3Header = document.querySelector('.q3Header');
    const roadMapQ3Text = {
      eng: document.querySelector('.roadMapQ3TextEng'),
      cn: document.querySelector('.roadMapQ3TextCn'),
      mobile: document.querySelector('.roadMapQ3TextMobileEng, .roadMapQ3TextMobileCn')
    };
    const arrowToFfffToEarn = document.querySelector('.arrowToFfffToEarn');
    const arrowToFfffToEarnMobile = document.querySelector('.arrowToFfffToEarnMobile');
    const ffffToEarnCharacter = document.querySelector('.ffffToEarnCharacter');
    const q4Header = document.querySelector('.q4Header');
    const roadMapQ4Text = {
      eng: document.querySelector('.roadMapQ4TextEng'),
      cn: document.querySelector('.roadMapQ4TextCn'),
      mobile: document.querySelector('.roadMapQ4TextMobileEng, .roadMapQ4TextMobileCn')
    };
    const arrowToPlayToEarn = document.querySelector('.arrowToPlayToEarn');
    const arrowToPlayToEarnMobile = document.querySelector('.arrowToPlayToEarnMobile');
    const playToEarnCharacter = document.querySelector('.playToEarnCharacter');
    const q1Header = document.querySelector('.q1Header');
    const roadMapQ1Text = {
      eng: document.querySelector('.roadMapQ1TextEng'),
      cn: document.querySelector('.roadMapQ1TextCn'),
      mobile: document.querySelector('.roadMapQ1TextMobileEng, .roadMapQ1TextMobileCn')
    };
    const playButtonFooter = document.querySelector('.playButtonFooter');
    const footer = document.querySelector('.footer');
    const footerMobile = document.querySelector('.footer-mobile');

    // Проверка и добавление классов видимости для всех элементов
    Object.values(howToHeaders).forEach(header => {
      if (header && window.scrollY >= getCurrentPixelThreshold('howToHeaders')) {
        header.classList.add('visible');
      }
    });

    characters.forEach(selector => {
      const character = document.querySelector(selector);
      if (character && window.scrollY >= getCurrentPixelThreshold('characters')) {
        character.classList.add('visible');
      }
    });

    arrows.forEach(selector => {
      const arrow = document.querySelector(selector);
      if (arrow && window.scrollY >= getCurrentPixelThreshold('arrows')) {
        arrow.classList.add('visible');
      }
    });

    Object.values(trailerHeaders).forEach(header => {
      if (header && window.scrollY >= getCurrentPixelThreshold('trailerHeaders')) {
        header.classList.add('visible');
      }
    });

    if (windowTrailerVideo && window.scrollY >= getCurrentPixelThreshold('windowTrailerVideo')) {
      windowTrailerVideo.classList.add('visible');
      playVideoButton.classList.add('visible');
    }

    Object.values(roadmapHeaders).forEach(header => {
      if (header && window.scrollY >= getCurrentPixelThreshold('roadmapHeaders')) {
        header.classList.add('visible');
      }
    });

    if (smashToEarnCharacter && window.scrollY >= getCurrentPixelThreshold('smashToEarnCharacter')) {
      smashToEarnCharacter.classList.add('visible');
    }

    if (q3Header && window.scrollY >= getCurrentPixelThreshold('q3Header')) {
      q3Header.classList.add('visible');
    }

    if (window.innerWidth <= 430 && roadMapQ3Text.mobile && window.scrollY >= getCurrentPixelThreshold('roadMapQ3Text')) {
      roadMapQ3Text.mobile.classList.add('visible');
    } else if (roadMapQ3Text.eng && window.scrollY >= getCurrentPixelThreshold('roadMapQ3Text')) {
      roadMapQ3Text.eng.classList.add('visible');
    }

    Object.values(roadMapQ3Text).forEach(header => {
      if (header && window.scrollY >= getCurrentPixelThreshold('roadMapQ3Text')) {
        header.classList.add('visible');
      }
    });

    if (arrowToFfffToEarn && window.scrollY >= getCurrentPixelThreshold('arrowToFfffToEarn')) {
      arrowToFfffToEarn.classList.add('visible');
    }

    if (arrowToFfffToEarnMobile && window.scrollY >= getCurrentPixelThreshold('arrowToFfffToEarn')) {
      arrowToFfffToEarnMobile.classList.add('visible');
    }

    if (ffffToEarnCharacter && window.scrollY >= getCurrentPixelThreshold('ffffToEarnCharacter')) {
      ffffToEarnCharacter.classList.add('visible');
    }

    if (q4Header && window.scrollY >= getCurrentPixelThreshold('q4Header')) {
      q4Header.classList.add('visible');
    }

    if (window.innerWidth <= 430 && roadMapQ4Text.mobile && window.scrollY >= getCurrentPixelThreshold('roadMapQ4Text')) {
      roadMapQ4Text.mobile.classList.add('visible');
    } else if (roadMapQ4Text.eng && window.scrollY >= getCurrentPixelThreshold('roadMapQ4Text')) {
      roadMapQ4Text.eng.classList.add('visible');
    }

    Object.values(roadMapQ4Text).forEach(header => {
      if (header && window.scrollY >= getCurrentPixelThreshold('roadMapQ4Text')) {
        header.classList.add('visible');
      }
    });

    if (arrowToPlayToEarn && window.scrollY >= getCurrentPixelThreshold('arrowToPlayToEarn')) {
      arrowToPlayToEarn.classList.add('visible');
    }

    if (arrowToPlayToEarnMobile && window.scrollY >= getCurrentPixelThreshold('arrowToPlayToEarn')) {
      arrowToPlayToEarnMobile.classList.add('visible');
    }

    if (playToEarnCharacter && window.scrollY >= getCurrentPixelThreshold('playToEarnCharacter')) {
      playToEarnCharacter.classList.add('visible');
    }

    if (q1Header && window.scrollY >= getCurrentPixelThreshold('q1Header')) {
      q1Header.classList.add('visible');
    }

    // Добавленные условия для мобильной версии
    if (window.innerWidth <= 430 && roadMapQ1Text.mobile && window.scrollY >= getCurrentPixelThreshold('roadMapQ1Text')) {
      roadMapQ1Text.mobile.classList.add('visible');
    } else if (roadMapQ1Text.eng && window.scrollY >= getCurrentPixelThreshold('roadMapQ1Text')) {
      roadMapQ1Text.eng.classList.add('visible');
    }

    Object.values(roadMapQ1Text).forEach(header => {
      if (header && window.scrollY >= getCurrentPixelThreshold('roadMapQ1Text')) {
        header.classList.add('visible');
      }
    });

    if (playButtonFooter) {
      const playButtonFooterRect = playButtonFooter.getBoundingClientRect();
      const isVisible = playButtonFooterRect.top < window.innerHeight && playButtonFooterRect.bottom >= 0;
      if (isVisible) {
        playButtonFooter.classList.add('visible');
      }
    }

    if (scrollPosition >= threshold) {
      footer.classList.add('visible');
      footerMobile.classList.add('visible');
    }
  }

  // Изначальная проверка при загрузке страницы
  checkAndSetVisibility();

  // Проверка при изменении размеров окна
  window.addEventListener('resize', checkAndSetVisibility);
}

// Подключаем обработчик прокрутки
window.addEventListener('scroll', handleScroll);
