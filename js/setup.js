'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var generateName = function (name, surname) {
  return name[Math.round(Math.random() * 8)] + ' ' + surname[Math.round(Math.random() * 8)];
};
var generateColor = function (color) {
  return color[Math.round(Math.random() * 6)];
};
var generateEyesColor = function (color) {
  return color[Math.round(Math.random() * 5)];
};
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColors;
  return wizardElement;
};

var wizards = [
  {
    name: generateName(names, surnames),
    coatColor: generateColor(coatColors),
    eyesColors: generateEyesColor(eyesColors)
  },
  {
    name: generateName(names, surnames),
    coatColor: generateColor(coatColors),
    eyesColors: generateEyesColor(eyesColors)
  },
  {
    name: generateName(names, surnames),
    coatColor: generateColor(coatColors),
    eyesColors: generateEyesColor(eyesColors)
  },
  {
    name: generateName(names, surnames),
    coatColor: generateColor(coatColors),
    eyesColors: generateEyesColor(eyesColors)
  }
];

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {

  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
