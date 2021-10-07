import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import BlogShow from "../views/BlogShow.vue";
import PostCreate from "../views/PostCreate.vue";
import NotFoundComponent from "../components/NotFoundComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:id",
    name: "BlogShow",
    component: BlogShow,
    props: true,
  },
  {
    path: "blog/create",
    name: "PostCreate",
    component: PostCreate,
  },
  {
    path: "*",
    component: NotFoundComponent,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
