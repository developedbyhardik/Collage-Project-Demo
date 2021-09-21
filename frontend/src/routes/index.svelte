<script>
	import { goto } from '$app/navigation';

	import Home from '$lib/Home/Home.svelte';
	import { isLogIn } from '$lib/Store/Login.js';

	(async () => {
		const res = await fetch('http://localhost:5000/test', {
			method: 'GET',
			credentials: 'include'
		});
		const data = await res.json();
		console.log('data:', data)

		isLogIn.set({ login: data.login, data: data.data });
		console.log($isLogIn);
		if (data.login) {
			goto('/internship'); 
		}
	})();
</script>

<Home />
