document.addEventListener('DOMContentLoaded', function() {
    console.log("Script is running");

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current navigation item
    const navLinks = document.querySelectorAll('.nav-link');
    const currentLocation = location.href;
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Video background responsive behavior
    const video = document.querySelector('.video-background');
    if (video) {
        const handleVideoResize = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const videoRatio = video.videoWidth / video.videoHeight;
            const windowRatio = windowWidth / windowHeight;

            if (windowRatio < videoRatio) {
                video.style.width = 'auto';
                video.style.height = '100%';
            } else {
                video.style.width = '100%';
                video.style.height = 'auto';
            }
        };

        window.addEventListener('resize', handleVideoResize);
        video.addEventListener('loadedmetadata', handleVideoResize);
    }

    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;
    const mainNav = document.querySelector('.main-nav');

    console.log("Menu Toggle:", menuToggle);
    console.log("Menu Icon:", menuIcon);
    console.log("Main Nav:", mainNav);

    if (menuToggle && menuIcon && mainNav) {
        menuToggle.addEventListener('click', function() {
            console.log("Menu toggle clicked");
            mainNav.classList.toggle('active');
            console.log("Main Nav classes:", mainNav.classList);

            if (mainNav.classList.contains('active')) {
                menuIcon.classList.remove('bi-list');
                menuIcon.classList.add('bi-x');
            } else {
                menuIcon.classList.remove('bi-x');
                menuIcon.classList.add('bi-list');
            }
            console.log("Menu Icon classes:", menuIcon.classList);
        });

        // Close menu when a link is clicked
        const menuLinks = mainNav.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuIcon.classList.remove('bi-x');
                menuIcon.classList.add('bi-list');
            });
        });
    } else {
        console.error("Menu toggle elements not found");
    }
});