<template>
    <div class="main">
        <img src="../../public/img/icon-above-font.png" alt="Groupomania logo">
        <form>
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
}

</script>

<style>
    .main {
        max-width: 500px;
        margin: auto;
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
