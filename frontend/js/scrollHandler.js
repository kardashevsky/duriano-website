// js/scrollHandler.js

export default function handleScroll() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const threshold = document.documentElement.scrollHeight - window.innerHeight;

  // Логика для howToHeader
  const howToHeaders = {
    eng: document.querySelector('.howToHeaderEng'),
    cn: document.querySelector('.howToHeaderCn')
  };
  const pixelThresholdHowToHeaders = 500;
  Object.values(howToHeaders).forEach(header => {
    if (header) {
      if (window.scrollY >= pixelThresholdHowToHeaders) {
        header.classList.add('visible');
      }
    }
  });

  // Логика для startCharacter, smashCharacter, earnCharacter
  const characters = ['.startCharacter', '.smashCharacter', '.earnCharacter'];
  const pixelThresholdCharacters = 700;
  characters.forEach(selector => {
    const character = document.querySelector(selector);
    if (character) {
      if (window.scrollY >= pixelThresholdCharacters) {
        character.classList.add('visible');
      }
    }
  });

  // Логика для arrowToSmash, arrowToEarn
  const arrows = ['.arrowToSmash', '.arrowToEarn'];
  const pixelThresholdArrows = 700;
  arrows.forEach(selector => {
    const arrow = document.querySelector(selector);
    if (arrow) {
      if (window.scrollY >= pixelThresholdArrows) {
        arrow.classList.add('visible');
      }
    }
  });

  // Логика для trailerHeader
  const trailerHeaders = {
    eng: document.querySelector('.trailerHeaderEng'),
    cn: document.querySelector('.trailerHeaderCn')
  };
  const pixelThresholdTrailerHeaders = 1550;
  Object.values(trailerHeaders).forEach(header => {
    if (header) {
      if (window.scrollY >= pixelThresholdTrailerHeaders) {
        header.classList.add('visible');
      }
    }
  });

  // Логика для windowTrailerVideo и playVideoButton
  const windowTrailerVideo = document.querySelector('.windowTrailerVideo');
  const playVideoButton = document.querySelector('.playVideoButton');
  const pixelThresholdVideo = 1850;
  if (windowTrailerVideo) {
    if (window.scrollY >= pixelThresholdVideo) {
      windowTrailerVideo.classList.add('visible');
      playVideoButton.classList.add('visible');
    }
  }

  // Логика для roadmapHeader
  const roadmapHeaders = {
    eng: document.querySelector('.roadmapHeaderEng'),
    cn: document.querySelector('.roadmapHeaderCn')
  };
  const pixelThresholdRoadMapHeaders = 2600;
  Object.values(roadmapHeaders).forEach(header => {
    if (header) {
      if (window.scrollY >= pixelThresholdRoadMapHeaders) {
        header.classList.add('visible');
      }
    }
  });

  // Логика для smashToEarnCharacter
  const smashToEarnCharacter = document.querySelector('.smashToEarnCharacter');
  const pixelThresholdSmashToEarnCharacter = 2900;
  if (smashToEarnCharacter) {
    if (window.scrollY >= pixelThresholdSmashToEarnCharacter) {
      smashToEarnCharacter.classList.add('visible');
    }
  }

  // Логика для q3Header
  const q3Header = document.querySelector('.q3Header');
  const pixelThresholdQ3Header = 2900;
  if (q3Header) {
    if (window.scrollY >= pixelThresholdQ3Header) {
      q3Header.classList.add('visible');
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
      }
    });
  }

  // Логика для ffffToEarnCharacter
  const ffffToEarnCharacter = document.querySelector('.ffffToEarnCharacter');
  const pixelThresholdFffffToEarnCharacter = 3300;
  if (ffffToEarnCharacter) {
    if (window.scrollY >= pixelThresholdFffffToEarnCharacter) {
      ffffToEarnCharacter.classList.add('visible');
    }
  }

  // Логика для q4Header
  const q4Header = document.querySelector('.q4Header');
  const pixelThresholdQ4Header = 3300;
  if (q3Header) {
    if (window.scrollY >= pixelThresholdQ4Header) {
      q4Header.classList.add('visible');
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
      }
    });
  }

  // Логика для playToEarnCharacter
  const playToEarnCharacter = document.querySelector('.playToEarnCharacter');
  const pixelThresholdPlayToEarnCharacter = 3700;
  if (playToEarnCharacter) {
    if (window.scrollY >= pixelThresholdPlayToEarnCharacter) {
      playToEarnCharacter.classList.add('visible');
    }
  }

  // Логика для q1Header
  const q1Header = document.querySelector('.q1Header');
  const pixelThresholdQ1Header = 3700;
  if (q1Header) {
    if (window.scrollY >= pixelThresholdQ1Header) {
      q1Header.classList.add('visible');
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
    }
  }

  // Логика для footer
  const footer = document.querySelector('.footer');
  if (scrollPosition >= threshold) {
    footer.classList.add('visible');
  }
}

// Подключаем обработчик прокрутки
window.addEventListener('scroll', handleScroll);
