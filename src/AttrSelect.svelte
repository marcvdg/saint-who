<script>
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    export let attr
    const query = db.collection('attributes')
    const attributes = collectionData(query, 'id').pipe(startWith([]));
</script>

<!-- <label for="attribute-select">Holding a:</label> -->

<div class="select">
    <select bind:value={attr} name="attribute-select" id="attribute-select">

        <option selected disabled>Choose an option</option>

        {#each $attributes as attribute }
            <option class="optionstyle" value="{attribute.name}">{attribute.name}</option>
        {/each}
        
    </select>
    
</div>

<style>
    /* Reset Select */
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: 0 !important;
        background-image: none;
    }
    /* Remove IE arrow */
    select::-ms-expand {
        display: none;
    }
    /* Custom Select */
    .select {
        position: relative;
        display: flex;
        width: 22em;
        height: 2.5em;
        line-height: 3;
        background: white;
        overflow: hidden;
        border: 1px solid lightgray;
        border-radius: .25em;
    }
    select {
        flex: 1;
        padding: 0 .5em;
        margin-top: .5em;
        font-family: 'Open Sans', sans-serif;
        color: black;
        text-transform: capitalize;
        cursor: pointer;
    }
    /* Arrow */
    .select::after {
        content: '\25BC';
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 1em;
        background: white;
        cursor: pointer;
        pointer-events: none;
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
    }
    /* Transition */
    .select:hover::after {
        color: teal;
    }
</style>