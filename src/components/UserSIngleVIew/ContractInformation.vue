<template>
  <div
    class="flex flex-col gap-2 p-4 text-start border-[2px] bg-white border-gray-200 shadow-md rounded-lg overflow-hidden"
  >
    <div class="underline underline-offset-2">
      <span class="font-bold">email:</span> {{ item?.email }}
    </div>
    <div class="underline underline-offset-2">
      <span class="font-bold">phone number:</span> {{ item?.phone }}
    </div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  item: {
    type: Object,
  },
});
</script>
