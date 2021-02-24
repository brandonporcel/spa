export async function ajax(props) {
	let { url, cbSuccess } = props;
	await fetch(url)
		.then((res) => (res.ok ? res.json() : Promise.reject(res)))
		.then((json) => cbSuccess(json))
		.catch((err) => {
			let message = err.statusText || 'ocurrio unn error al acceder a la api';

			document.getElementById('main').innerHTML = `
            <div class='error'>
            <p> errr ${err.status}: ${message} </p>
            </div>
            `;
			document.querySelector('.loader').classList.add('none');
			console.log(err);
		});
}
