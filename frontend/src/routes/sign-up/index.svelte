<script>
	let email;
	let password;
	let name;

	import { isRegistered } from '$lib/Store/Login.js';
	import { toggleSignUp } from '$lib/Store/CommonFunc.js';
	import Model from '$lib/Helper/Model.svelte';
	import { goto } from '$app/navigation';

	async function register() {
		try {
			const res = await fetch('http://localhost:5000/api/register', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify({
					name,
					email,
					password
				}),
				headers: { 'Content-type': 'application/json' }
			});

			const data = await res.json();

			if (data.registered) {
				toggleSignUp();
				isRegistered.set({ registered: data.registered, data: data.data });
				goto('login');
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

<Model path="/">
	<div class="login">
		<form action="">
			<h2>Sign Up</h2>
			<label for="name"
				>Name
				<input type="text" name="name" bind:value={name} required placeholder="Name" /></label
			>
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
			<input type="submit" on:click|preventDefault={register} value="Register" />
		</form>
	</div>
</Model>
