<script>
	// Svelte elements
	import { fade } from 'svelte/transition';

	// Components
	import Result from "./Result.svelte";
	import Search from './Search.svelte';

	// Saints collection and util functions
	import { saintsLib } from './saints.js';
	import { getAttributes, findSaint } from './util.js';
	
	// Vars
	let gender = 'male';
	let attr = '';
	let resultList;
	let showResult = 0;
	let portPath;
	const attrList = (getAttributes(saintsLib))

	// Functions 
	function handleSearch(event) {
		attr = event.detail.attr
		gender = event.detail.gender
		
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

		<Search on:search={handleSearch} />

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

	p {
		font-family: 'Open Sans', serif;
		font-size: 1.2em;
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