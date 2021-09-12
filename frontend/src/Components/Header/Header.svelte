<script>
  import { toggleLogIn, toggleSignUp } from "../Store/CommonFunc.js";
  import { Router, Link } from "svelte-routing";

  let result;
async function runHere(){
    try {
      const res = fetch("https://api.hardik.dev/test", {
        method: "POST",
      });
      console.log(res)
    } catch (error) {
      console.error(error);
    }
}
</script>

<Router>
  <header>
    <div class="logo">
      <h2 on:click={runHere}>ADIT</h2>
    </div>

    <ul>
      <li><Link to="about">About Us</Link></li>
      <li><Link to="/" on:click={toggleLogIn}>Login</Link></li>
      <li><Link to="/" on:click={toggleSignUp}>Sign Up</Link></li>
    </ul>
  </header>
</Router>

<style>
  header {
    width: 100%;
    height: 10vh;
    background-color: #524763;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
  }
  .logo {
    width: 70%;
    padding-left: 2rem;
  }
  h2 {
    color: white;
  }
  ul {
    display: flex;
    width: 30%;
    justify-content: space-around;
  }
  
</style>
