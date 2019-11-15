'use strict';
(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var load = window.backend.load;
  var getContent = window.render.getContent;

  var getRandom = function (number) {
    return Math.round(Math.random() * number);
  };
  var generateFireBall = function () {
    return FIREBALL_COLORS[getRandom(4)];
  };

  var generateColor = function (color) {
    return color[getRandom(5)];
  };
  var generateEyesColor = function (color) {
    return color[getRandom(4)];
  };
  var wizards = [];

  var succesHandler = function (data) {
    wizards = data;
    updateWizards();
  };
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank = rank + 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank = rank + 1;
    }
    return rank;
  };


  var namesComp = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };
  var updateWizards = function () {
    var sort = wizards.sort(function (left, right) {
      var rankdif = getRank(right) - getRank(left);
      if (rankdif === 0) {
        rankdif = namesComp(left.name, right.name);
      }
      return rankdif;
    });
    getContent(sort);
    // var sameCoatEyesWizards = wizards.filter(function (it) {
    //   return it.colorCoat === coatColor && it.colorEyes === eyesColor;
    // });
    //
    // var sameCoatWizards = wizards.filter(function (it) {
    //   return it.colorCoat === coatColor;
    // });
    // var sameEyesWizards = wizards.filter(function (it) {
    //   return it.colorEyes === eyesColor;
    // });
    // var filteredWizards = sameCoatEyesWizards
    //   .concat(sameCoatWizards)
    //   .concat(sameEyesWizards)
    //   .concat(wizards);
    // var uniqueWizards = filteredWizards.filter(function (it, i) {
    //     return filteredWizards.indexOf(it) === i;
    // });
    // getContent(uniqueWizards);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };


  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardInput = document.querySelectorAll('.setup-wizard-appearance input');
  var wizardFireBall = document.querySelector('.setup-fireball-wrap');
  var inputCoat = wizardInput[0];
  var inputEyes = wizardInput[1];
  var fireBallInput = wizardFireBall.querySelector('input');
  var last;

  var coatColor;
  wizardCoat.addEventListener('click', function () {
    var newColor = generateColor(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    inputCoat.value = newColor;
    coatColor = newColor;


    if (last) {
      window.clearTimeout(last);
    }
    last = window.setTimeout(updateWizards,300);
  });
  var eyesColor;
  wizardEyes.addEventListener('click', function () {
    var newColor = generateEyesColor(EYES_COLORS);
    wizardEyes.style.fill = newColor;
    inputEyes.value = newColor;
    eyesColor = newColor;


    if (last) {
      window.clearTimeout(last);
    }
    last = window.setTimeout(updateWizards,300);
  });


  wizardFireBall.addEventListener('click', function () {
    var newColor = generateFireBall();
    wizardFireBall.style.backgroundColor = newColor;
    fireBallInput.value = newColor;
    coatColor = newColor;
  });

  load(succesHandler, errorHandler);

})();
