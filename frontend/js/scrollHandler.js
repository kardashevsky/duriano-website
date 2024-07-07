// js/scrollHandler.js

export default function handleScroll() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const threshold = document.documentElement.scrollHeight - window.innerHeight;

  // Логика для howToHeader
  const howToHeaders = {
    eng: document.querySelector('.howToHeaderEng'),
    cn: document.querySelector('.howToHeaderCn')
  };
  const pixelThreshold1 = 500;
  Object.values(howToHeaders).forEach(header => {
    if (header) {
      if (window.scrollY >= pixelThreshold1) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    }
  });

  // Логика для startCharacter, smashCharacter, earnCharacter
  const characters = ['.startCharacter', '.smashCharacter', '.earnCharacter'];
  const pixelThreshold2 = 700;
  characters.forEach(selector => {
    const character = document.querySelector(selector);
    if (character) {
      if (window.scrollY >= pixelThreshold2) {
        character.classList.add('visible');
      } else {
        character.classList.remove('visible');
      }
    }
  });

  // Логика для arrowToSmash, arrowToEarn
  const arrows = ['.arrowToSmash', '.arrowToEarn'];
  const pixelThreshold3 = 700;
  arrows.forEach(selector => {
    const arrow = document.querySelector(selector);
    if (arrow) {
      if (window.scrollY >= pixelThreshold3) {
        arrow.classList.add('visible');
      } else {
        arrow.classList.remove('visible');
      }
    }
  });

  // Логика для trailerHeader
  const trailerHeaders = {
    eng: document.querySelector('.trailerHeaderEng'),
    cn: document.querySelector('.trailerHeaderCn')
  };
  const pixelThreshold4 = 1550;
  Object.values(trailerHeaders).forEach(header => {
    if (header) {
      if (window.scrollY >= pixelThreshold4) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    }
  });

  // Логика для windowTrailerVideo и playVideoButton
  const windowTrailerVideo = document.querySelector('.windowTrailerVideo');
  const playVideoButton = document.querySelector('.playVideoButton');
  const pixelThreshold5 = 1850;
  if (windowTrailerVideo) {
    if (window.scrollY >= pixelThreshold5) {
      windowTrailerVideo.classList.add('visible');
      playVideoButton.classList.add('visible');
    } else {
      windowTrailerVideo.classList.remove('visible');
      playVideoButton.classList.remove('visible');
    }
  }

  // Логика для roadmapHeader
  const roadmapHeaders = {
    eng: document.querySelector('.roadmapHeaderEng'),
    cn: document.querySelector('.roadmapHeaderCn')
  };
  const pixelThreshold6 = 2600;
  Object.values(roadmapHeaders).forEach(header => {
    if (header) {
      if (window.scrollY >= pixelThreshold6) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    }
  });

  // Логика для smashToEarnCharacter
  const smashToEarnCharacter = document.querySelector('.smashToEarnCharacter');
  const pixelThresholdSmashToEarnCharacter = 2900;
  if (smashToEarnCharacter) {
    if (window.scrollY >= pixelThresholdSmashToEarnCharacter) {
      smashToEarnCharacter.classList.add('visible');
    } else {
      smashToEarnCharacter.classList.remove('visible');
    }
  }

  // Логика для q3Header
  const q3Header = document.querySelector('.q3Header');
  const pixelThresholdQ3Header = 2900;
  if (q3Header) {
    if (window.scrollY >= pixelThresholdQ3Header) {
      q3Header.classList.add('visible');
    } else {
      q3Header.classList.remove('visible');
    }
  }

  // Логика для roadMapQ3Text
  const roadMapQ3Text = {
    eng: document.querySelector('.roadMapQ3TextEng'),
    cn: document.querySelector('.roadMapQ3TextCn')
  };
  const pixelThresholdRoadMapQ3Text = 2900;
  Object.values(roadMapQ3Text).forEach(header => {
    if (header) {
      if (window.scrollY >= pixelThresholdRoadMapQ3Text) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    }
  });

  // Логика для arrowToFfffToEarn
  const arrowToFfffToEarnSelector = '.arrowToFfffToEarn';
  const pixelThresholdArrowToFfffToEarn = 2900;
  const arrowToFfffToEarn = document.querySelector(arrowToFfffToEarnSelector);

  if (arrowToFfffToEarn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY >= pixelThresholdArrowToFfffToEarn) {
        arrowToFfffToEarn.classList.add('visible');
      } else {
        arrowToFfffToEarn.classList.remove('visible');
      }
    });
  }

  // Логика для ffffToEarnCharacter
  const ffffToEarnCharacter = document.querySelector('.ffffToEarnCharacter');
  const pixelThresholdFffffToEarnCharacter = 3300;
  if (ffffToEarnCharacter) {
    if (window.scrollY >= pixelThresholdFffffToEarnCharacter) {
      ffffToEarnCharacter.classList.add('visible');
    } else {
      ffffToEarnCharacter.classList.remove('visible');
    }
  }

  // Логика для q4Header
  const q4Header = document.querySelector('.q4Header');
  const pixelThresholdQ4Header = 3300;
  if (q3Header) {
    if (window.scrollY >= pixelThresholdQ4Header) {
      q4Header.classList.add('visible');
    } else {
      q4Header.classList.remove('visible');
    }
  }

  // Логика для roadMapQ4Text
  const roadMapQ4Text = {
    eng: document.querySelector('.roadMapQ4TextEng'),
    cn: document.querySelector('.roadMapQ4TextCn')
  };
  const pixelThresholdRoadMapQ4Text = 3300;
  Object.values(roadMapQ4Text).forEach(header => {
    if (header) {
      if (window.scrollY >= pixelThresholdRoadMapQ4Text) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    }
  });

  // Логика для arrowToPlayToEarn
  const arrowToPlayToEarnSelector = '.arrowToPlayToEarn';
  const pixelThresholdArrowToPlayToEarn = 3300;
  const arrowToPlayToEarn = document.querySelector(arrowToPlayToEarnSelector);

  if (arrowToPlayToEarn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY >= pixelThresholdArrowToPlayToEarn) {
        arrowToPlayToEarn.classList.add('visible');
      } else {
        arrowToPlayToEarn.classList.remove('visible');
      }
    });
  }

  // Логика для playToEarnCharacter
  const playToEarnCharacter = document.querySelector('.playToEarnCharacter');
  const pixelThresholdPlayToEarnCharacter = 3700;
  if (playToEarnCharacter) {
    if (window.scrollY >= pixelThresholdPlayToEarnCharacter) {
      playToEarnCharacter.classList.add('visible');
    } else {
      playToEarnCharacter.classList.remove('visible');
    }
  }

  // Логика для q1Header
  const q1Header = document.querySelector('.q1Header');
  const pixelThresholdQ1Header = 3700;
  if (q1Header) {
    if (window.scrollY >= pixelThresholdQ1Header) {
      q1Header.classList.add('visible');
    } else {
      q1Header.classList.remove('visible');
    }
  }

  // Логика для roadMapQ1Text
  const roadMapQ1Text = {
    eng: document.querySelector('.roadMapQ1TextEng'),
    cn: document.querySelector('.roadMapQ1TextCn')
  };
  const pixelThresholdRoadMapQ1Text = 3700;
  Object.values(roadMapQ1Text).forEach(header => {
    if (header) {
      if (window.scrollY >= pixelThresholdRoadMapQ1Text) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    }
  });

  // Логика для playButtonFooter
  const playButtonFooter = document.querySelector('.playButtonFooter');
  if (playButtonFooter) {
    const playButtonFooterRect = playButtonFooter.getBoundingClientRect();
    const isVisible = playButtonFooterRect.top < window.innerHeight && playButtonFooterRect.bottom >= 0;

    if (isVisible) {
      playButtonFooter.classList.add('visible');
    } else {
      playButtonFooter.classList.remove('visible');
    }
  }

  // Логика для footer
  const footer = document.querySelector('.footer');
  if (scrollPosition >= threshold) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
}

// Подключаем обработчик прокрутки
window.addEventListener('scroll', handleScroll);
