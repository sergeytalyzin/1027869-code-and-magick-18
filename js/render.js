'use strict';
(function () {

  var renderWizard = function (wizard, teamplate) {
    var wizardElement = teamplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var getContent = function (array) {
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(array[i], similarWizardTemplate));
    }
    similarListElement.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
    userDialog.classList.remove('hidden');
  };
  var userDialog = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  window.render = {
    getContent: getContent
  };
})();
