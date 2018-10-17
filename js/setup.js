let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

let wizards = [
    { name: 'Пендальф', coatColor: 'red' },
    { name: 'Баба Яга', coatColor: 'blue' },
    { name: 'Кощей', coatColor: 'green' },
    { name: 'Водяной', coatColor: 'yellow' }
];

let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

for (let i = 0; i < wizards.length; i++) {
    let wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    similarListElement.appendChild(wizardElement);
}
