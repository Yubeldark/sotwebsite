document.addEventListener('DOMContentLoaded', function() {
  // Objet contenant les traductions
  const translations = {
    'fr': {
      'title-quiparle': 'Qui parle ?',
      'title-quelbateau': 'Skin mystère',
      'title-quelilepirate': 'Blind test',
      'title-quellesarmes': 'Île zoomée'
    },
    'en': {
      'title-quiparle': 'Who\'s talking?',
      'title-quelbateau': 'Mystery skin',
      'title-quelilepirate': 'Blind test',
      'title-quellesarmes': 'Zoomed island'
    }
  };

  // Fonction pour changer la langue
  function changeLanguage(lang) {
    // Sauvegarde la préférence de langue
    localStorage.setItem('preferredLanguage', lang);
    
    // Met à jour l'UI pour montrer la langue active
    document.querySelectorAll('.language-option').forEach(el => {
      if (el.getAttribute('data-lang') === lang) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
    
    // Applique les traductions
    for (const [key, value] of Object.entries(translations[lang])) {
      const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
      elements.forEach(el => {
        el.textContent = value;
      });
    }
  }

  // Ajoute des écouteurs d'événements aux options de langue
  document.querySelectorAll('.language-option').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });

  // Utilise la langue préférée stockée ou la langue par défaut (français)
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
  changeLanguage(preferredLanguage);
});