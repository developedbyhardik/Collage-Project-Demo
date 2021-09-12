<script>
    import {fly} from 'svelte/transition'
</script>

<div class='card' transition:fly={{y:100,delay:0.3}}>

</div>

<style>
    .card{
        background-color: white;
        width: 350px;
        height: 30vh;
        border-radius: 15px;
        cursor: pointer;
        margin: 20px;
        border: 2px solid black;
    }
</style>