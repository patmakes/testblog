<template>
  <router-link :to="{ name: 'BlogShow', params: { id: post.id } }">
  <div class="blog-card -shadow" :style="{ backgroundImage: 'url(' + post.Image + ')' }">
    <BaseIcon name="note"/>
    <!-- <h4 class="title">{{ post.title }}</h4> -->
    <!-- <span class="eyebrow">{{ post.date }}</span> -->
  </div>
  </router-link>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  components: {
    BaseIcon,
  },
  props: {
    post: Object,
  }
}
    </script>

<style scoped>

h4 {
    color: #f15b26;;
    font-size: 10pt;
}
.blog-card {
      padding: 10px;
      margin-bottom: 24px;
      transition: all 0.2s linear;
      cursor: pointer;
      min-height: 150px;
      min-width: 150px;
      max-width: 200px;
      max-height: 200px;
      background-size: cover;
      display: flex;
      flex: wrap;
      align-items: flex-start;
      justify-content: top;
    }
    .blog-card:hover {
      transform: scale(1.29);
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
      position: relative;
      z-index: 2;
    }
    .blog-card > .title {
      margin: 0;
      opacity: 75%;
    }
    
    .blog-link {
      color: black;
      text-decoration: none;
      font-weight: 100;
    }
</style>