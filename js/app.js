import { Filter } from './filter/filter';

const onload = () => {
	const filter = new Filter;
	filter.generateList();
};

window.onload = onload;
