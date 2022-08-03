<template>
  <div class="flex flex-col gap-4 p-4">
    <div v-for="comment in comments" :key="comment.id">
      <comment-card :comment="comment"></comment-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { axios } from "@/plugins/axios";
import CommentCard from "./CommentCard.vue";

const route = useRoute();

const id = route.params.id;

const comments = ref([]);

onMounted(async () => {
  const results = await axios.get(`user/${id}/comment`);
  comments.value = results.data.data;
});
</script>
