<template>
  <div class="card">
    <div class="grid formgrid">
      <div class="field col-12 md:col-6 md:pr-6 pr-0">
        <div class="custom-skeleton p-4">
          <div class="flex mb-3">
            <Skeleton
              shape="circle"
              size="4rem"
              class="mr-2 bg-gray-200"
            ></Skeleton>
            <div>
              <Skeleton width="10rem" class="mb-2 bg-gray-200"></Skeleton>
              <Skeleton width="5rem" class="mb-2 bg-gray-200"></Skeleton>
              <Skeleton height=".5rem" class="bg-gray-200"></Skeleton>
            </div>
          </div>
          <Skeleton width="100%" height="150px" class="bg-gray-200"></Skeleton>
          <div class="flex justify-content-center mt-3">
            <Skeleton width="4rem" height="2rem" class="bg-gray-200"></Skeleton>
            <Skeleton width="4rem" height="2rem" class="bg-gray-200"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="field col-12 md:col-6">
    <Skeleton class="mb-2 bg-gray-200"></Skeleton>
    <Skeleton width="10rem" class="mb-2 bg-gray-200"></Skeleton>
    <Skeleton width="5rem" class="mb-2 bg-gray-200"></Skeleton>
    <Skeleton height="2rem" class="mb-2 bg-gray-200"></Skeleton>
    <Skeleton width="10rem" height="4rem bg-gray-200"></Skeleton>
  </div>
</template>
<script lang="ts" setup>
import Skeleton from "primevue/skeleton";
</script>
