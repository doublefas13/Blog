<template>
  <div class="flex h-full flex-col">
    <div class="flex flex-row w-full h-full">
      <div class="flex">
        <main-side-bar />
      </div>
      <div class="flex w-full flex-col flex-1">
        <main-header />
        <div
          class="flex w-full p-4 overflow-scroll h-full overflow-x-hidden justify-center items-start bg-[#f6f6f6]"
        >
          <router-view class="container" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MainHeader from "./components/layout/MainHeader.vue";
import MainSideBar from "./components/layout/MainSideBar.vue";
</script>
