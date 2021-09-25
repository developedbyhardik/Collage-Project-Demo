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

		isLogIn.set({ login: data.login, data: data.data });

		if (data.login) {
			goto('/internship');
		}
	})();
</script>

<Home />
