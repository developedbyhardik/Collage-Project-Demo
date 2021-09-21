<script>
import { goto } from '$app/navigation';

	import { isLogIn } from '$lib/Store/Login';

	import { fly } from 'svelte/transition';

	export let name;

	async function logout() {
		try {
			const res = await fetch('http://localhost:5000/api/logout', {
				method: 'POST',
				credentials: 'include'
			});

			const data = await res.json();
			if (data.logout) {
				isLogIn.set({ login: false, data: {} });
				goto('/')
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

<div class="userInfo" transition:fly={{ y: 10 }}>
	<h4 class="name">
		{name}
	</h4>
	<div class="logout" on:click={logout}>Logout</div>
</div>

<style>
	.userInfo {
		background-color: white;
		position: absolute;
		top: 10vh;
		right: 10px;
		padding: 30px;
		border-radius: 10px;
		border: 2px solid #ccc;
	}
	.logout {
		color: red;
		cursor: pointer;
	}
</style>
