'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


var unit = function (userDialog, setupSimilar) {
  userDialog.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
  similarListElement.appendChild(content);
};
var generateName = function (name, surname) {
  return name[Math.round(Math.random() * 8)] + ' ' + surname[Math.round(Math.random() * 8)];
};
var generateColor = function (color) {
  return color[Math.round(Math.random() * 6)];
};
var generateEyesColor = function (color) {
  return color[Math.round(Math.random() * 5)];
};
var renderWizard = function (wizard, teamplate) {
  var wizardElement = teamplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var generateWizards = function (length) {
  var array = [];
  for (var i = 0; i < length; i++) {
    var wizard = {
      name: generateName(NAMES, SURNAMES),
      coatColor: generateColor(COAT_COLORS),
      eyesColor: generateEyesColor(EYES_COLORS)
    };
    array.push(wizard);
  }
  return array;
};


var getContent = function (array) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(renderWizard(array[i], similarWizardTemplate));
  }
  return fragment;
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = generateWizards(4);
var content = getContent(wizards);

var similarListElement = document.querySelector('.setup-similar-list');
var userDialog = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');

unit(userDialog, setupSimilar);
