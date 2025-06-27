document.addEventListener('DOMContentLoaded', function() {
    // tampilan hamburger icon (khusus mobile)
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '☰';
    document.querySelector('.sidebar').prepend(hamburger);
    
    hamburger.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });
    
    // ini bagian animasi untuk mempersmooth animasi bagian herf anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // ini bagian animasi saat scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage) {
            heroImage.style.transform = translateY(${scrollPosition * 0.2}px);
        }
    });
});