<script>
  import { Router, Route } from "svelte-routing";

  import Home from "./Components/Home/Home.svelte";
  import Header from "./Components/Header/Header.svelte";
  import {
    isLogIn,
    isLoginClick,
    isSignUpClick,
    isRegistered,
  } from "./Components/Store/Login.js";
  import Model from "./Components/Helper/Model.svelte";
  import { toggleLogIn, toggleSignUp } from "./Components/Store/CommonFunc";
  import Login from "./Components/Login/Login.svelte";
  import Register from "./Components/Login/Register.svelte";
  import About from "./Components/About/About.svelte";
  import Details from "./Components/Details/Details.svelte";
import Internship from "./Components/Interniship/Internship.svelte";

</script>

<Router>
  <Route path="/">
    {#if $isLoginClick}
      <Model toggleModal={toggleLogIn}>
        <Login />
      </Model>
    {:else if $isSignUpClick}
      <Model toggleModal={toggleSignUp}>
        <Register />
      </Model>
    {:else if $isRegistered | $isLogIn}
      <Internship/>
    {:else}
      <Header />
      <Home />
    {/if}
  </Route>

  <Route path="about">
    <About />
  </Route>
</Router>
