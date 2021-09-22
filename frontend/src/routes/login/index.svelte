<script>
	let email;
	let password;

	import { isLogIn } from '$lib/Store/Login.js';
	import { toggleLogIn } from '$lib/Store/CommonFunc.js';
	import Model from '$lib/Helper/Model.svelte';
	import { goto } from '$app/navigation';
	import { alert } from '$lib/Store/massage.js';

	async function register() {
		try {
			const res = await fetch('http://localhost:5000/api/authorize', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify({
					email,
					password
				}),
				headers: { 'Content-type': 'application/json' }
			});

			const data = await res.json();

			if (data.login) {
				toggleLogIn();
				isLogIn.set({ login: data.login, data: data.data });
				goto('/internship');
			}
			alert.set({ text: data.text, isActive: true, color: data.color });
		} catch (error) {
			console.error(error);
		}
	}
</script>

<Model path="/">
	<div class="login">
		<form action="">
			<h2>Log In</h2>
			<label for="email"
				>Email
				<input type="text" name="email" bind:value={email} required placeholder="Email" /></label
			>
			<label for="password"
				>Password
				<input
					type="password"
					name="password"
					bind:value={password}
					required
					placeholder="Password"
				/></label
			>
			<input type="submit" value="Log In" on:click|preventDefault={register} />
		</form>
	</div>
</Model>
