<template>
    <div class='header'>
        <router-link to='/'>
            <img class="logoHeader" alt='groupomania logo' src="../assets/icon-left-font.png">
        </router-link>
        <nav>
            <router-link to='/UserAccount'>
                <div class="account">Mon compte</div>
            </router-link>
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
    flex-flow: row wrap;
    justify-content: space-between;
}

.logoHeader {
    width: 60%;
    position: relative;
    right: 220px;
}

nav {
    font-size: 1.4rem;
    cursor: pointer;
    margin: 30px 20px 0px 0px;
}

.account {
    margin-bottom: 3px;
}

.disconnect:hover, .account:hover {
    font-weight: bold;
}

</style>