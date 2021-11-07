<template>
  <div class="blogwrap">
    <h1>Pat Makes Posts</h1>
    <div class="blog">
    <BlogCard v-for="post in posts" :key="post.id" :post="post"/>
    </div>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';
// import BlogService from '@/services/BlogService.js'

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
     


  fetch('https://raw.githubusercontent.com/patmakesmusic/pmmBlogger/main/blogdb.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.posts)
    var postsRaw = data.posts
   var sorted = postsRaw.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0 ));
   this.posts = sorted.reverse()
   console.log(sorted)

  }
  );
}
}
</script>

<style scoped>

h1 {
  text-shadow: 2px 2px red;
}
.blogwrap {
  max-width: 580px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.blog {
    display: flex;
    flex-wrap: wrap;
    min-width: 125px;
    justify-content: center;
    align-items: center;
}

</style>