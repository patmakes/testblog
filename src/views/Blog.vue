<template>
<div>
  <div v-if="currentPost.id>=0">
    <div class="blogshow" id="blogshow">
      <a href="#" class="previous" @click="reset()" id="top">&laquo;</a>
    <h1>{{ currentPost.title }}</h1>
    <span>{{ currentPost.date }}</span>
    <div class="blogContent">
      <img class="blogPic" :src="currentPost.Image">
     <p class="blogWords" v-html="currentPost.Content" :post="post">
    </p>
    </div>
  </div>
  </div>
<div v-else>
  <div class="blogwrap">
    <h1>Pat Makes Posts</h1>
    <div class="blog">
      <div class="cardWrap" v-for="post in posts" 
    :key="post.id"
     :post="post"
     @click="setActivePost(post)">
    <BlogCard :post="post"/>
      </div>
    </div>
  </div>
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
        currentPost: {},
        // currentIndex: -1,
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
  },
  );
},
methods: {
    setActivePost(post) {
      window.scrollTo(0,0); 
      this.currentPost = post
      console.log("I'm working") 
        },
        reset() {
          this.currentPost = {}
        }
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
a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous {
  background-color: #f1f1f1;
  color: black;
  justify-content: right;
}

.next {
  background-color: #04AA6D;
  color: white;
}

.round {
  border-radius: 50%;
}
</style>