document.getElementById('translateBtn').addEventListener('click', function() {
    const englishContentMain = document.getElementById('englishContent');
    const vietnameseContentMain = document.getElementById('vietnameseContent');
    const englishContentFooter = document.getElementById('englishContentFooter');
    const vietnameseContentFooter = document.getElementById('vietnameseContentFooter');
    const englishNav = document.getElementById('englishNav');
    const vietnameseNav = document.getElementById('vietnameseNav');

    if (englishContentMain.style.display === 'block' || englishContentMain.style.display === '') {
        // Switch to Vietnamese content
        englishContentMain.style.display = 'none';
        vietnameseContentMain.style.display = 'block';
        englishContentFooter.style.display = 'none';
        vietnameseContentFooter.style.display = 'block';
        englishNav.style.display = 'none';
        vietnameseNav.style.display = 'block';
        this.textContent = 'English';
        englishContents.forEach(content => {
            if (content.style.display === 'block' || content.style.display === '') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    } else {
        // Switch to English content
        vietnameseContentMain.style.display = 'none';
        englishContentMain.style.display = 'block';
        vietnameseContentFooter.style.display = 'none';
        englishContentFooter.style.display = 'block';
        vietnameseNav.style.display = 'none';
        englishNav.style.display = 'block';
        this.textContent = 'Tiếng Việt';
        vietnameseContents.forEach(content => {
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    
        if (this.textContent === 'Tiếng Việt') {
            this.textContent = 'English';
        } else {
            this.textContent = 'Tiếng Việt';
        }
    }
});
