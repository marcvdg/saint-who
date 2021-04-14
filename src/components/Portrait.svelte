<script>
    export let alt = 'Teresa of Avila'
    export let path = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Peter_Paul_Rubens_138.jpg'; 
</script>

<div>
    <img src='{path}' alt={alt}>
</div>

<style>
    
    div {
        height: 144px;
        width: 144px;
        border-radius: 50%;
        background-color: lightgray;
        display: block;
        margin: 0 auto;
        -webkit-mask-image: -webkit-radial-gradient(white, black);
    }

    /* Portrait image – has to be portrait size as well */
    img {
        width: 100%;
        overflow: hidden;
    }
</style>