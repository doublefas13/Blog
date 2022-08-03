import { createStore } from "vuex";
import { axios } from "@/plugins/axios";
export default createStore({
  state: {
    UsersResults: [],
    postsResults: [],
  },
  getters: {
    getUsers(state) {
      return state.UsersResults;
    },

    getPosts(state) {
      return state.postsResults;
    },
  },

  actions: {
    async setUsersByPage({ commit }, { page, limit }) {
      const { data } = await axios.get(`user?page=${page}&limit=${limit}`);

      commit("setStoreUsersResults", data);
    },

    async setStorePostsResults({ commit }, { page, limit }) {
      const { data } = await axios.get(`post?page=${page}&limit=${limit}`);

      commit("setStorePostsResults", data);
    },

    async setNewComment(store, comment) {
      await axios.post(`comment/create`, {
        message: comment.message,
        owner: comment.owner,
        post: comment.postId,
      });
    },
  },

  mutations: {
    setStoreUsersResults(state, UsersResults) {
      return (state.UsersResults = UsersResults);
    },

    setStorePostsResults(state, postsResults) {
      return (state.postsResults = postsResults);
    },
  },
});
