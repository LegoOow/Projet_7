<template>
  <div class="homeuser">
      <Header />
      <div class="wall">
        
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'HomeUser',
  components: {
    Header
  }
}
</script>

<style>

.wall {
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-top: 40px;
  height: 600px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px 5px rgba(119, 119, 119, 0.5);
-moz-box-shadow: 0px 0px 10px 5px rgba(119, 119, 119, 0.5);
-webkit-box-shadow: 0px 0px 10px 5px rgba(119, 119, 119, 0.5);
}

</style>