<template>
  <div>
    <div v-if="loading"><loading-component></loading-component></div>
    <div v-if="!userResults && !loading">no user found</div>
    <div v-else>
      <user-profile :user="userResults"></user-profile>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { axios } from "@/plugins/axios";
import { ref, onMounted } from "vue";
import loadingComponent from "../components/UserSIngleVIew/LoadingComponent.vue";
import userProfile from "../components/UserSIngleVIew/UserProfile.vue";

const route = useRoute();

const userResults = ref();
const loading = ref(false);

const id = route.params.id;

onMounted(async () => {
  loading.value = true;
  try {
    const results = await axios.get(`user/${id}`);
    userResults.value = results.data;
  } catch (error) {
    alert("No user found");
  } finally {
    loading.value = false;
  }
});
</script>
