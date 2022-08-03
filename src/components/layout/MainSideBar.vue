<template>
  <div class="flex flex-col relative" :class="{ 'w-[265px]': isSidebarOpen }">
    <div
      class="flex justify-center font-bold bg-primary-grey p-4 text-white border-dotted border-indigo-200/20 border-[#9896a0] border-b-2"
    >
      <router-link to="/">
        <span>Z</span><span v-if="isSidebarOpen">ISIS BLOG</span></router-link
      >
      <Button
        @click="toggleSidebar"
        icon="pi pi-angle-left"
        class="p-button-rounded !border-black !border-[1px] !text-xs !absolute !bg-white !rounded-full !flex !justify-center !items-center !text-red-500 -right-3 !w-[24px] !h-[24px] !p-0 !shadow-md !transition !duration-500"
        :class="{ 'rotate-180': !isSidebarOpen }"
      />
    </div>
    <div
      class="flex flex-col h-full w-full items-start p-4 gap-4 flex-start bg-primary-grey text-[#9896a0]"
    >
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="flex gap-2 items-center hover:text-white transition"
        :class="{ 'text-white': route.path == item.link }"
      >
        <router-link
          class="flex gap-2 items-center hover:text-white transition"
          :to="item.link"
        >
          <i :class="[`pi pi-${item.icon}`]"></i
          ><span v-if="isSidebarOpen"> {{ item.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";
import Button from "primevue/button";
import { useRoute } from "vue-router";

const isSidebarOpen: Ref<boolean> = ref(true);

const route = useRoute();

const toggleSidebar = (): boolean =>
  (isSidebarOpen.value = !isSidebarOpen.value);

const menuItems = [
  {
    link: "/users",
    icon: "users",
    title: "Users",
  },
  {
    link: "/posts",
    icon: "file",
    title: "Posts",
  },

  {
    link: "/comments",
    icon: "comment",
    title: "Comments",
  },
];
</script>
