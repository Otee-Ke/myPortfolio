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
