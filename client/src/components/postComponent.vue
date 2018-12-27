<template>
  <div class="postComponent">
    <h2>Enter post details</h2>
    <form @submit.prevent="addNewPost">
      <input type="text" placeholder="Type something.." v-model="text"><br />
      {{ text }}<br />
      <button type="submit">Submit</button>
    </form>

    <h2 style="margin-bottom: 5px;">
      Latest Posts
    </h2>
    <button style="margin-left: 345px;" v-on:click="deleteLastPost">Delete</button>
    <!-- Create post here  -->
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container">
        <div class="post" v-for="(post, index) in posts">
          {{ post.post }}
          <div class="postDate">
            {{ post.createdAt }}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import PostService_Class from '../postService';

export default {
  name: 'postComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    this.getAllPosts();
  },
  methods: {
    async getAllPosts() {
      try {
        this.posts = await PostService_Class.getPosts();
      }catch(err){
        this.error = err.message;
      }
    },
    async addNewPost() {
      try {
        await PostService_Class.addPost(this.text);
        this.getAllPosts();
      }catch(err){
        this.error = err.message;
      }
    },
    async deleteLastPost() {
      try {
        await PostService_Class.deletePost();
        this.getAllPosts();
      }catch(err){
        this.error = err.message;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post {
  display: block;
  width: 400px;
  margin: 5px auto;
  padding: 15px 0px 0;
  background: #2eaf75;
  color: white;
}
.postDate{
  text-align: left;
  padding: 3px 0 0px 4px;
  border-style: solid;
  border-width: 2px 0 0;
  margin: 8px 0 0;
  border-color: #5e6f64;
  background: #2c9666;
  font-family: monospace;
  width: 180px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
