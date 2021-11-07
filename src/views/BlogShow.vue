<template>
  <div class="blogshow">
    <h1>{{ post.title }}</h1>
    <span>{{ post.date }}</span>
    <div class="blogContent">
      <img class="blogPic" :src="post.Image">
     <p class="blogWords" v-html="post.Content" :post="post">
    </p>
    </div>
    
  </div>
</template>
<script>
// import BlogService from '@/services/BlogService.js';

export default {
  props: ['id'], post: Object,
  data() {
  return {
    post: {}
  }
},
created() {
 fetch('https://raw.githubusercontent.com/patmakesmusic/pmmBlogger/main/blogdb.json')
  .then(response => response.json())
  .then(data => console.log(data));
}

}
</script>

<style scoped>
.blogPic {
  width: 45%;
    position: static;
    margin: 15px;
    z-index: 0;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.blogWords {
  float: left;
  font-size: 15pt;
  
}
.blogContent {
    text-align: left;
    border-radius: 5pt;
    padding: 20px;
    margin: 5px auto 100px auto;
    width: 80vw;
    max-width: 800px;
    line-height: 1.4;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

</style>
