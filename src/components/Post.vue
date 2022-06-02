<template>
    <div class="card mb-2">
        <div class="card-body">
           <router-link :to="`/post/${post.id}`" class="text-decoration-none text-secondary">
                {{ post.body }}
           </router-link>
        </div>
        <div class="card-footer bg-white d-flex justify-content-between align-items-center">
            <span>
                <i class="bi bi-person"></i> {{ post.username }}
            </span>
            <span @click="storeLike" style="cursor: pointer">
                <i class="bi bi-heart"></i> {{ getPostLikes(post.id) }}
            </span>
            <router-link :to="`/post/${post.id}`" class="text-decoration-none text-dark">
                <span>
                    <i class="bi bi-chat"></i> {{ getPostcomments(post.id).length }}
                </span>
           </router-link>
            <span>
                <i class="bi bi-alarm"></i> {{ post.time }}
            </span>
        </div>
    </div>
</template>

<script setup>
    import { useLikeStore } from '../stores/useLikeStore'
    import { useCommentStore } from '../stores/useCommentStore'
    import { v4 as uuidv4 } from 'uuid';

    //get store
    const { addLike, getPostLikes } = useLikeStore();
    //get comment store
    const { getPostcomments } = useCommentStore();

    //define props
    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    });

    //store like
    const storeLike = () => {
        const like = {
            id: uuidv4(),
            post_id: props.post.id
        }
        addLike(like);
    }
</script>

<style>

</style>