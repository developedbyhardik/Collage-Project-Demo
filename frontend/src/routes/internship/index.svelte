<script>
	import { goto } from '$app/navigation';

	import Internship from '$lib/Interniship/Internship.svelte';
	import { isLogIn } from '$lib/Store/Login.js';
	import { alert } from '$lib/Store/massage.js';
	import Spinner from '$lib/Helper/Spinner.svelte';

	if (!$isLogIn.login) {
		alert.set({ text: 'You must need to login first!', isActive: true, color: '#ff4040' });
		goto('/login');
	}
</script>

{#if $isLogIn.login}
	<Internship />
{:else}
	<Spinner />
{/if}
