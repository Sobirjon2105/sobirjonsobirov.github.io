$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top
            },
            500,
            'linear'
        );
    });
    // Navbar Active Class
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a')
                    .eq(i)
                    .addClass('active');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = [
        '#about', '.jumbotron', '#blog', '#projects',
        '#general', '#early-life', '#education', '#future-goals'
    ];

    const navbar = document.querySelector('.navbar');
    navbar.classList.add('animate-on-load');

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elementsToAnimate.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            observer.observe(element);
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const okButton = document.getElementById('okButton');
    
    //Display the popup when the website loads
    overlay.style.display = 'flex';

    //Fundtion to close the popup
    function closePopup() {
        overlay.style.display = 'none';
    }

    //Event listener for the OK button
    okButton.addEventListener('click', closePopup);
});