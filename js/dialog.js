(function () {
    let setup = document.querySelector('.setup');
    let setupForm = document.querySelector('.setup-wizard-form');
    let setupOpen = document.querySelector('.setup-open');
    let setupClose = document.querySelector('.setup-close');
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
    setupForm.addEventListener('submit', function () {
        closePopup();
    });
})();
