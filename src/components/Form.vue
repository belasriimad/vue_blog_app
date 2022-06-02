<template>
  <div class="card mt-3">
      <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input
                        v-model="data.post.username"
                        placeholder="Username" 
                        type="text" 
                        class="form-control" 
                        id="username">
                </div>
                <div class="mb-3">
                    <label for="body" class="form-label">Post</label>
                    <textarea 
                        v-model="data.post.body"
                        placeholder="Post" 
                        rows="3" 
                        cols="50" class="form-control" id="body"></textarea>
                </div>
                <button 
                    @click.prevent="storePost"
                    :disabled="!data.post.username || !data.post.body"
                    type="submit" class="btn btn-sm btn-primary">Submit</button>
            </form>
      </div>
  </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import { usePostStore } from '../stores/usePostStore'
    import moment from 'moment';
    import { v4 as uuidv4 } from 'uuid';

    //get store
    const { addPost } = usePostStore();

    //set data
    const data = reactive({
      post: {
        username: '',
        body: ''
      }
    });

    //store post
    const storePost = () => {
        const post = data.post;
        post.id = uuidv4();
        post.time = moment().format('MMMM Do YYYY, h:mm:ss a');
        addPost(post);
        data.post = {
            username: '',
            body: ''
        };
    }
</script>

<style>

</style>