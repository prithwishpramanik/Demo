const counters = document.querySelectorAll('.stats');
const speed = 200;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const stats = parseInt(counter.innerText);
        const increment = Math.trunc(target / speed);

        if (stats < target) {
            counter.innerText = stats + increment;
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

