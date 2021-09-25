<script>
	import { goto } from '$app/navigation';

	import Grid from '$lib/Helper/Grid.svelte';
	import Card from '$lib/Helper/Card.svelte';
	import { isLogIn } from '$lib/Store/Login.js';
	import { alert } from '$lib/Store/massage.js';
	import Spinner from '$lib/Helper/Spinner.svelte';

	let internships = []

	async function getdata() {
		const res = await fetch('http://localhost:5000/test', {
			method: 'GET',
			credentials: 'include'
		});
		const data = await res.json();

		return data;
	}

	(async () => {
		if (!$isLogIn.login) {
			const data = await getdata();

			if (!data.login) {
				alert.set({ text: 'You must need to login first!', isActive: true, color: '#ff4040' });
				goto('/login');
			}
			isLogIn.set({ login: data.login, data: data.data });
		}
		const res = await fetch('http://localhost:5000/api/get-internship', {
			method: 'POST',
			credentials: 'include'
		});
		const result = await res.json();
		internships = result.result

	})();
</script>

{#if $isLogIn.login}
	<Grid heading="Internships">
		{#each internships as internship}
			<Card {internship} />
		{/each}
		
	</Grid>
{:else}
	<Spinner />
{/if}
