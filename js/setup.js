'use strict';

var unit = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
  similarListElement.appendChild(fragment);
};
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
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var generateWizards = function (length) {
  var array = [];
  for (var i = 0; i < length; i++) {
    var wizard = {
      name: generateName(names, surnames),
      coatColor: generateColor(coatColors),
      eyesColor: generateEyesColor(eyesColors)
    };
    array.push(wizard);
  }
  return array;
};

var wizards = generateWizards(4);

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {

  fragment.appendChild(renderWizard(wizards[i]));
}
unit();
