import './style.css';

const initProjectSlider = () => {
    const track = document.querySelector('#project-track');
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');

    console.log("Slider Setup Verification:", { track, prevBtn, nextBtn });

    if (!track || !prevBtn || !nextBtn) {
        requestAnimationFrame(initProjectSlider);
        return;
    }
    const scrollAmount = 404;
    prevBtn.onclick = (e) => {
        e.preventDefault();
        console.log("Left Slider Triggered Success ◀");
        track.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    };
    nextBtn.onclick = (e) => {
        e.preventDefault();
        console.log("Right Slider Triggered Success ▶");
        track.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    };
};
initProjectSlider();

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (menuToggle && mobileMenu && hamburgerIcon && closeIcon) {
        const toggleMenu = () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = '';
            } else {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                hamburgerIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        };

        menuToggle.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = '';
            });
        });
    }
});

