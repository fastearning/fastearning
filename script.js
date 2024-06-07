let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Initial call to display the first slide
showSlide(slideIndex);

// Toggle menu function
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// FAQ Toggle
document.querySelectorAll('.faq h3').forEach(faqHeader => {
    faqHeader.addEventListener('click', () => {
        const answer = faqHeader.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});

function downloadApp() {
    window.location.href = "https://t.me/FastEarningNews/70";// Replace with your download URL
}