import axios from 'axios';
//import global_data from '../../global_data';

//const global_data = require('../../global_data');
//const server_url = 'http://localhost:'+ global_data.server.port + '/api/posts/';
const server_url = 'http://localhost:5000/api/posts/';

class PostService_Class {
  // Get posts
  static getPosts() {
    return new Promise(async(resolve, reject)=>{
      try {
        const res = await axios.get(server_url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post
            // add remaining
          }))
        );
      }catch(err){
        reject(err);
      }
    });
  }

  // Add post
  static addPost(post_text){
    return axios.post(server_url+'add', {'text':post_text});
  }

  // Delete post
  static deletePost(){
    //let new_url = server_url+id;
    return axios.delete(server_url+'delete');
  }
}

export default PostService_Class;
