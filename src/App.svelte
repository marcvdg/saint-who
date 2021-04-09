<script>
	import { fade } from 'svelte/transition';

	import AttrSelect from "./AttrSelect.svelte";
	import Portrait from "./Portrait.svelte";
	import SrcButton from "./SrcButton.svelte";
	import ToggleButtons from "./ToggleButtons.svelte";

	import { findSaint } from './saints';
	
	let gender = 'male';
	let attr = '';
	let portPath = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Peter_Paul_Rubens_138.jpg'
	let result;
	let showResult = 0;

	function runSearch() {
		result = findSaint(attr, gender)
		portPath = result.img;
		if (result !== undefined){
			toggleResult();
		}
	}
	
	function toggleResult() {
		showResult = !showResult;
	}

</script>

<main>
	<Portrait path={portPath}/>
	

	{#if !showResult}
		<header>
			<h1>Saint who?</h1>
			<p>Knowing the holy <br/> by what they're holding</p>
		</header>
		<div in:fade>
			<h2>I'm looking at a</h2>
			<ToggleButtons bind:gender={gender}/>
			<h2>with a</h2>

			<AttrSelect bind:attr={attr}/>
			<SrcButton on:click={runSearch}/>
		</div>
	{/if}

	{#if showResult}
		<div in:fade>
			<header>
				<h1>{result.name}</h1>
			</header>
	   		<p>{result.desc}</p>
			<p class='fakelink' on:click={toggleResult}>Back to search</p>
		</div>
	{/if}
</main>



<style>

	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;800&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		overflow: visible;
		
	}

	h1 {
		font-size: 3em;
		font-family: 'Playfair Display', serif;
		font-weight: 800;
		color: black;
		border-bottom: 1px solid lightgray;
		width: auto;
		display: inline-block;
		margin-bottom: 0.2em;
	}

	h2 {
		font-size: 1.5em;
		font-family: 'Playfair Display', serif;
		font-weight: 400;
		color: #333;
		width: auto;
		display: block;
	}

	p {
		font-family: 'Open Sans', serif;
		font-size: 1.2em;
	}

	header p {
		margin-top: 0;
	}

	.fakelink {
		color: teal;
		font-size: 0.8em;
		text-decoration: underline;
		cursor: pointer;
	}

	@media (min-width: 640px) {
		main {
			max-width: 360px;
		}
	}
</style>