// js/youtubePlayer.js

// Загрузка YouTube Player API
export function loadYouTubePlayerAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Глобальная переменная для хранения объекта плеера
let player;

// Функция инициализации и настройки плеера
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Функция, которая вызывается при готовности плеера
function onPlayerReady(event) {
  // Начать воспроизведение видео
  event.target.playVideo();
}

// Функция, которая вызывается при изменении состояния плеера
function onPlayerStateChange(event) {
  // Вы можете добавить обработчики состояния, если необходимо
}
