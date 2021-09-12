<script>
  let email;
  let password;

  import { isLogIn ,user} from "../Store/Login.js";
  import { toggleLogIn} from "../Store/CommonFunc.js";

  async function register() {
    try {
      const res = await fetch("https://api.hardik.dev/api/authorize", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-type": "application/json" },
      });

      const {data} = await res.json();
   

      if (data.login) {
      toggleLogIn()
      isLogIn.set(data.login);
      user.set(data.user)
      console.log($user)
     }
    } catch (error) {
      console.error(error);
    }
  }
</script>

<div class="login">
  <form action="">
    <h2>Log In</h2>
    <label for="email"
      >Email
      <input
        type="text"
        name="email"
        bind:value={email}
        required
        placeholder="Email"
      /></label
    >
    <label for="password"
      >Password
      <input
        type="password"
        name="password"
        bind:value={password}
        required
        placeholder="Password"
      /></label
    >
    <input type="submit" value="Log In" on:click|preventDefault={register} />
  </form>
</div>

