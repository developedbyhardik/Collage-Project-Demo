<script>
	import { fly } from 'svelte/transition';
	export let internship;
</script>

<div class="card" transition:fly={{ y: 100, delay: 0.3 }}>
	<div><h3><span>Name</span> {internship.internshipName}</h3></div>
	<div><h4><span>Role</span> {internship.role}</h4></div>
	<div><h4><span>Stipend</span> {internship.stipend}</h4></div>
</div>

<style>
	.card {
		background-color: white;
		width: 350px;
		height: 30vh;
		border-radius: 15px;
		cursor: pointer;
		margin: 20px;
		border: 2px solid black;
		box-shadow: 4px 3px 0px 3px rgba(203, 200, 200, 0.75);
		-webkit-box-shadow: 4px 3px 0px 3px rgba(203, 200, 200, 0.75);
		-moz-box-shadow: 4px 3px 0px 3px rgba(203, 200, 200, 0.75);
		padding: 20px;
	}
    .card div{
        margin: 20px 0;
    }
	span {
		background-color: antiquewhite;
        padding: 6px;
        border-radius: 5px;
	}
</style>
