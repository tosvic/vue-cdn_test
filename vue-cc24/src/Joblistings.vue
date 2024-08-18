<script setup>
import jobData from '@/jobs.json'
import { ref, defineProps } from "vue";
import JobList from "./JobList.vue";

const jobs = ref(jobData);
// console.log(jobs.value);

defineProps({
  limit: Number
})
</script>

<template>
  <section class="bg-yellow-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-yellow-500 mb-6 text-center">Browse Jobs</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <JobList v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
</template>