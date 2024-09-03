<script setup>
// import jobData from '@/jobs.json'
import {reactive, defineProps, onMounted } from "vue";
import JobList from "./JobList.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios"; 

// const jobs = ref(jobData);
// console.log(jobs.value);

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  }
});

// const jobs = ref([]);
const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('/api//jobs');
    // jobs.value = response.data;
    state.jobs = response.data;
  } catch (error) {
    console.log('Error fetching jobs', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-yellow-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-yellow-500 mb-6 text-center">Browse Jobs</h2>
      <!-- spinner loader -->
       <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
       </div>

       <!-- when done loading -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <!-- <JobList v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" /> -->
        <JobList v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All
      Jobs</RouterLink>
  </section>
</template>