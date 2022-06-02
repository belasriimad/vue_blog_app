<template>
    <div class="row my-2">
        <div class="col-md-12">
            <Post 
                v-for="post in getPosts"
                :key="post.id"
                :post="post"
            />
        </div>
    </div>
</template>

<script setup>
    import { usePostStore } from '../stores/usePostStore'
    import Post from './Post.vue'

    //get store
    const { getPosts } = usePostStore();
</script>

<style>

</style>