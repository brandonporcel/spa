export function Loader() {
	const $loader = document.createElement('img');
	$loader.src = 'app/assets/loader.svg';
	$loader.alt = 'loader';
	$loader.classList.add('loader');
	return $loader;
}
