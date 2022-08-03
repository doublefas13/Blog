<template>
  <div>
    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-col-12 gap-4">
      <div v-for="post in allPosts.data" :key="post.id">
        <PostCard class="min-w-[440px]" :post="post"></PostCard>
      </div>
    </div>
    <div class="flex justify-center">
      <Paginator
        :rows="10"
        :totalRecords="allPosts.total"
        :rowsPerPageOptions="[10, 20, 30, 40, 50]"
        @page="onPage($event)"
      >
      </Paginator>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Paginator from "primevue/paginator";
import { Store, useStore } from "vuex";
import { onMounted, computed, Ref, ref } from "vue";
import { PaginatorEvent } from "@/interfaces/PaginatorEvent";
import PostCard from "@/components/UserSIngleVIew/PostCard.vue";

const store: Store<any> = useStore();
const page: Ref<number> = ref(0);
const rows: Ref<number> = ref(10);

const allPosts = computed(() => {
  return store.getters["getPosts"];
});

const onPage = (event: PaginatorEvent) => {
  store.dispatch("setStorePostsResults", {
    page: event.page,
    limit: event.rows,
  });

  page.value = event.page;
  rows.value = event.rows;
};

onMounted(() => {
  store.dispatch("setStorePostsResults", {
    page: page.value,
    limit: rows.value,
  });
});
</script>
