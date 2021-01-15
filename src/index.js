import Tooltip from './ui_lib/tooltip';
import TooltipKeep from './ui_lib/tooltipKeep';
import TooltipNext from './ui_lib/tooltipNext';
import Dropdown from './ui_lib/dropdown';
import Tabs from './ui_lib/tabs';
import Snackbar from './ui_lib/snackbar';

// create tooltips
const tooltip = new Tooltip(document.querySelector('.tooltip'));
const tooltipKeep = new TooltipKeep(document.querySelector('.tooltipKeep'));
const tooltipNext = new TooltipNext(document.querySelector('.tooltipNext'));
tooltip.init();
tooltipKeep.init();
tooltipNext.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('hope you clicked me using selenium :)');
});

// tiny signature
console.log('© 2020 stern9');