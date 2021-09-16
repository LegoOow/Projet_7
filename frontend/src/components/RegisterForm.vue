<template>
  <div class="registerForm">
    <img alt="Groupomania Logo" src="../assets/icon-above-font.png">
      <nav>
        <router-link to="/">Connexion </router-link>|<router-link to="/Register"> S'inscrire</router-link>
      </nav>
      <form>
        <label for="registerForm-Name">Nom :</label>
        <input id="registerForm-name" type='text' placeholder="Name" required>
        <label for="registerForm-firstName">Prénom :</label>
        <input id="registerForm-firtName" type='text' placeholder="First name" required>
        <label for='registerForm-mail'>Email :</label>
        <input id="registerForm-mail" type='text' placeholder="Email" required>
        <label for="registerForm-password">Mot de passe :</label>
        <input id="registerForm-password" type='text' placeholder="Password" required>
        <label for="registerForm-passwordCheck">Vérification du mot de passe :</label>
        <input id="registerForm-passwordCheck" type='text' placeholder="Password check" required>
        <button>Soumettre</button>
      </form>
  </div>
</template>

<script>

</script>

<style scoped>

.registerForm {
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
