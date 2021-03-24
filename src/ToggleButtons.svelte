<script>
	export let gender = 'male';

</script>

<div>
    <span>
        <input id='radiomale' type=radio bind:group={gender} value={'male'}>
        <label for='radiomale' >
            Man
        </label>
    </span>

    <span>
        <input id='radiofemale' type=radio bind:group={gender} value={'female'}>
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
        width: 10rem;
        font-family: 'Open Sans', sans-serif;
    }

    label:hover {
        background: #DDD;
    }
    
    input[type="radio"]:checked + label {
        background: teal;   
        color: white;
    }
</style>