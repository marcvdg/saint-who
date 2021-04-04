<script>
	//import { gender, attr } from './stores.js';
	
	import AllSaints from "./AllSaints.svelte";
	import AttrSelect from "./AttrSelect.svelte";
	import Portrait from "./Portrait.svelte";
	import Result from "./Result.svelte";
	import SrcButton from "./SrcButton.svelte";
	import ToggleButtons from "./ToggleButtons.svelte";

	import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

	import { findSaint, attrList } from './saints';
	
	let gender = 'male';
	let attr = '';

	let result = '';

	function runSearch() {
		result = findSaint(attr, gender)
	}


	// const query = db.collection('saints')
	// const saints = collectionData(query, 'id').pipe(startWith([]));
	// let result = saints;

	// function getSaint() {

	// 	const query = db.collection('saints').where("sex", "==", gender).where("attribute", "array-contains", attr);
	// 	const saints = collectionData(query, 'id').pipe(startWith([]));
	// 	result = saints
    // }
</script>

<main>
	<Portrait />
	<header>
		<h1>Saint who?</h1>
		<p>Knowing the holy <br/> by what they're holding</p>
	</header>
	<div>
		<h2>I'm looking at a</h2>
		<ToggleButtons bind:gender={gender}/>
		<h2>with a</h2>

		<AttrSelect bind:attr={attr}/>
		<SrcButton on:click={runSearch}/>
	</div>

	<!-- <Result srcResult={srcResult}/> -->
	

       <h2>That's {result.name}!</h2> 
	   <p>{result.desc}</p>
	   
    
	{#each attrList as attrItem} 
		<p>{attrItem}</p>
	{/each}

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

	@media (min-width: 640px) {
		main {
			max-width: 360px;
		}
	}
</style>