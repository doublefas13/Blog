<template>
  <div class="flex flex-col gap-10 m-4">
    <div
      class="flex flex-col items-center container"
      v-for="post in posts"
      :key="post.id"
    >
      <post-card-vue :post="post"></post-card-vue>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { axios } from "@/plugins/axios";
import PostCardVue from "./PostCard.vue";

const route = useRoute();

const id = route.params.id;

const posts = ref();

onMounted(async () => {
  const results = await axios.get(`user/${id}/post`);
  posts.value = results.data.data;
});
</script>
