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
        border: 1px solid #ccc;
        box-shadow: 4px 3px 0px 3px rgba(203,200,200,0.75);
-webkit-box-shadow: 4px 3px 0px 3px rgba(203,200,200,0.75);
-moz-box-shadow: 4px 3px 0px 3px rgba(203,200,200,0.75);
    }
</style>