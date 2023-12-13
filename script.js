document.addEventListener("DOMContentLoaded", function(e) {
    document.body.classList.remove('fade');
});
var navbar = document.querySelector('.navbar');
                var content = document.querySelector('.content');
            
                window.addEventListener('scroll', function() {
                    if (window.scrollY > navbar.offsetTop) {
                        navbar.classList.add('fixed');
                        content.style.marginTop = navbar.offsetHeight + 'px';
                    } else {
                        navbar.classList.remove('fixed');
                        content.style.marginTop = '0';
                    }
                });