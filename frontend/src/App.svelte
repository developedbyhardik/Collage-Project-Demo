<script>
  import { Router, Route, navigate } from "svelte-routing";

  import Home from "./Components/Home/Home.svelte";
  import Header from "./Components/Header/Header.svelte";
  import Model from "./Components/Helper/Model.svelte";
  import Login from "./Components/Login/Login.svelte";
  import Register from "./Components/Login/Register.svelte";
  import About from "./Components/About/About.svelte";
  import Internship from "./Components/Interniship/Internship.svelte";

  (async () => {
    const res = await fetch("https://api.hardik.dev/test", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    if (data.login) {
      navigate('internship')
    }
  })();
</script>

<Router>
  <Route path="/login">
    <Model path="/">
      <Login />
    </Model>
  </Route>
  <Route path="/sign-up">
    <Model path="/">
      <Register />
    </Model></Route
  >
  <Route path="/">
    <Header />
    <Home />
  </Route>

  <Route path="about">
    <About />
  </Route>
  <Route path="internship">
    <Header />
    <Internship />
  </Route>
</Router>
