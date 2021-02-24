export function PostCard(props) {
	let { slug, id, date, title, _embedded } = props;
	const dateFormat = new Date(date).toLocaleString();
	const urlPoster = _embedded['wp:featuredmedia']
		? _embedded['wp:featuredmedia'][0].source_url
		: 'https://placeimg.com/100/100/any';
	document.addEventListener('click', (e) => {
		if (!e.target.matches('.post-card a')) return false;
		localStorage.setItem('postCard', e.target.dataset.id);
	});
	return `
	<article class="post-card">
		<img src="${urlPoster} " alt="${title.rendered}" />
		<h2>${title.rendered} </h2>
		<p>
			<time datetime="${dateFormat}">${dateFormat}</time>
			<a href="#/${slug}" data-id=${id} >Ver publiucacion</a>
		</p>
	</article>
	`;
}
