'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var unit = function (userDialog, setupSimilar) {
  userDialog.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
  similarListElement.appendChild(content);
};
var getRandom = function (number) {
  return Math.round(Math.random() * number);
};

var generateFireBall = function (color) {
  return color[getRandom(4)];
};

var generateName = function (name, surname) {
  return name[getRandom(7)] + ' ' + surname[getRandom(7)];
};
var generateColor = function (color) {
  return color[getRandom(5)];
};
var generateEyesColor = function (color) {
  return color[getRandom(4)];
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

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target.nodeName !== 'INPUT') {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardInput = document.querySelectorAll('.setup-wizard-appearance input');
var wizardFireBall = document.querySelector('.setup-fireball-wrap');
var fireBallInput = wizardFireBall.querySelector('input');
var inputCoat = wizardInput[0];
var inputEyes = wizardInput[1];

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = generateColor(COAT_COLORS);
  inputCoat.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = generateEyesColor(EYES_COLORS);
  inputEyes.value = wizardEyes.style.fill;
});

wizardFireBall.addEventListener('click', function () {
  wizardFireBall.style.backgroundColor = generateFireBall(FIREBALL_COLORS);
  fireBallInput.value = wizardFireBall.style.backgroundColor;
});

