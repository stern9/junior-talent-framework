import './styles/tooltip.css'

class TooltipKeep {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init() {
        const tipKeep = document.createElement('div');
        tipKeep.classList.add('tipKeep');
        tipKeep.textContent = this.message;
        this.element.appendChild(tipKeep);

        this.element.addEventListener('mouseenter', () => {
            tipKeep.classList.add('active');
        });

        this.element.addEventListener('mouseleave', () => {
            tipKeep.classList.remove('active');
        })
    }
}

export { TooltipKeep as default };