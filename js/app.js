import { Filter } from './filter/filter';

const onload = () => {
	const filter = new Filter;
};

const getFilterValue = () => {
	const filtersValue = document.getElementById('filters').value;
	const searchValue = document.getElementById('search').value;
	alert(`Filter value = ${filtersValue} \nField value = ${searchValue}`);
};

window.onload = onload;
document.getElementById('filters-form').onsubmit = getFilterValue;
