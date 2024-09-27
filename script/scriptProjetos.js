document.querySelectorAll('.project-box').forEach(box => {
    let timer;

    box.addEventListener('mouseenter', () => {
        timer = setTimeout(() => {
            box.classList.add('flipped');
        }, 1000);
    });

    box.addEventListener('mouseleave', () => {
        clearTimeout(timer);
        box.classList.remove('flipped');
    });
});
