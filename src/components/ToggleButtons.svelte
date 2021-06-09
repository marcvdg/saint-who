<script>
    import { createEventDispatcher } from 'svelte';

    //Make sure outer can detect changes
    const dispatch = createEventDispatcher();

    function handleChange() {
		dispatch('change');
	}

	export let gender = 'male';

</script>

<div>
    <span>
        <input id='radiomale' type=radio bind:group={gender} value={'male'} on:change={(handleChange)}>
        <label for='radiomale' >
            Man
        </label>
    </span>

    <span>
        <input id='radiofemale' type=radio bind:group={gender} value={'female'} on:change={(handleChange)}>
        <label for='radiofemale' >
            Woman
        </label>
    </span>
</div>

<style>
    input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
    }

    label {
        display: inline-block;
        padding: 7px;
        border: 1px solid #CCC;
        border-radius: 5px;
        cursor: pointer;
        z-index: 90;
        width: 43.5%;
        font-family: 'Open Sans', sans-serif;
        transition-duration: 200ms;
    }

    label:hover {
        background: #DDD;
        transition-duration: 200ms;
    }
    
    input[type="radio"]:checked + label {
        background: teal;   
        color: white;
        transition-duration: 200ms;
    }
</style>