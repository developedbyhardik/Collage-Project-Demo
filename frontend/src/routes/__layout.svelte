<script>
	import Header from '$lib/Header/Header.svelte';
	import Toast from '$lib/Helper/Toast.svelte';
	import { alert } from '$lib/Store/massage.js';
	console.log($alert)
</script>

<Header />
<slot />
{#if $alert.isActive}
	<Toast />
{/if}
