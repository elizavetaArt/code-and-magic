let setupSimilar = document.querySelector('.setup-similar').classList.remove('hidden');
let setupOpen = document.querySelector('.setup-open');
let setup = document.querySelector('.setup');
let setupClose = document.querySelector('.setup-close');
let setupCoat = document.querySelector('.wizard-coat');
let wizardEyes = document.querySelector('.wizard-eyes');
let setupFireballWrap = document.querySelector('.setup-fireball-wrap');
let similarListElement = document.querySelector('.setup-similar-list');
let setupUserName = document.querySelector('.setup-user-name');
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

let onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
        closePopup();
    }
};
let openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
};
let closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
    openPopup();
});
setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        openPopup();
    }
});
setupClose.addEventListener('click', function () {
   closePopup();
});
setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        closePopup();
    }
});
setupCoat.addEventListener('click', function () {
   setupCoat.style.fill = randomElements(coatColor);
});
wizardEyes.addEventListener('click', function () {
   wizardEyes.style.fill = randomElements(eyesColor);
});
setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.background = randomElements(fireball);
});
setupUserName.addEventListener('onchange', function () {
});

let firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
let fireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

let randomElements = function (arr) {
    let randomElement = Math.floor(Math.random() * arr.length);
    for (let i = 0; i < arr.length; i++) {
        if (randomElement === i) {
            randomElement = arr[i];
        }
    }
    return randomElement;
};
let createBlocks = function () {
    for (let i = 0; i < 4; i++) {
        let wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = randomElements(firstName) + ' ' + randomElements(lastName);
        wizardElement.querySelector('.wizard-coat').style.fill = randomElements(coatColor);
        wizardElement.querySelector('.wizard-eyes').style.fill = randomElements(eyesColor);
        similarListElement.appendChild(wizardElement);
    }
};
createBlocks();
