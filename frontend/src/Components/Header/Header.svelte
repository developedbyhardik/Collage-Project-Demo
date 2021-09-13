<script>
  import { toggleLogIn, toggleSignUp } from "../Store/CommonFunc.js";
  import { Router, Link } from "svelte-routing";

  let result;
  async function runHere() {
    try {
      const res = fetch("https://api.hardik.dev/test", {
        method: "POST",
      });
      console.log(res);
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
      <li><Link to="/login" on:click={toggleLogIn}>Login</Link></li>
      <li><Link to="/sign-up" on:click={toggleSignUp}>Sign Up</Link></li>
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
    padding: 0 clamp(5px,0.2vw,20px);
  }
  .logo {
    width: calc(70% - 5vw);
    padding-left: clamp(5px,2vw,35px);
  }
  h2 {
    color: white;
  }
  ul {
    display: flex;
    width: calc(30% + 5vw);
    justify-content: space-around;
  }
  
  @media screen and (max-width: 850px) {
    .logo {
      width: calc(30% - 3vw);
    }
    ul {
      width: calc(70% + 3vw);
    }
  }
</style>
