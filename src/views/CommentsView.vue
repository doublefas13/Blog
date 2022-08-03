<template>
  <div class="flex flex-col gap-4 mt-4">
    <div
      class="flex justify-center"
      v-for="comment in allComments?.data"
      :key="comment.id"
    >
      <CommentCard class="flex w-[600px]" :comment="comment"></CommentCard>
    </div>
    <div class="flex justify-center">
      <Paginator
        :rows="10"
        :totalRecords="allComments?.total"
        :rowsPerPageOptions="[10, 20, 30, 40, 50]"
        @page="onPage($event)"
      >
      </Paginator>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Paginator from "primevue/paginator";
import { PaginatorEvent } from "@/interfaces/PaginatorEvent";
import { onMounted, Ref, ref } from "vue";
import CommentCard from "../components/UserSIngleVIew/CommentCard.vue";

import { axios } from "@/plugins/axios";

const allComments = ref();
const page: Ref<number> = ref(0);
const rows: Ref<number> = ref(10);

const onPage = (event: PaginatorEvent) => {
  page.value = event.page;
  rows.value = event.rows;

  fetchComments();
};

const fetchComments = async () => {
  const results = await axios.get(
    `comment?page=${page.value}&limit=${rows.value}`
  );
  allComments.value = results.data;
};

onMounted(async () => {
  const results = await axios.get(
    `comment?page=${page.value}&limit=${rows.value}`
  );
  allComments.value = results.data;
});
</script>
