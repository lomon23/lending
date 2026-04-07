const observerOptions = {
    root: null,
    threshold: 0.5 // Спрацьовує, коли видно менше 50%
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.add('fade-out');
        }
    });
}, observerOptions);

document.querySelectorAll('.item').forEach(item => {
    observer.observe(item);
});