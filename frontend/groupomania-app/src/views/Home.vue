<template>
  <div class="home">
    <Login v-if="!connected"/>

    <Header v-if="connected"/>

  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Login,
    Header,
  }
}
</script>
