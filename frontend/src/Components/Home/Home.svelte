<script>
	import Footer from '../Footer/Footer.svelte';

	import Company from '../Home/Company.svelte';
</script>

<div class="home">
	<h3>Welcome data</h3>
</div>
<Company />
<Footer />

<style>
	.home {
		min-height: 85vh;
		width: 90%;
		margin: 0 auto;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5vh;
		border-radius: 15px;
	}
</style>
