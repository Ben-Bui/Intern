document.getElementById('translateBtn').addEventListener('click', function() {
    const englishContentMain = document.getElementById('englishContent');
    const vietnameseContentMain = document.getElementById('vietnameseContent');
    const englishContentFooter = document.getElementById('englishContentFooter');
    const vietnameseContentFooter = document.getElementById('vietnameseContentFooter');

    if (englishContentMain.style.display === 'block' || englishContentMain.style.display === '') {
        // Switch to Vietnamese content
        englishContentMain.style.display = 'none';
        vietnameseContentMain.style.display = 'block';
        englishContentFooter.style.display = 'none';
        vietnameseContentFooter.style.display = 'block';
        this.textContent = 'English';
    } else {
        // Switch to English content
        vietnameseContentMain.style.display = 'none';
        englishContentMain.style.display = 'block';
        vietnameseContentFooter.style.display = 'none';
        englishContentFooter.style.display = 'block';
        this.textContent = 'Tiếng Việt';
    }
});
