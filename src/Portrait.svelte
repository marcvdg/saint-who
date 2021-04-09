<script>
    export let saint = 'Teresa'
    export let path; 
</script>

<div>
    <img src='{path}' alt={saint}>
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

    img {
        width: 100%;
        overflow: hidden;
        
    }
</style>