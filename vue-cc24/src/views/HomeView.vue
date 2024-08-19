<script setup>
import Hero from "@/Hero.vue";
import HomeCard from "@/HomeCard.vue";
import JobList from "@/JobList.vue";
import Joblistings from "@/Joblistings.vue";
</script>

<template>
  <Hero title="hello peole" subtitle="chilling with props"/>
  <HomeCard />
  <!-- <JobList /> -->
  <Joblistings :limit="3" :showButton="true" />
</template>