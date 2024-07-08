// js/main.js
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
  const telegramChannelLink = document.getElementById('telegramChannelLink');

  engLanguageImage.src = 'assets/languageSwitcher/engSwitchOn.svg';
  cnLanguageImage.src = 'assets/languageSwitcher/cnSwitchOff.svg';
  p2eTextEng.classList.remove('hidden');
  p2eTextCn.classList.add('hidden');

  // Определяем язык на основе предпочтений пользователя
  const userLang = navigator.language || navigator.userLanguage;
  console.log(`Detected language: ${userLang}`); 
  let lang = 'en'; // По умолчанию английский

  // Проверяем на наличие Китайского языка
  if (userLang.startsWith('zh')) {
    lang = 'cn';
  }

  // Установка языкового атрибута для HTML
  document.documentElement.lang = lang;

  // Устанавливаем ссылку на телеграм-канал в зависимости от языка
  if (lang === 'cn') {
    telegramChannelLink.href = 'https://t.me/DurianoChina';
  } else {
    telegramChannelLink.href = 'https://t.me/DurianoTeam';
  }
  
  // Сброс состояния всех элементов
  const visibleElements = document.querySelectorAll('.visible');
  visibleElements.forEach(element => {
    element.classList.remove('visible');
  });

  // Прокручиваем страницу наверх при загрузке
  window.scrollTo(0, 0);

});

document.addEventListener('scroll', function() {
  handleScroll();
});
