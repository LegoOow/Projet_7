<template>
  <div class="login">
    <img alt="Groupomania Logo" src="../assets/icon-above-font.png">
      <nav>
        <router-link to="/">Connexion </router-link>|<router-link to="/Register"> S'inscrire</router-link>
      </nav>
      <form @submit.prevent = login()>
        <label for='login-mail'> Email : </label>
        <input id='login-mail' type='text' placeholder='Email' required>
        <label for='login-password'> Mot de passe : </label>
        <input id='login-password' type='password' placeholder='password' required>
        <button id='login-btn' type='submit'>Connexion</button>
      </form>
  </div>
</template>

<script>

export default {
    name: 'Login',

    methods: {

        login(){
            const email = document.getElementById("login-mail").value;
            const password = document.getElementById("login-password").value;


            fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({password, email}),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            .then(res => {
              if(res.status === 200) {
                localStorage.setItem('user', res.data);
                JSON.parse(localStorage.user);
                location.href = '/HomeUser';
              }
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    this.message = "Utilisateur inconnu.";
                }
                if (error.response.status === 401) {
                    this.message = "Email ou mot de passe invalide.";
                }
                if (error.response.status === 500) {
                    this.message = "Erreur serveur.";
                }
            });
        }
    }
}

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
  margin: 0 30px 10px 0;
}

form {
  display: flex;
  flex-direction: column;
}

form input {
  margin: 10px;
  height: 30px;
  border-radius: 40px;
  font-size: 1.4rem;
}

form label {
  font-size: 1.2rem;
}

button {
  margin : 10px;
  height: 35px;
  border-radius: 40px;
  font-size: 1.2rem;
  background-color: rgb(red, green, blue);
  cursor: pointer;
}

button:hover {
  background-color: rgb(117, 117, 117);
  color: white;
}

</style>
