document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        if (index >= 0) navLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);

    // Smooth Scrolling
    navLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
