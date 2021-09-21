<template>
    <div class='header'>
        <router-link to='/'>
            <img class="logoHeader" alt='groupomania logo' src="../assets/icon-left-font.png">
        </router-link>
        <nav>
            <div class="account">Mon compte</div>
            <div class="disconnect" @click = disconnect()>Se déconnecter</div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Header',

    methods: {
        disconnect() {
            localStorage.removeItem('user');
            localStorage.href="/";
        }
    }

}
</script>

<style>

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    
}

.logoHeader {
    width: 60%;
    position: relative;
    right: 220px;
}

nav {
    position: relative;
    left: 70px;
    font-size: 1.4rem;
    cursor: pointer;
}

.account {
    margin-bottom: 3px;
}

.disconnect:hover, .account:hover {
    font-weight: bold;
}

</style>