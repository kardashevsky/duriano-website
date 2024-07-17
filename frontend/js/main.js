import initializeLanguageSwitchers from './languageSwitchers.js';
import handleScroll from './scrollHandler.js';

document.addEventListener('DOMContentLoaded', function() {

  initializeLanguageSwitchers();

  const engLanguageImage = document.querySelector('.engLanguage');
  const cnLanguageImage = document.querySelector('.cnLanguage');
  const p2eTextEng = document.querySelector('.p2eTextEng');
  const p2eTextCn = document.querySelector('.p2eTextCn');
  const telegramChannelLink = document.getElementById('telegramChannelLink');

  engLanguageImage.src = 'assets/languageSwitcher/engSwitchOn.svg';
  cnLanguageImage.src = 'assets/languageSwitcher/cnSwitchOff.svg';
  p2eTextEng.classList.remove('hidden');
  p2eTextCn.classList.add('hidden');

  const userLang = navigator.language || navigator.userLanguage;
  console.log(`Detected language: ${userLang}`);
  let lang = 'en';

  if (userLang.startsWith('zh')) {
    lang = 'cn';
  }

  document.documentElement.lang = lang;

  if (lang === 'cn') {
    telegramChannelLink.href = 'https://t.me/DurianoChina';
  } else {
    telegramChannelLink.href = 'https://t.me/DurianoTeam';
  }
  
  const visibleElements = document.querySelectorAll('.visible');
  visibleElements.forEach(element => {
    element.classList.remove('visible');
  });

  window.scrollTo(0, 0);

});

document.addEventListener('scroll', function() {
  handleScroll();
});
