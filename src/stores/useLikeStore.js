import { defineStore } from 'pinia'

export const useLikeStore = defineStore('likes', {
    state: () => {
      return {
        likes: JSON.parse(localStorage.getItem('likes')) || []
      }
    },
    getters: {
        getPostLikes(state){
            return (postId) => state.likes.filter(like => like.post_id === postId).length;
        }
    },
    actions: {
        addLike(like){
            this.likes.unshift(like);
            localStorage.setItem('likes',JSON.stringify(this.likes));
        }
    }
})