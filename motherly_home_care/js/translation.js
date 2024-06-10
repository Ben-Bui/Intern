document.getElementById('translateBtn').addEventListener('click', function() {
    const englishContent = document.getElementById('englishContent');
    const vietnameseContent = document.getElementById('vietnameseContent');
    const englishContentFooter = document.getElementById('englishContentFooter');
    const vietnameseContentFooter = document.getElementById('vietnameseContentFooter');
    const englishNav = document.getElementById('englishNav');
    const vietnameseNav = document.getElementById('vietnameseNav');

    // Toggle main content
    toggleContent(englishContent);
    toggleContent(vietnameseContent);

    // Toggle footer content
    toggleContent(englishContentFooter);
    toggleContent(vietnameseContentFooter);

    // Toggle nav content
    toggleContent(englishNav);
    toggleContent(vietnameseNav);

    // Toggle button text
    this.textContent = (this.textContent === 'Tiếng Việt') ? 'English' : 'Tiếng Việt';
    
    // Toggle service-specific content
    toggleServiceContent();
});

function toggleContent(element) {
    if (element.style.display === 'block' || element.style.display === '') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}


function toggleServiceContent() {
    const englishServiceContent = document.getElementById('englishServiceContent');
    const vietnameseServiceContent = document.getElementById('vietnameseServiceContent');

    toggleContent(englishServiceContent);
    toggleContent(vietnameseServiceContent);
}
