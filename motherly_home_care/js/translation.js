// js/hide.js

document.getElementById('translateBtn').addEventListener('click', function () {
    toggleLanguage();
});

document.getElementById('translateBtnDrawer').addEventListener('click', function () {
    toggleLanguage();
});

function toggleLanguage() {
    var englishNav = document.getElementById('englishContentNav');
    var vietnameseNav = document.getElementById('vietnameseContentNav');
    var translateBtn = document.getElementById('translateBtn');
    var translateBtnDrawer = document.getElementById('translateBtnDrawer');

    if (englishNav.style.display === 'none') {
        englishNav.style.display = 'block';
        vietnameseNav.style.display = 'none';
        translateBtn.innerText = 'Tiếng Việt';
        translateBtnDrawer.innerText = 'Tiếng Việt';
    } else {
        englishNav.style.display = 'none';
        vietnameseNav.style.display = 'block';
        translateBtn.innerText = 'English';
        translateBtnDrawer.innerText = 'English';
    }
}
