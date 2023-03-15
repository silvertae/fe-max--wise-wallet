import { initInputDate } from './inputbar/initInputDate.js';
import './inputbar/dropdown.js';
import './inputbar/formValidation.js';
import './inputbar/inputPrice.js';
import './inputbar/switchCategory.js';
import './header/monthYear.js';

const init = () => {
	initInputDate();
};

window.addEventListener('load', init);
