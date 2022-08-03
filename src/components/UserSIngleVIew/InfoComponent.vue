<template>
  <div
    class="flex flex-col gap-2 p-4 text-start border-[2px] bg-white border-gray-200 shadow-md rounded-lg overflow-hidden"
  >
    <div class="underline underline-offset-2">
      <span class="font-bold"> Gender: </span>{{ item?.gender }}
    </div>
    <div class="underline underline-offset-2">
      <span class="font-bold">Birthday: </span>
      {{ moment(item?.dateOfBirth).format("MMM Do YY, h:mm:ss a") }}
    </div>
    <div class="underline underline-offset-2">
      <span class="font-bold">Account register date:</span>
      {{ moment(item?.registerDate).format("MMM Do YY, h:mm:ss a") }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import moment from "moment";
import { defineProps } from "vue";

defineProps({
  item: {
    type: Object,
  },
});
</script>
