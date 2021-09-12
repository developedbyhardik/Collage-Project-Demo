<script>
    export let heading;
    import {fade} from 'svelte/transition'
  </script>
  
  <div class="wrapper">
    <h1 transition:fade>{heading}</h1>
    <div class="content">
      <slot />
    </div>
  </div>
  
  <style>
    .wrapper {
      max-width: 95%;
      margin: 0 auto;
      padding: 0 20px;
      margin-bottom: 20px;
    }
  
    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
    }
  
  </style>
  