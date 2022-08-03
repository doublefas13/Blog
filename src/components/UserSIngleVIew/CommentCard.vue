<template>
  <div class="flex shadow-lg rounded-lg p-2 overflow-hidden">
    <div class="flex gap-2 flex-row">
      <div>
        <img
          class="w-[40px] h-[40px] rounded-full"
          :src="comment?.owner.picture"
          alt=""
        />
      </div>

      <div class="flex flex-col">
        <div class="flex gap-2 flex-row">
          <span class="text-[1rem] font-[500]">
            {{ comment?.owner.firstName }} {{ comment?.owner.lastName }}
          </span>
          <span class="text-[0.7rem] mt-1 flex items-center">{{
            moment(comment?.publishDate).fromNow()
          }}</span>
        </div>
        <div>"{{ comment?.message }}"</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

import moment from "moment";

defineProps({
  comment: {
    type: Object,
  },
});
</script>
