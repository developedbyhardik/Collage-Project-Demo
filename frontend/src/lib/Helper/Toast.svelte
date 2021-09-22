<script>
  import { fly } from 'svelte/transition';
  import { alert } from '$lib/Store/massage.js';

  function closeAlert() {
    alert.set({
      text: $alert.text,
      isActive: false
    });
  }

  alert.subscribe(value => {
    if(value.isActive) {
      setTimeout(closeAlert, 5000)
    }
  });
</script>


{#if $alert.isActive}
  <div on:click={closeAlert} transition:fly={{y: 100}} class="toast" style="--color:{$alert.color}">
    <p>{$alert.text}</p>
  </div>
{/if}

<style>
  .toast {
    color: white;
    background: var(--color);
    border-radius: 10px;
    padding: 20px;
    box-shadow:  0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);;
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    width: clamp(330px,55vw,800px);
    margin: 0 auto;
  }

  .toast p {
    text-align: center;
    margin: 0;
    max-width: 100%;
    font-size: clamp(15px,2vw,18px);
    font-weight: bold;
    letter-spacing: 1px;
  }

</style>