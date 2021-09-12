<script>
  let email;
  let password;

  async function register() {
    try {
      const res = fetch("https://api.hardik.dev/api/authorize", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.error(error);
    }
  }
</script>

<div class="login">
  <form action="">
    <h3>Log In</h3>
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

<style>
  h3 {
    margin-bottom: 20px;
  }
</style>
