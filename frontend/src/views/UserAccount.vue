<template>
  <div class="useraccount">
      <Header />
      <h1>Bonjour {{ user.prenom }}</h1>
    
  </div>
</template>

<script>
import axios from 'axios';

import Header from '../components/Header.vue'

export default {
  Name: 'UserAccount',
  
  components: { 
    Header 
  },
  
  data(){
    return {
      user:""
    }
  },
  created() {
    this.displayProfile;
  },
  
  methods: {
    displayProfile() {
      const userId = localStorage.getItem('userId');

      axios.get('http://localhost:4000/api/user/' + userId, {
        headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
      })
      .then(res => {
        this.user = res.data;
      })
      .catch()
    }
  }
}



</script>



<style>

</style>