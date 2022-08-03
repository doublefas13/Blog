<template>
  <CardBasic
    class="flex flex-col gap-4 max-h-[800px] justify-center min-h-[400px]"
  >
    <div
      class="bg-no-repeat bg-center overflow-hidden bg-cover w-[470px] h-full min-h-[400px]"
      :style="{
        'background-image': `url(${post?.image})`,
      }"
    ></div>

    <div class="flex p-2 gap-1 flex-row">
      <div>
        <img
          class="w-[30px] h-[30px] rounded-full"
          :src="post?.owner.picture"
          alt=""
        />
      </div>

      <div class="flex flex-row justify-between w-full items-center">
        <div class="flex text-sm font-semibold items-center">
          {{ post?.owner.firstName }} {{ post?.owner.lastName }}
        </div>
        <div class="flex gap-1 flex-row">
          <div class="text-sm font-medium">likes:</div>
          <div class="text-sm">{{ post?.likes }}</div>
          <div @click="likePost()">
            <i
              class="pi cursor-pointer text-red-600"
              :class="{ 'pi-heart': !isLiked, 'pi-heart-fill': isLiked }"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div
        class="flex font-thin whitespace-nowrap overflow-hidden text-ellipsis"
      >
        '{{ post?.text }}'
      </div>
      <div class="flex flex-row gap-1 text-sm text-primary-grey p-4">
        <div v-for="(tags, index) in post?.tags" :key="index">#{{ tags }}</div>
      </div>
    </div>
  </CardBasic>
</template>

<script lang="ts" setup>
import { defineProps, computed, ref } from "vue";
import CardBasic from "@/components/BasicComponents/CardBasic.vue";
import "primeicons/primeicons.css";

const storage = ref(window.localStorage.getItem("likeStorage") || "");

const isLiked = computed(() => {
  const oldArray = JSON.parse(storage.value);
  return oldArray.includes(props.post?.id);
});

const likePost = () => {
  if (!window.localStorage.getItem("likeStorage")) {
    window.localStorage.setItem("likeStorage", JSON.stringify([]));
  }

  const oldArray = JSON.parse(window.localStorage.getItem("likeStorage") || "");
  const temp = oldArray.indexOf(props?.post?.id) || 0;

  if (temp == -1) {
    oldArray.push(props?.post?.id);
    storage.value = JSON.stringify(oldArray);
    return window.localStorage.setItem("likeStorage", JSON.stringify(oldArray));
  }

  oldArray.splice(temp, 1);
  storage.value = JSON.stringify(oldArray);
  return window.localStorage.setItem("likeStorage", JSON.stringify(oldArray));
};

const props = defineProps({
  post: {
    type: Object,
  },
});
</script>
