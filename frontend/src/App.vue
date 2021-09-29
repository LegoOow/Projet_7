<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: inherit;
}

#nav {
  padding: 30px;

  a {
    color: inherit;
    text-decoration: none;

    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
