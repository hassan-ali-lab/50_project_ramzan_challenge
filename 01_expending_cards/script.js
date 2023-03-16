const panels = document.querySelectorAll('.panel');
for (let panel of panels) {
    panel.addEventListener('click', function () {
        panels.forEach(panel => panel.classList.remove('active'));
        this.classList.add('active');
    });
}