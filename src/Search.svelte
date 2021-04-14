<script>
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	import StdSelect from "./components/StdSelect.svelte";
	import StdButton from "./components/StdButton.svelte";
	import Portrait from "./components/Portrait.svelte";
	import ToggleButtons from "./components/ToggleButtons.svelte"

	import { saintsLib } from './saints.js';
	import { getAttributes, findSaint } from './util.js';


	const dispatch = createEventDispatcher();

	let attr;
	let gender;

	function runSearch() {
		dispatch('search', {
			attr: attr,
			gender: gender
		});
	}

	const attrList = (getAttributes(saintsLib))



</script>
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

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;800&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

	h1 {
		font-size: 3em;
		font-family: 'Playfair Display', serif;
		font-weight: 800;
		color: black;
		border-bottom: 1px solid lightgray;
		width: auto;
		display: inline-block;
		margin-bottom: 0.2em;
		padding-bottom: 0.5em
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
		font-family: 'Open Sans', sans-serif;
		font-size: 1em;
		line-height: 1.5em;
	}

</style>
        