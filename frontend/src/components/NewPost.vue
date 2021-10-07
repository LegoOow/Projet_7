<template>
  <div class='newpost'>
      <input id=post type="text" placeholder="Quoi de neuf...?">
  </div>
</template>

<script>
export default {
    name: 'NewPost'
}
</script>

<style>
    .newpost {
        border: 2px solid;
        margin-top: 20px;
    }
    #post {
        width: 90%;
        height: 60px;
        font-size: 20px;
        border: none;
    }
</style>