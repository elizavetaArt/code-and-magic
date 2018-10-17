document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

let firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

let randomElements = function (arr) {
    let randomElement = Math.floor(Math.random() * arr.length);
    for (let i = 0; i < arr.length; i++) {
        if (randomElement === i) {
            randomElement = arr[i];
        }
    }
    return randomElement;
};
let createDOMElements = function () {
    let wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = randomElements(firstName) + ' ' + randomElements(lastName);
    wizardElement.querySelector('.wizard-coat').style.fill = randomElements(coatColor);
    wizardElement.querySelector('.wizard-eyes').style.fill = randomElements(eyesColor);
    similarListElement.appendChild(wizardElement);
};
let createBlocks = function () {
    for (let i = 0; i < 4; i++) {
        createDOMElements();
    }
};
createBlocks();