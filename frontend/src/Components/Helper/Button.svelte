<script>
    export let color;

</script>

<button style="background: {color};">
<slot/>
</button>

<style>
    button{
        padding: 0.5rem 2rem;
        cursor: pointer;
        outline: none;
        border: 1px solid black;
        border-radius: 5px;
    }
</style>