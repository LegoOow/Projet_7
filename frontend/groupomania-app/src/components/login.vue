<template>
    <div class="main">
        <img src="../assets/icon-above-font.png" alt="Groupomania logo">
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

<style scoped>
    .main {
        max-width: 500px;
        margin: 100px auto;
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

</style>
