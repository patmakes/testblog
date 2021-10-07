<template>
  <div class="blogwrap">
    <h1>Blog</h1>
    <div class="blog">
    <BlogCard v-for="post in posts" :key="post.id" :post="post"/>
    </div>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';
import BlogService from '@/services/BlogService.js'

export default {
    components: {
        BlogCard,
    },
    data() {
      return {
        posts: [],
      }
    },
    created() {
  BlogService.getPosts()
    .then((response) => {
      this.posts = response.data;
    })
    .catch(error => {
      console.log('There was an error:'+''+ error.response)
    });
}
}
</script>

<style scoped>
.blogwrap {
  max-width: 580px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.blog {
    display: flex;
    flex-wrap: wrap;
    min-width: 300px;
}

</style>