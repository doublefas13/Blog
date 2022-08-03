<template>
  <div class="flex gap-4 flex-col items-center container mt-4">
    <post-card class="max-w-[470px]" :post="postResults"></post-card>
    <div
      class="flex gap-4 flex-col items-center"
      :class="{ 'opacity-25 pointer-events-none': loading }"
    >
      <div
        class="flex w-full justify-center"
        v-for="comment in comments"
        :key="comment.id"
      >
        <div class="flex">
          <comment-card class="w-[470px]" :comment="comment"></comment-card>
        </div>
      </div>

      <div>
        <h5>Add comment</h5>
        <InputText
          @keypress.enter="addComment"
          type="text"
          v-model="newMessage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { axios } from "@/plugins/axios";
import { onMounted, ref, computed } from "vue";
import PostCard from "@/components/UserSIngleVIew/SinglePostCard.vue";
import CommentCard from "@/components/UserSIngleVIew/CommentCard.vue";
import InputText from "primevue/inputtext";
import { useStore } from "vuex";

const store = useStore();
const newMessage = ref();
const postResults = ref();
const comments = ref();
const route = useRoute();
const id = route.params.id;
const loading = ref(false);
const fetchComments = async () => {
  const result1 = await axios.get(`post/${id}/comment`);
  comments.value = result1.data.data;
};

onMounted(async () => {
  const results = await axios.get(`post/${id}`);
  postResults.value = results.data;

  fetchComments();
});

const addComment = async () => {
  if (!commentIsValid.value || loading.value) return;

  loading.value = true;
  const newComment = {
    message: newMessage.value,
    owner: "60d0fe4f5311236168a109ca",
    postId: id,
  };

  await store.dispatch("setNewComment", newComment);
  await fetchComments();
  newMessage.value = "";
  loading.value = false;
};

const commentIsValid = computed((): boolean => newMessage.value.length >= 2);
</script>
<style>
.p-inputtext:enabled:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 1px rgb(30 30 45) !important;
  border-color: rgb(30 30 45) !important ;
}
</style>
