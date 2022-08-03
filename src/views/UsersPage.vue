<template>
  <div class="w-full">
    <div class="grid md:grid-cols-4 grid-cols-1 gap-4">
      <div v-for="item in totalUsers.data" :key="item.id">
        <user-card :user="item"></user-card>
      </div>
    </div>

    <div class="flex justify-center">
      <Paginator
        :rows="10"
        :totalRecords="totalUsers.total"
        :rowsPerPageOptions="[10, 20, 30, 40, 50]"
        @page="onPage($event)"
      >
      </Paginator>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserCard from "@/components/UserCard.vue";
import Paginator from "primevue/paginator";
import { Store, useStore } from "vuex";
import { onMounted, computed, Ref, ref } from "vue";
import { PaginatorEvent } from "@/interfaces/PaginatorEvent";

const store: Store<any> = useStore();
const page: Ref<number> = ref(0);
const rows: Ref<number> = ref(10);

const totalUsers = computed(() => {
  return store.getters["getUsers"];
});

const onPage = (event: PaginatorEvent) => {
  store.dispatch("setUsersByPage", { page: event.page, limit: event.rows });

  page.value = event.page;
  rows.value = event.rows;
};

onMounted(() => {
  store.dispatch("setUsersByPage", { page: page.value, limit: rows.value });
});
</script>
