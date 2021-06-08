<template>
    <div class="wrapper">
        <img src="../../public/img/icon-above-font.png" alt="Groupomania logo">
        <nav><router-link to="/" class="active">Se connecter</router-link> | <router-link to="/signup">S'inscrire</router-link></nav>
        <form @submit.prevent = login()>
            
            <label for="login-email">Email :</label>
            <input id="login-email" type="text" placeholder="Email" required>
            
            <label for="login-password">Mot de passe :</label>
            <input id="login-password" type="password" placeholder="Mot de passe" required>

            <button id="login-btn" type="submit">Connexion</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'Login',


    methods: {

        login(){
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;


            fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                body: email, password,
                headers: {
                    'Content-type': 'application/json'
                }
            })

            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data));
                location.reload();
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

<style>
    .wrapper {
        max-width: 500px;
        margin: auto;
    }

    .active {
        color: red;
    }

    img {
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form label {
        font-size: 1em;
        padding-top: 10px;
    }

    form input {
        border-radius : 10px;
        padding: 10px;
        margin: 10px 0px 10px;
    }

    #login-btn {
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: rgb(43, 42, 42);
        border: none;
        border-radius: 10px;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    #login-btn:hover {
        transform: scale(1.025);
    }
</style>
