<template>
  <form @submit.prevent= sendNewPost() class='newpost'>
      <label class="titlePost">POST ici ==></label>
      <input  id=postcontent type="text" placeholder="Quoi de neuf...?">
      <button id="btnSend" type="submit">Envoyer</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'NewPost',

    data() {
        return{
            postContent: '',
        }
    },

    methods: {
        sendNewPost() {
            const postContent = document.getElementById("postcontent").value;
            console.log(postContent);
            const userId = localStorage.getItem('userId');
            const token = localStorage.getItem('token');

            axios.post(`http://localhost:4000/api/posts/`,
                {
                    userId,
                    postContent
                },
                {
                    headers: {
                        'content-type' : 'application/json',
                        'Authorization': `Bearer ` + token
                    }
                }
                .then(res => {
                    if(res.status === 201)
                    console.log(res);
                })
            )
        }
    }
}

</script>

<style>
    .newpost {
        display: flex;
        flex-flow: row;
        align-items: center;
        margin-top: 20px;
    }
    #postcontent {
        width: 70%;
        height: 60px;
        font-size: 20px;
        border: none;
        margin-left: 30px;
    }

    #btnSend {
        width: 10%;
        padding: 20px;
        border-radius: 50px;
        font-size: 20px;
        margin-left: 5px;
    }
    .titlePost {
        font-size: 2rem;
        width: 20%;
    }
</style>