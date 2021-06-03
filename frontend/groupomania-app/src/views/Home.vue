<template>
  <div class="home">
    <img src="/assets/img/icon-above-font.png" alt="Groupomania logo">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    login
  }
}
</script>
