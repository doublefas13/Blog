<template>
  <div
    class="flex flex-col border-solid border-[0px] gap-4 rounded-md overflow-hidden border-black shadow-lg"
  >
    <div class="h-[50px] bg-primary-grey"></div>
    <div class="flex justify-center">
      <img
        class="w-[80px] h-[80px] -mt-14 rounded-full shadow-lg"
        :src="user.picture"
        alt=""
      />
    </div>
    <div class="flex flex-col mb-4 text-center">
      <div class="font-bold text-lg">
        {{ user.firstName }} {{ user.lastName }}
      </div>
      <div class="text-sm">{{ user.title }}</div>
      <div>
        <router-link :to="`user/${user.id}`">
          <Button
            label="Info"
            class="p-button-rounded !bg-red-600 !border-red-600 py-0 p-button-info"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import Button from "primevue/button";

defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
