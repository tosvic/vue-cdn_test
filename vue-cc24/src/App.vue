<script setup>
import Navbar from "./Navbar.vue";
import Hero from "./Hero.vue";
import HomeCard from "./HomeCard.vue";
import JobList from "./JobList.vue";
import Joblistings from "./Joblistings.vue";
</script>

<template>
  <Navbar />
  <Hero title="hello peole" subtitle="chilling with props"/>
  <HomeCard />
  <!-- <JobList /> -->
  <Joblistings :limit="0" />
</template> 