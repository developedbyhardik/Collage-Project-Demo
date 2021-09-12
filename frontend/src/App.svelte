<script>
  import { navigate, Router, Route } from "svelte-routing";

  import Home from "./Components/Home/Home.svelte";
  import Header from "./Components/Header/Header.svelte";
  import { isLoginClick, isSignUpClick } from "./Components/Store/Login.js";
  import Model from "./Components/Helper/Model.svelte";
  import { toggleLogIn, toggleSignUp } from "./Components/Store/CommonFunc";
  import Login from "./Components/Login/Login.svelte";
  import Register from "./Components/Login/Register.svelte";
import About from "./Components/About/About.svelte";

  function redirectToDashboard() {
    login().then(() => {
      navigate("/success", { replace: true });
    });
  }
</script>

<Router>
  <Route path="/">
    {#if $isLoginClick}
      <Model toggleModal={toggleLogIn}>
        <Login on:success={redirectToDashboard} />
      </Model>
    {:else if $isSignUpClick}
      <Model toggleModal={toggleSignUp}>
        <Register on:success={redirectToDashboard} />
      </Model>
    {:else}
      <Header />
      <Home />
    {/if}
  </Route>

  <Route path='about'>
    <About/>
  </Route>
</Router>
