// js/main.js
import initializeLanguageSwitchers from './languageSwitchers.js';
import handleScroll from './scrollHandler.js';
import { loadYouTubePlayerAPI } from './youtubePlayer.js';

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

  // Проверяем на наличие языков Юго-Восточной Азии
  if (userLang.startsWith('zh')) {
    lang = 'cn'; // Китайский
  } else if (userLang.startsWith('vi')) {
    lang = 'vi'; // Вьетнамский
  } else if (userLang.startsWith('th')) {
    lang = 'th'; // Тайский
  } else if (userLang.startsWith('id')) {
    lang = 'id'; // Индонезийский
  } else if (userLang.startsWith('ms')) {
    lang = 'ms'; // Малайский
  } else if (userLang.startsWith('tl')) {
    lang = 'tl'; // Тагальский (Филиппинский)
  }

  // Установка языкового атрибута для HTML
  document.documentElement.lang = lang;

  // Устанавливаем ссылку на телеграм-канал в зависимости от языка
  if (lang === 'cn') {
    telegramChannelLink.href = 'https://t.me/duriano_cn';
  } else {
    telegramChannelLink.href = 'https://t.me/duriano_eng';
  }
  
  // Загрузка YouTube Player API при загрузке страницы
  loadYouTubePlayerAPI();
});

document.addEventListener('scroll', function() {
  handleScroll();
});
