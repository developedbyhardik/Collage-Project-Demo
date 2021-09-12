<script>
    import { scale, fly } from 'svelte/transition';
    export let toggleModal;
  </script>
  
  
  <div class="modal">
    <div class="card" transition:fly={{y: 40}}>
      <button on:click={toggleModal} class="drawer--close">X</button>
      <slot />
    </div>
    <div on:click={toggleModal} transition:scale={{ start: 1.5, duration: 1000 }} class="background" />
  </div>
  
  <style>
  .modal {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    align-items: center;
    justify-content: center;
  }
  .card {
    position: relative;
    text-align: center;
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
    background: linear-gradient(142deg, #ff5470 3.62%, #00ebc7 100%);
  }
  .card {
  padding: 2em;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;;
  border-radius: 15px;
}



/* First item will never have margin top */
.card > *:nth-child(2)
{
  margin-top: 0;
}

/* Last item will never have margin bottom */
.card > *:last-child {
  margin-bottom: 0;
}

.drawer--close {
  --size: 30px;
  background: #ff5470;
  color: white;
  width: var(--size);
  height: var(--size);
  text-align: center;
  padding: 0;
  border-radius: var(--size);
  position: absolute;
  top: calc(var(--size) / 2 * -1);
  right: 10px;
  border: 2px solid white;
}

  
  </style>