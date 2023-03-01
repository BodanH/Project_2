const popupLink = document.querySelector(".menu-list-item__link-contacts");

const popupName = popupLink.getAttribute('href').replace('#', '');
const currentPopup = document.getElementById(popupName);


if (popupLink) {
    popupLink.addEventListener("click", function (e) {
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }

const popupCloseIcon = document.querySelector('.widow-modal__close-link');

if (popupCloseIcon) {
    popupCloseIcon.addEventListener('click', function (e) {
        popupClose(currentPopup);
        e.preventDefault();
    });
}

function popupOpen(currentPopup) {
    if (currentPopup) {
        currentPopup.classList.add('open');
        document.querySelector("body").classList.add("lock");
        document.getElementById("modal-window").classList.add("lock");
    }
}
function popupClose(currentPopup) {
    currentPopup.classList.remove('open');
    document.querySelector("body").classList.remove("lock");
    document.getElementById("modal-window").classList.remove("lock");
}

