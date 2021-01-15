import './styles/tooltip.css'

class TooltipNext {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init() {
        const tipNext = document.createElement('div');
        tipNext.classList.add('tipNext');
        tipNext.textContent = this.message;
        this.element.appendChild(tipNext);

        this.element.addEventListener('mouseenter', () => {
            tipNext.classList.add('active');
        });

        this.element.addEventListener('mouseleave', () => {
            tipNext.classList.remove('active');
        })
    }
}

export { TooltipNext as default };