<script>
import { goto } from '$app/navigation';

	import { fly, fade } from 'svelte/transition';
	export let path;
</script>

<div class="modal">
	<div class="card" transition:fly={{ y: -40 }}>
		<button on:click={goto(path)} class="drawer--close">X</button>
		<slot />
	</div>
	<div
		transition:fade={{ start: 1, duration: 500 }}
		class="background"
	/>
</div>

<style>
	.modal {
		/* position: fixed; */
		display: flex;
		width: 100%;
		min-height: 90vh;
		left: 0;
		bottom: 0;
		align-items: center;
		justify-content: center;
	}
	.card {
		position: relative;
		text-align: center;
		border: 2px solid black;
	}
	.background {
		position: absolute;
		width: 100%;
		min-height: 90vh;
		bottom: 0;
		left: 0;
		z-index: -1;
		opacity: 0.8;
		background: #f3f4ed;
	}
	.card {
		padding: 2em;
		background: white;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
		border-radius: 15px;
	}

	/* First item will never have margin top */
	.card > *:nth-child(2) {
		margin-top: 0;
	}

	/* Last item will never have margin bottom */
	.card > *:last-child {
		margin-bottom: 0;
	}

	.drawer--close {
		--size: 30px;
		background: #ff5470;
		color: white;
		width: var(--size);
		height: var(--size);
		text-align: center;
		padding: 0;
		border-radius: var(--size);
		position: absolute;
		top: calc(var(--size) / 2 * -1);
		right: 10px;
		border: 2px solid black;
	}
</style>
