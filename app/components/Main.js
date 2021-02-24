export function Main() {
	const $Main = document.createElement('main');
	$Main.id = 'main';
	if (location.hash.includes('search')) {
		$Main.classList.remove('grid-fluid');
	} else {
		$Main.classList.add('grid-fluid');
	}
	return $Main;
}
