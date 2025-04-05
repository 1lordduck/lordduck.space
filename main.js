const tooltips = document.querySelectorAll('.minilogo');

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

tooltips.forEach(function(minilogo) {
    minilogo.addEventListener('mouseenter', function() {
        tooltip.textContent = minilogo.getAttribute('data-tooltip');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    minilogo.addEventListener('mousemove', function(e) {
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        const offset = 10;
        tooltip.style.top = `${e.clientY - tooltipHeight - offset}px`;
        tooltip.style.left = `${e.clientX - tooltipWidth / 2}px`;
    });

    minilogo.addEventListener('mouseleave', function() {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});