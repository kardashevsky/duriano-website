// js/languageSwitchers.js
export default function initializeLanguageSwitchers() {
  const languageSwitchers = document.querySelectorAll('.language-switcher');
  const p2eTextEng = document.querySelector('.p2eTextEng');
  const p2eTextCn = document.querySelector('.p2eTextCn');

  languageSwitchers.forEach(function(switcher) {
    switcher.addEventListener('click', function() {
      const lang = switcher.getAttribute('data-lang');
      const cnLanguageImage = document.querySelector('.cnLanguage');
      const engLanguageImage = document.querySelector('.engLanguage');

      if (lang === 'cn') {
        cnLanguageImage.src = 'assets/languageSwitcher/cnSwitchOn.svg';
        engLanguageImage.src = 'assets/languageSwitcher/engSwitchOff.svg';

        p2eTextEng.classList.add('hidden');
        p2eTextCn.classList.remove('hidden');
      } else if (lang === 'eng') {
        cnLanguageImage.src = 'assets/languageSwitcher/cnSwitchOff.svg';
        engLanguageImage.src = 'assets/languageSwitcher/engSwitchOn.svg';

        p2eTextEng.classList.remove('hidden');
        p2eTextCn.classList.add('hidden');
      }
    });
  });
}
