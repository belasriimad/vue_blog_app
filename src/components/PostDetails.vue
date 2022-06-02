<template>
    <div>
        <div class="card mb-2">
            <div class="card-body">
                {{ post.body }}
            </div>
            <div class="card-footer bg-white d-flex justify-content-between align-items-center">
                <span>
                    <i class="bi bi-person"></i> {{ post.username }}
                </span>
                <span @click="storeLike" style="cursor: pointer">
                    <i class="bi bi-heart"></i> {{ getPostLikes(post.id) }}
                </span>
                <span>
                    <i class="bi bi-chat"></i> {{ getPostcomments(post.id).length }}
                </span>
                <span>
                    <i class="bi bi-alarm"></i> {{ post.time }}
                </span>
            </div>
        </div>
        <Comments 
            v-for="comment in getPostcomments(post.id)"
            :key="comment.id"
            :comment="comment"
        />
        <AddComment @commentAdded="commentAdded"/>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import { useLikeStore } from '../stores/useLikeStore'
    import { usePostStore } from '../stores/usePostStore'
    import { useCommentStore } from '../stores/useCommentStore'
    import { v4 as uuidv4 } from 'uuid';
    import AddComment from './AddComment.vue'
    import Comments from './Comments.vue'

    //get like store
    const { addLike, getPostLikes } = useLikeStore();
    //get post store
    const { getPost } = usePostStore();
    //get comment store
    const { addComment, getPostcomments } = useCommentStore();

    //get route params 
    const { params } = useRoute();


    //store like
    const storeLike = () => {
        const like = {
            id: uuidv4(),
            post_id: params.id
        }
        addLike(like);
    }

    //get post
    const post = getPost(params.id);


    //add comment
    const commentAdded = (comment) => {
        comment.post_id = post.id;
        addComment(comment);
    }
</script>

<style>

</style>