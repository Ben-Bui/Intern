document.getElementById('translateBtn').addEventListener('click', function() {
    const englishContent = document.getElementById('englishContent');
    const vietnameseContent = document.getElementById('vietnameseContent');

    if (englishContent.style.display === 'block' || englishContent.style.display === '') {
        // Switch to Vietnamese content
        englishContent.style.display = 'none';
        vietnameseContent.style.display = 'block';
        this.textContent = 'English';
    } else {
        // Switch to English content
        vietnameseContent.style.display = 'none';
        englishContent.style.display = 'block';
        this.textContent = 'Tiếng Việt';
    }
});
