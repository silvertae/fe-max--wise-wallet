const form = document.querySelector('form');
const dateInput = document.querySelector('#inputDate');

const getToday = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = `0${date.getMonth() + 1}`.slice(-2);
	const day = `0${date.getDate()}`.slice(-2);

	return year + month + day;
};

dateInput.value = getToday();

const dateRegEx = /^\d{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/;
const validateWithRegex = (input, regex) => {
	form.addEventListener('change', e => {
		if (regex.test(input.value)) {
			input.style.border = '2px solid #80ed99';
			input.style.borderRadius = '6px';
			input.style.boxShadow = '0 0 8px #80ed99';
		} else {
			e.preventDefault();
			input.style.border = '2px solid #ef476f';
			input.style.borderRadius = '6px';
			input.style.boxShadow = '0 0 8px #ef476f';
		}
	});
};

validateWithRegex(dateInput, dateRegEx);
