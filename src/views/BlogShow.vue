<template>
  <div class="blogshow">
    <h1>ShowingPost {{ post.title }}</h1>
  </div>
</template>
<script>
import BlogService from '@/services/BlogService.js';

export default {
  props: ['id'],
  data() {
  return {
    post: {}
  }
},
created() {
  BlogService.getPost(this.id)
  .then((response) => {
    this.post = response.data
  })
  .catch(error => {
    console.log('There was an error:', error.response)
  });
}

}
</script>
