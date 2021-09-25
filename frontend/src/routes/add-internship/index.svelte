<script>
import { goto } from '$app/navigation';

	let internshipName;
	let workType;
	let duration;
	let aboutInternship;
	let aboutCompany;
	let qualification;
	let skill;
	let stipend;
	let role;

	import Model from '$lib/Helper/Model.svelte';
	import { alert } from '$lib/Store/massage';

	async function registerInternship() {
		try {
			const data = {
				internshipName,
				workType,
				duration,
				aboutInternship,
				skill,
				qualification,
				stipend,
				aboutCompany,
				role
			};
			const res = await fetch('http://localhost:5000/api/add-internship', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify({ data }),
				headers: { 'Content-type': 'application/json' }
			});

			const result = await res.json();
			console.log('result:', result)
			if (result.added) {
				goto('/internship');
			}
			alert.set({ text: result.text, isActive: true, color: result.color });
		} catch (error) {}
	}
</script>

<div class="add-internship">
	<Model path="/">
		<form action="">
			<h2>Add New Internship</h2>
			<label for="internshipName"
				>Internship Name
				<input
					type="text"
					name="internshipName"
					bind:value={internshipName}
					required
					placeholder="Internship Name"
				/></label
			>
			<label for="workType"
				>Work Type
				<input
					type="text"
					name="workType"
					bind:value={workType}
					required
					placeholder="Work Type"
				/></label
			>
			<label for="duration"
				>Duration
				<input
					type="text"
					name="duration"
					bind:value={duration}
					required
					placeholder="Duration"
				/></label
			>
			<label for="role"
				>Role
				<input
					type="text"
					name="Role"
					bind:value={role}
					required
					placeholder="role"
				/></label
			>
			<label for="aboutInternship"
				>About Internship
				<input
					type="text"
					name="aboutInternship"
					bind:value={aboutInternship}
					required
					placeholder="About Internship"
				/></label
			>
			<label for="skill"
				>skill
				<input type="text" name="skill" bind:value={skill} required placeholder="Skills" /></label
			>
			<label for="qualification"
				>Qualification
				<input
					type="text"
					name="qualification"
					bind:value={qualification}
					required
					placeholder="Qualification"
				/></label
			>
			<label for="stipend"
				>Stipend
				<input
					type="text"
					name="stipend"
					bind:value={stipend}
					required
					placeholder="Stipend"
				/></label
			>
			<label for="aboutCompany"
				>About Company
				<input
					type="text"
					name="aboutCompany"
					bind:value={aboutCompany}
					required
					placeholder="About Company"
				/></label
			>

			<input type="submit" value="Log In" on:click|preventDefault={registerInternship} />
		</form>
	</Model>
</div>

<style>
	form {
		width: clamp(220px, 55vw, 700px);
	}

	.add-internship {
		padding: 3rem 0;
	}
</style>
