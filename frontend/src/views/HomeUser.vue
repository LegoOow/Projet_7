<template>
  <div class="homeuser">
      <Header />
      <NewPost />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NewPost from '@/components/NewPost.vue'

export default {
  name: 'HomeUser',
  components: {
    Header,
    NewPost
  }
}
</script>

<style>

</style>