// modal burger
const iconMenu = document.querySelector('.burger__icon');
const menuBody = document.querySelector('.header-burger__content');
const menuClose = document.querySelector('.header-burger__close-icon');


if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.add('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.add('active');
        
    })
}
if (menuClose) {
    menuClose.addEventListener("click", function (e) {
        document.body.classList.remove('lock');
        iconMenu.classList.add('active');
        menuBody.classList.remove('active');
        
    })
}
// modal window burger

const Link = document.querySelector(".menu-list-burger-link-contacts");
const linkName = Link.getAttribute('href').replace('#', '');
const currentLink = document.getElementById(linkName);
const CloseIcon = document.querySelector('.widow-modal__close-link');

Link.addEventListener("click", function (e) {
    modalOpen(currentLink);
    e.preventDefault();
})

function modalOpen(currentLink) {
    if (currentLink) {
        currentLink.classList.add('open');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
        document.body.classList.add('lock');   
        document.getElementById("modal-window").classList.add("lock");
    } 
}

CloseIcon.addEventListener("click", function (e) {
    modalClose(currentLink);
    e.preventDefault();
})

function modalClose(currentLink) {
    currentLink.classList.remove('open');
    document.body.classList.remove('lock');
    document.getElementById("modal-window").classList.remove("lock");
}