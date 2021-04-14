<script>
	import { fade } from 'svelte/transition';

	import StdSelect from "./components/StdSelect.svelte";
	import StdButton from "./components/StdButton.svelte";
	import Portrait from "./components/Portrait.svelte";
	import ToggleButtons from "./components/ToggleButtons.svelte";
	import Result from "./Result.svelte";

	import { saintsLib } from './saints.js';
	import { getAttributes, findSaint } from './util.js';
	
	let gender = 'male';
	let attr = '';
	let portPath = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Peter_Paul_Rubens_138.jpg'
	let resultList;
	let showResult = 0;

	// The search functions.

	const attrList = (getAttributes(saintsLib))

	function runSearch() {
		resultList = findSaint(attr, gender, saintsLib)
		portPath = resultList[0].img;
		if (resultList.length > 0){
			toggleResult();
		}
	}
	

	function toggleResult() {
		showResult = !showResult;
	}

</script>

<main>
	
	
	{#if !showResult}
		<Portrait />
		<header>
			<h1>Saint who?</h1>
			<p>Knowing the holy <br/> by what they're holding</p>
		</header>
		<div in:fade>
			<h2>I'm looking at a</h2>
			<ToggleButtons bind:gender={gender}/>
			<h2>with a</h2>
			<StdSelect bind:choice={attr} optionList={attrList}/>
			<StdButton on:click={runSearch}>Who's that saint?</StdButton>
		</div>
	{/if}

	{#if showResult}
		<div in:fade>
			<Result resultList={resultList} attr={attr} gender={gender}/>
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
		max-width: 300px;
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