<script>
    let result;
async function runHere(){
    try {
      const res = fetch("https://api.hardik.dev/test", {
        method: "GET",
      });
    } catch (error) {
      console.error(error);
    }
}
</script>


<button on:click={runHere}>Hello There</button>

{#if result}
  {result}
{/if}