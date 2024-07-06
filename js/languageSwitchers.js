// js/languageSwitchers.js
export default function initializeLanguageSwitchers() {
  const languageSwitchers = document.querySelectorAll('.language-switcher');
  
  const elements = {
    p2eText: {
      eng: document.querySelector('.p2eTextEng'),
      cn: document.querySelector('.p2eTextCn')
    },
    telegramChannelLink: document.getElementById('telegramChannelLink'),
    howToHeader: {
      eng: document.querySelector('.howToHeaderEng'),
      cn: document.querySelector('.howToHeaderCn')
    },
    trailerHeader: {
      eng: document.querySelector('.trailerHeaderEng'),
      cn: document.querySelector('.trailerHeaderCn')
    },
    roadmapHeader: {
      eng: document.querySelector('.roadmapHeaderEng'),
      cn: document.querySelector('.roadmapHeaderCn')
    },
    roadMapQ3Text: {
      eng: document.querySelector('.roadMapQ3TextEng'),
      cn: document.querySelector('.roadMapQ3TextCn')
    },
    roadMapQ4Text: {
      eng: document.querySelector('.roadMapQ4TextEng'),
      cn: document.querySelector('.roadMapQ4TextCn')
    },
    roadMapQ1Text: {
      eng: document.querySelector('.roadMapQ1TextEng'),
      cn: document.querySelector('.roadMapQ1TextCn')
    },
    cnLanguageImage: document.querySelector('.cnLanguage'),
    engLanguageImage: document.querySelector('.engLanguage')
  };

  languageSwitchers.forEach(function(switcher) {
    switcher.addEventListener('click', function() {
      const lang = switcher.getAttribute('data-lang');

      // Общая функция для скрытия/отображения элементов
      function toggleVisibility(lang) {
        const elementsToToggle = ['p2eText', 'howToHeader', 'trailerHeader', 'roadmapHeader', 'roadMapQ3Text', 'roadMapQ4Text', 'roadMapQ1Text'];
        elementsToToggle.forEach(element => {
          elements[element].eng.classList.toggle('hidden', lang !== 'eng');
          elements[element].cn.classList.toggle('hidden', lang !== 'cn');
        });
      }

      if (lang === 'cn') {
        elements.cnLanguageImage.src = 'assets/languageSwitcher/cnSwitchOn.svg';
        elements.engLanguageImage.src = 'assets/languageSwitcher/engSwitchOff.svg';
        elements.telegramChannelLink.href = 'https://t.me/DurianoChina';
        toggleVisibility('cn');
      } else if (lang === 'eng') {
        elements.cnLanguageImage.src = 'assets/languageSwitcher/cnSwitchOff.svg';
        elements.engLanguageImage.src = 'assets/languageSwitcher/engSwitchOn.svg';
        elements.telegramChannelLink.href = 'https://t.me/DurianoTeam';
        toggleVisibility('eng');
      }
    });
  });
}
