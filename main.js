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
    const navMenu = document.getElementById('nav-menu');
    const brandGroup = document.getElementById('brand-group');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelectorAll('#nav-menu a');

    if (menuToggle && navMenu && brandGroup && hamburgerIcon && closeIcon) {
        
        const resetNavbarNormal = () => {
            navMenu.classList.add('hidden');
            brandGroup.classList.remove('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        };

        const toggleMenu = () => {
            const isOpen = !navMenu.classList.contains('hidden') && window.innerWidth < 768;
            
            if (isOpen) {
                resetNavbarNormal();
            } else {
                brandGroup.classList.add('hidden');
                navMenu.classList.remove('hidden');
                navMenu.classList.add('flex');
                hamburgerIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        };

        menuToggle.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    resetNavbarNormal();
                }
            });
        });
        
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                navMenu.classList.remove('hidden');
                brandGroup.classList.remove('hidden');
            } else if (closeIcon.classList.contains('hidden')) {
                navMenu.classList.add('hidden');
            }
        });
    }
});
