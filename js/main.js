const unreadMessages = document.querySelectorAll('.notification--unread');
const unreadCounter = document.querySelector('.notifications__header-counter');
const readButton = document.querySelector('.notifications__header-button');

if (unreadMessages.length) {
    unreadCounter.textContent = unreadMessages.length;
}

readButton.addEventListener('click', function() {
    unreadMessages.forEach(unreadMessage => unreadMessage.classList.remove('notification--unread'));
    unreadCounter.style.opacity = 0;
});