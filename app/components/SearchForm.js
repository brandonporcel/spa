export function SearchForm() {
	const d = document;
	const $form = d.createElement('form');
	const $input = d.createElement('input');

	$form.classList.add('search-form');
	$input.name = 'search';
	$input.type = 'search';
	$input.placeholder = 'buscar..';
	$input.autocomplete = 'off';

	$form.appendChild($input);

	if (location.hash.includes('#/search')) {
		$input.value = localStorage.getItem('wpSearch');
	}
	d.addEventListener('search', (e) => {
		if (!e.target.matches('input[type="search"')) return false;

		if ($form.search.value === '') {
			localStorage.removeItem('wpSearch');
		}
	});
	d.addEventListener('submit', (e) => {
		if (!e.target.matches('.search-form')) return false;
		e.preventDefault();
		localStorage.setItem('wpSearch', $form.search.value);
		location.hash = `#/search?search=${$form.search.value}`;
	});
	return $form;
}
