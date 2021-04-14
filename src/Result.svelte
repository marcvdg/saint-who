<script>
	import StdSelect from "./components/StdSelect.svelte";
	import StdButton from "./components/StdButton.svelte";
	import Portrait from "./components/Portrait.svelte";
	import { getAttributes, findSaint } from "./util";	

    export let resultList;
	export let attr;
	export let gender;
	
	let result;
	let refine = false;
	let attrList;
	let secAttr;
	let genderWord = gender === 'male' ? 'man' : 'woman'
	const vowels = ['a','e','o','i','u']
	let article = vowels.includes(attr.charAt(0)) ? 'an' : 'a';

	function countResults() {
		if (resultList.length === 1){
			result = resultList[0];
			refine = false;
		} else if (resultList.length > 1){
			refine = true;
			attrList = getAttributes(resultList);
		}
		return resultList.length;

	} 

	countResults();	

</script>

{#if refine}
	<div>
		<Portrait alt='Jesus washing the apostles&quot feet' path='https://upload.wikimedia.org/wikipedia/commons/b/b1/Duccio_di_Buoninsegna_029.jpg'/>
		<h2>Multiple results</h2>
		<p>There are {resultList.length} results for a {genderWord} with {article} {attr}:</p>
		<ul> 
			{#each resultList as result }
			<li>{result.name}</li>
			{/each}
		</ul>
		<p>Please select another attribute you see:</p>
		<StdSelect bind:choice={secAttr} optionList={attrList}/>
		<StdButton on:click={() => { resultList = findSaint(secAttr, gender, resultList); countResults();}}>Refine search</StdButton>
	</div>
{:else}
	<div> 
		<Portrait alt={result.name} path={result.img}/>
		<h1>{result.name}</h1>
		<p>{result.desc}</p>
	</div>
{/if}

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


	p, li {
		font-family: 'Open Sans', sans-serif;
		font-size: 1em;
		line-height: 1.5em;
	}

	li {
		list-style-type: none;
	}


</style>
        