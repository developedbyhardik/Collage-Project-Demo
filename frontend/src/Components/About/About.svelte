<script>
   
async function runHere(){
    try {
      const res = fetch("https://api.hardik.dev/test", {
        method: "GET",
      });
    } catch (error) {
      console.error(error);
    }
}

import Internship from "../Interniship/Internship.svelte";
</script>

<div class="about">

  <Internship/>
</div>

<style>

</style>