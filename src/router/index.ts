import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsersPage from "../views/UsersPage.vue";
import CommentsView from "../views/CommentsView.vue";
import PostsView from "../views/PostsView.vue";
import UserSingleView from "../views/UserSingleView.vue";
import SinglePost from "../views/SinglePost.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/users",
    name: "users",
    component: UsersPage,
  },

  {
    path: "/user/:id",
    name: "userSingle",
    component: UserSingleView,
  },

  {
    path: "/comments",
    name: "comments",
    component: CommentsView,
  },

  {
    path: "/posts",
    name: "posts",
    component: PostsView,
  },

  {
    path: "/post/:id",
    name: "SinglePost",
    component: SinglePost,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
