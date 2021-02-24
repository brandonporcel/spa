export function SearchCard(props) {
	let { title, id, _embedded } = props;
	let slug = _embedded.self[0].slug;

	return `
    <article class="post-card">
        <h2> ${title} </h2>
        <p>
            <a href=#/${slug}>VER PUBLICACION</a>
        </p>
    </article>
    `;
}
