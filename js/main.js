import initializeLanguageSwitchers from './languageSwitchers.js';
import handleScroll from './scrollHandler.js';

document.addEventListener('DOMContentLoaded', function() {
  // Инициализируем переключатели языков
  initializeLanguageSwitchers();

  // Устанавливаем английский язык по умолчанию
  const engLanguageImage = document.querySelector('.engLanguage');
  const cnLanguageImage = document.querySelector('.cnLanguage');
  const p2eTextEng = document.querySelector('.p2eTextEng');
  const p2eTextCn = document.querySelector('.p2eTextCn');

  engLanguageImage.src = 'assets/languageSwitcher/engSwitchOn.svg';
  cnLanguageImage.src = 'assets/languageSwitcher/cnSwitchOff.svg';
  p2eTextEng.classList.remove('hidden');
  p2eTextCn.classList.add('hidden');
});

document.addEventListener('scroll', function() {
  handleScroll();
});
