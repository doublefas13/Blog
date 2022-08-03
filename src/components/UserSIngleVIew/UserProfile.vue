<template>
  <div
    v-if="user"
    class="flex flex-col shadow-md rounded-lg overflow-hidden mb-4"
  >
    <div>
      <div
        class="bg-no-repeat bg-cover rounded-lg overflow-hidden"
        :style="{
          'background-image': `url(https://media.istockphoto.com/photos/watercolor-painting-background-picture-id1179822347?k=20&m=1179822347&s=170667a&w=0&h=CMJqOii7gY91oHop5lXtQBL5-4wM0ZIjhcIj3G3vYxc=)`,
          width: '100%',
          height: '150px',
        }"
      ></div>
    </div>

    <div class="-mt-16 ml-4 flex flex-row">
      <img
        class="rounded-full border-[2px] w-[132px] h-[132px] border-white"
        :src="user?.picture"
        alt=""
      />
    </div>

    <div class="flex flex-col ml-60 -mt-5 mb-5">
      <div class="flex flex-row justify-between pr-4">
        <div>
          <span class="text-[#666666]">{{ user?.title }}</span> .<span
            class="text-4xl font-bold"
            >{{ user?.firstName }} {{ user?.lastName }}</span
          >
        </div>
        <div>
          <Button
            label="send message"
            class="p-button-raised border-0 !bg-primary-grey !shadow-md !w-[150px] p-button-rounded hover:!shadow-lg transition"
          />
        </div>
      </div>
      <div class="text-[#666666] text-sm">
        {{ user?.location.city }}, {{ user?.location.country }}
      </div>
      <div class="text-[#666666] text-sm">
        {{ user?.location.street }}, {{ user?.location.state }}
      </div>
    </div>
  </div>

  <div
    v-if="user"
    class="flex flex-col shadow-none rounded-lg overflow-hidden card"
  >
    <TabMenu :model="items" v-model:activeIndex="activeTab" class=" ">
    </TabMenu>
    <div class="mt-4">
      <component :is="activeComponent" :item="user"></component>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref } from "vue";
import TabMenu from "primevue/tabmenu";
import Button from "primevue/button";
import InfoComponent from "./InfoComponent.vue";
import ContractInformation from "./ContractInformation.vue";
import UserPosts from "./UserPosts.vue";
import UserComments from "./UserComments.vue";

const activeTab = ref(0);

const activeComponent = computed(() => {
  return items[activeTab.value].component;
});

const items = [
  {
    label: "info",
    icon: "pi pi-fw pi-info",
    component: InfoComponent,
  },

  {
    label: "Contact Information",
    icon: "pi pi-fw pi-briefcase",
    component: ContractInformation,
  },

  {
    label: "posts",
    icon: "pi pi-fw pi-file",
    component: UserPosts,
  },

  {
    label: "comments",
    icon: "pi pi-fw pi-comments",
    component: UserComments,
  },
];

defineProps({
  user: {
    type: Object,
  },
});
</script>
<style>
.p-paginator {
  background: transparent !important;
}

.p-highlight {
  background-color: rgb(214, 212, 212) !important;
  border-color: black !important;
  color: black !important;
}

.p-link:focus {
  box-shadow: 0;
}
.p-focus {
  box-shadow: 0 !important;
  border-color: black !important ;
}
</style>
