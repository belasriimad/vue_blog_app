import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comments', {
    state: () => {
      return {
        comments: JSON.parse(localStorage.getItem('comments')) || []
      }
    },
    getters: {
        getPostcomments(state){
            return (postId) => state.comments.filter(comment => comment.post_id === postId);
        }
    },
    actions: {
        addComment(comment){
            this.comments.unshift(comment);
            localStorage.setItem('comments',JSON.stringify(this.comments));
        }
    }
})