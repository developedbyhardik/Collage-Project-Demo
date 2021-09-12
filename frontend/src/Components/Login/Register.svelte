<script>
	import {createEventDispatcher} from 'svelte'
	let email;
	let password;
	let name;
	const dispatch = createEventDispatcher();

	async function register() {
		try {
			const res = fetch('https://api.hardik.dev/api/register', {
			method: 'POST',
			credentials: "include",
			body: JSON.stringify({
				name,
				email,
				password
			}),
			headers: { 'Content-type': 'application/json' }
		});


		} catch (error) {
			console.error(error)
		}
		
	}
</script>

<div class="login">
	<form action="">
		<h3>Sign Up</h3>
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

<style>
	h3 {
		margin-bottom: 20px;
	}
</style>
