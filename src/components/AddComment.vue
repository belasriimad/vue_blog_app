<template>
  <div class="card mt-3">
      <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input
                        v-model="data.comment.username"
                        placeholder="Username" 
                        type="text" 
                        class="form-control" 
                        id="username">
                </div>
                <div class="mb-3">
                    <label for="body" class="form-label">Post</label>
                    <textarea 
                        v-model="data.comment.body"
                        placeholder="Post" 
                        rows="3" 
                        cols="50" class="form-control" id="body"></textarea>
                </div>
                <button 
                    @click.prevent="storeComment"
                    :disabled="!data.comment.username || !data.comment.body"
                    type="submit" class="btn btn-sm btn-primary">Submit</button>
            </form>
      </div>
  </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import moment from 'moment';
    import { v4 as uuidv4 } from 'uuid';

    //set data
    const data = reactive({
      comment: {
        username: '',
        body: ''
      }
    });

    //emit events
    const emit = defineEmits(['commentAdded']);

    //store comment
    const storeComment = () => {
        const comment = data.comment;
        comment.id = uuidv4();
        comment.time = moment().format('MMMM Do YYYY, h:mm:ss a');
        emit('commentAdded',comment);
        data.comment = {
            username: '',
            body: ''
        };
    }
</script>

<style>

</style>