export default function handleScroll() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollPosition = scrollY + windowHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const isFooterVisible = scrollPosition >= documentHeight - windowHeight;

  const thresholds = {
    howToHeaders: { desktop: 500, mobile: 280, desk1440: 500 },
    characters: { desktop: 700, mobile: 550, desk1440: 600 },
    arrows: { desktop: 700, mobile: 550, desk1440: 600 },
    trailerHeaders: { desktop: 1550, mobile: 910, desk1440: 1300 },
    windowTrailerVideo: { desktop: 1850, mobile: 1120, desk1440: 1480 },
    roadmapHeaders: { desktop: 2600, mobile: 1250, desk1440: 1950 },
    smashToEarnCharacter: { desktop: 2900, mobile: 1400, desk1440: 2150 },
    q3Header: { desktop: 2900, mobile: 1400, desk1440: 2150 },
    roadMapQ3Text: { desktop: 2900, mobile: 1400, desk1440: 2150 },
    arrowToFfffToEarn: { desktop: 2900, mobile: 1420, desk1440: 2290 },
    ffffToEarnCharacter: { desktop: 3300, mobile: 1500, desk1440: 2500 },
    q4Header: { desktop: 3300, mobile: 1500, desk1440: 2500 },
    roadMapQ4Text: { desktop: 3300, mobile: 1500, desk1440: 2500 },
    arrowToPlayToEarn: { desktop: 3300, mobile: 1520, desk1440: 2700 },
    playToEarnCharacter: { desktop: 3700, mobile: 1600, desk1440: 2800 },
    q1Header: { desktop: 3700, mobile: 1600, desk1440: 2800 },
    roadMapQ1Text: { desktop: 3700, mobile: 1600, desk1440: 2800 }
  };

  function getCurrentThreshold(key) {
    const width = window.innerWidth;
    if (width <= 430) {
      return thresholds[key].mobile;
    } else if (width <= 1440) {
      return thresholds[key].desk1440;
    } else {
      return thresholds[key].desktop;
    }
  }

  function checkAndSetVisibility(selector, key) {
    const element = document.querySelector(selector);
    if (element && scrollY >= getCurrentThreshold(key)) {
      element.classList.add('visible');
    }
  }

  checkAndSetVisibility('.howToHeaderEng', 'howToHeaders');
  checkAndSetVisibility('.howToHeaderCn', 'howToHeaders');

  ['.startCharacter', '.smashCharacter', '.earnCharacter'].forEach(selector => {
    checkAndSetVisibility(selector, 'characters');
  });

  ['.arrowToSmash', '.arrowToEarn', '.arrowToSmashMobile', '.arrowToEarnMobile'].forEach(selector => {
    checkAndSetVisibility(selector, 'arrows');
  });

  checkAndSetVisibility('.trailerHeaderEng', 'trailerHeaders');
  checkAndSetVisibility('.trailerHeaderCn', 'trailerHeaders');
  checkAndSetVisibility('.windowTrailerVideo', 'windowTrailerVideo');
  checkAndSetVisibility('.playVideoButton', 'windowTrailerVideo');
  checkAndSetVisibility('.roadmapHeaderEng', 'roadmapHeaders');
  checkAndSetVisibility('.roadmapHeaderCn', 'roadmapHeaders');
  checkAndSetVisibility('.smashToEarnCharacter', 'smashToEarnCharacter');
  checkAndSetVisibility('.q3Header', 'q3Header');

  if (window.innerWidth <= 430) {
    checkAndSetVisibility('.roadMapQ3TextMobileEng, .roadMapQ3TextMobileCn', 'roadMapQ3Text');
  } else {
    checkAndSetVisibility('.roadMapQ3TextEng', 'roadMapQ3Text');
    checkAndSetVisibility('.roadMapQ3TextCn', 'roadMapQ3Text');
  }

  checkAndSetVisibility('.arrowToFfffToEarn', 'arrowToFfffToEarn');
  checkAndSetVisibility('.arrowToFfffToEarnMobile', 'arrowToFfffToEarn');
  checkAndSetVisibility('.ffffToEarnCharacter', 'ffffToEarnCharacter');
  checkAndSetVisibility('.q4Header', 'q4Header');

  if (window.innerWidth <= 430) {
    checkAndSetVisibility('.roadMapQ4TextMobileEng, .roadMapQ4TextMobileCn', 'roadMapQ4Text');
  } else {
    checkAndSetVisibility('.roadMapQ4TextEng', 'roadMapQ4Text');
    checkAndSetVisibility('.roadMapQ4TextCn', 'roadMapQ4Text');
  }

  checkAndSetVisibility('.arrowToPlayToEarn', 'arrowToPlayToEarn');
  checkAndSetVisibility('.arrowToPlayToEarnMobile', 'arrowToPlayToEarn');
  checkAndSetVisibility('.playToEarnCharacter', 'playToEarnCharacter');
  checkAndSetVisibility('.q1Header', 'q1Header');

  if (window.innerWidth <= 430) {
    checkAndSetVisibility('.roadMapQ1TextMobileEng, .roadMapQ1TextMobileCn', 'roadMapQ1Text');
  } else {
    checkAndSetVisibility('.roadMapQ1TextEng', 'roadMapQ1Text');
    checkAndSetVisibility('.roadMapQ1TextCn', 'roadMapQ1Text');
  }

  const playButtonFooter = document.querySelector('.playButtonFooter');
  if (playButtonFooter) {
    const playButtonFooterRect = playButtonFooter.getBoundingClientRect();
    const isVisible = playButtonFooterRect.top < windowHeight && playButtonFooterRect.bottom >= 0;
    if (isVisible) {
      playButtonFooter.classList.add('visible');
    }
  }

  const footer = document.querySelector('.footer');
  const footerMobile = document.querySelector('.footer-mobile');
  if (isFooterVisible) {
    footer.classList.add('visible');
    footerMobile.classList.add('visible');
  }
}

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

handleScroll();

window.addEventListener('resize', debounce(handleScroll));
window.addEventListener('scroll', debounce(handleScroll));
