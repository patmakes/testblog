<template>
    <div class="blog-card">
  <div class="blog-image -shadow" :style="{ backgroundImage: 'url(' + post.Image + ')' }">
    
    </div>
    <div class="text-wrap">
    <span class="title">{{ post.title }}</span>
    <span class="date">{{post.date}}</span>
    </div>
  </div>
</template>

<script>
// import BaseIcon from './BaseIcon.vue';

export default {
  components: {
    // BaseIcon,
  },
  props: {
    post: Object,
  }
}
    </script>

<style scoped>

.note {
  color: black;
}

a {
  text-decoration: none;
}

.title {
    color: #323232;
    font-size: 8pt;
    text-align: center;
    padding: 4px 0px 0px 0px;
    /* border-radius: 5pt; */
    font-family: 'Arial', sans-serif;
    font-weight: bolder;
    max-width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.blog-card {
      padding: 5px;
      margin-bottom: 12px;
      transition: all 0.2s linear;
      cursor: pointer;
      min-height: 190px;
      min-width: 150px;
      max-width: 160px;
      max-height: 210px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

    }
    .blog-card:hover {
      transform: scale(1.1);
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
      position: relative;
      z-index: 2;
    }
    .blog-card > .title {
      margin: 0;
      /* opacity: 75%; */
    }

    .blog-image {
      height: 150px;
      width: 150px;
      background-size: cover;
      display: flex;
      flex: wrap;
      align-items: flex-start;
      justify-content: top;
      text-align: center;
      margin-top: 10px;
    }
    
    .blog-link {
      color: black;
      text-decoration: none;
      font-weight: 100;
    }
    .date {
      color: #323232;
      font-size: 6pt;
      position: relative;
      align-self: flex-end;
      font-weight: lighter;
      font-style: italic;

    }
    .text-wrap {
      text-align: center;
    }
</style>