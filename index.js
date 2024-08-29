document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider img');
    const prevButton = document.querySelector('.slider-nav.prev');
    const nextButton = document.querySelector('.slider-nav.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});

document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = 
    document.getElementById('name').value;
    var email =
    document.getElementById('email').value;
    var message = 
    document.getElementById('message').value;

    var mailtolink =
    "mailto:atomphotography8@gmail.com"
                        +"?subject="+
    encodeURIComponent("New contact form submission form" + name)
                        +"body="+
    encodeURIComponent("Name:" + name + "\nEmail" + email + "\n\nMessage:\n" + message)
    window.location.href = mailtolink
})