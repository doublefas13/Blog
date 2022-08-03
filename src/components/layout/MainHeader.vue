<template>
  <header
    class="flex py-2 px-6 w-full shadow-md flex-row items-center justify-between"
  >
    <span>HOME</span>
    <span>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          class="p-inputtext-sm !py-2 focus:border-red-500"
          type="text"
          placeholder="Search"
        />
      </span>
    </span>
    <div class="flex item-center gap-2">
      <Avatar shape="circle" image="https://i.pravatar.cc/300" />
      <div class="h-1 mt-1.5 text-sm">hello user</div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
</script>
