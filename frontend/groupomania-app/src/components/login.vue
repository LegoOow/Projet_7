<template>
    <div class="main">
        <img src="/assets/img/icon-above-font.png" alt="Groupomania logo">

            <label for="login-email">Email :</label>
            <input id="login-email" type="text" placeholder="Email" required>
            
            <label for="login-password">Mot de passe :</label>
            <input id="login-password" type="password" placeholder="Mot de passe" required>

            <div class="error-message">{{message}}</div>

            <button id="login-btn" type="submit">Connexion</button>
    </div>
</template>

<script>

</script>

<style scoped>
    .main {
        max-width: 500px;
        margin: 100px auto;
    }

    img {
        width: 100%;
    }

</style>
