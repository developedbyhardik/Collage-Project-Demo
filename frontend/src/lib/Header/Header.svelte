<script>
	import { goto } from '$app/navigation';
	import UserInfo from '$lib/Helper/UserInfo.svelte';

	import { toggleLogIn, toggleSignUp } from '$lib/Store/CommonFunc.js';

	import { isLogIn } from '$lib/Store/Login.js';

	let userInfo = false;

	function getUserInfo() {
		userInfo = !userInfo;
	}
</script>

<header style={$isLogIn.login ? 'justify-content: space-between' : null}>
	<div class="logo" on:click={() => goto('/')}>
		<h2>ADIT</h2>
	</div>

	{#if $isLogIn.login}
		<div class="userIcon" on:click={getUserInfo}><h2>{$isLogIn.data.name[0]}</h2></div>
		{#if userInfo}
			<UserInfo name={$isLogIn.data.name} />
		{/if}
	{:else}
		<ul>
			<li><a href="about">About Us</a></li>
			<li><a href="/login" on:click={toggleLogIn}>Login</a></li>
			<li><a href="/sign-up" on:click={toggleSignUp}>Sign Up</a></li>
		</ul>
	{/if}
</header>

<style>
	.userIcon {
		background-color: aliceblue;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		margin-right: clamp(5px, 1vw, 25px);
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	header {
		width: 100%;
		height: 10vh;
		background-color: #524763;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		position: sticky;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding: 0 clamp(5px, 0.2vw, 20px);
	}
	.logo {
		width: calc(70% - 5vw);
		padding-left: clamp(5px, 2vw, 35px);
		cursor: pointer;
	}
	.logo h2 {
		color: white;
	}
	ul {
		display: flex;
		width: calc(30% + 5vw);
		justify-content: space-around;
	}

	@media screen and (max-width: 850px) {
		.logo {
			width: calc(30% - 3vw);
		}
		ul {
			width: calc(70% + 3vw);
		}
	}
</style>
