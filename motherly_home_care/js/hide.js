document.getElementById('translateBtn').addEventListener('click', function() {
    const englishContent = document.getElementById('englishContent');
    const vietnameseContent = document.getElementById('vietnameseContent');

    if (englishContent.style.display === 'block') {
        // Switch to Vietnamese content
        englishContent.style.display = 'none';
        vietnameseContent.style.display = 'block';
    } else {
        // Switch to English content
        vietnameseContent.style.display = 'none';
        englishContent.style.display = 'block';
    }
});
