import { PostCard } from './PostCard.js';
import { ajax } from '../helpers/ajax.js';
import api from '../helpers/wp_api.js';
import { Post } from './Post.js';
import { SearchCard } from './SearchCard.js';

export async function Router() {
	const d = document;
	const w = window;
	const $main = d.getElementById('main');
	let html = '';
	let { hash } = location;
	if (!hash || hash === '#/') {
		await ajax({
			url: api.POSTS,
			cbSuccess: (posts) => {
				posts.forEach((post) => {
					html += PostCard(post);
					$main.innerHTML = html;
				});
			},
		});
	} else if (hash.includes('#/search')) {
		let query = localStorage.getItem('wpSearch');
		if (!query) return false;
		await ajax({
			url: `${api.SEARCH}${query}`,
			cbSuccess: (searchResult) => {
				let html = '';
				if (searchResult.length === 0) {
					console.log('vacio');
					html = `
						<p class="error">
							No existen resultados para la busqueda para el termino de <mark>${query}</mark>
						</p>
					`;
				} else {
					searchResult.forEach((result) => {
						html += SearchCard(result);
					});
				}
				$main.innerHTML = html;
			},
		});
	} else if (hash === '#/contacto') {
		$main.innerHTML = 'contact';
	} else {
		await ajax({
			url: `${api.POST}/${localStorage.getItem('postCard')}`,
			cbSuccess: (post) => {
				console.log(post);
				$main.innerHTML = Post(post);
			},
		});
	}
	d.querySelector('.loader').classList.add('none');
}
