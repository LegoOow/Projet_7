<template>
  <div class="registerForm">
    <img alt="Groupomania Logo" src="../assets/icon-above-font.png">
      <nav>
        <router-link to="/">Connexion </router-link>|<router-link to="/Register"> S'inscrire</router-link>
      </nav>
      <form @submit.prevent = register()>
        <label for="registerform-name">Nom :</label>
        <input id="registerform-name" type='text' placeholder="Name" required>

        <label for="registerform-firstname">Prénom :</label>
        <input id="registerform-firstname" type='text' placeholder="First name" required>

        <label for='registerform-mail'>Email :</label>
        <input id="registerform-mail" type='text' placeholder="Email" required>

        <label for="registerform-password">Mot de passe :</label>
        <input id="registerform-password" type='password' placeholder="Password" required>

        <label for="registerform-passwordcheck">Vérification du mot de passe :</label>
        <input id="registerform-passwordcheck" type='password' placeholder="Password check" required>

        <button id='registerform-btn' type='submit'>Soumettre</button>
      </form>
  </div>
</template>

<script>

export default {
    name: 'RegisterForm',
 
    data() {
        return {
            message: "",
        };
    },

    methods: {
        register(){
            const nom = document.getElementById("registerform-name").value;
            const prenom = document.getElementById("registerform-firstname").value;
            const password = document.getElementById("registerform-password").value;
            const passwordCheck = document.getElementById("registerform-passwordcheck").value;
            const email = document.getElementById("registerform-mail").value;

            if(password === passwordCheck){
                fetch('http://localhost:4000/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({nom, prenom, password, email}),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                
                .then(res => {
                    if(res.status === 201) {
                         location.href = '/';
                    }
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        this.message = "Email non disponible.";
                    }  
                });
            }
            else if( password != passwordCheck){
                this.message = "Vérifier le mot de passe";
            }
            
        }
    }
}
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
  margin-right: 140px;
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
  cursor: pointer;
}

button:hover {
  background-color: rgb(117, 117, 117);
  color: white;
}
</style>
