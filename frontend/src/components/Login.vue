<template>
  <div class="login">
    <img alt="Groupomania Logo" src="../assets/icon-above-font.png">
      <nav>
        <router-link to="/">Connexion </router-link>|<router-link to="/Register"> S'inscrire</router-link>
      </nav>
      <form>
        <label for='login-mail'> Email : </label>
        <input id='login-mail' type='text' placeholder='Email' required>
        <label for='login-password'> Mot de passe : </label>
        <input id='login-password' type='text' placeholder='password' required>
        <button>Connexion</button>
      </form>
  </div>
</template>

<script>

</script>


<style scoped>

.login {
  width: 600px;
  margin: 230px auto;
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
}

nav {
  font-size: 1.4rem;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

form input {
  margin: 10px;
  height: 30px;
  border-radius: 40px;
}

form label {
  font-size: 1.2rem;
}

button {
  margin : 10px;
  height: 35px;
  border-radius: 40px;
  font-size: 1.2rem;
  cursor: pointer;
}

</style>
