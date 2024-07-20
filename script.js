// Add smooth scrolling to all links
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