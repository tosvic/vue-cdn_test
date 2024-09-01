<script setup>
import Hero from "@/components/Hero.vue";
import HomeCard from "@/components/HomeCard.vue";
import JobList from "@/components/JobList.vue";
import Joblistings from "@/components/Joblistings.vue";
</script>

<template>
  <Hero title="hello peole" subtitle="chilling with props"/>
  <HomeCard />
  <!-- <JobList /> -->
  <Joblistings :limit="3" :showButton="true" />
</template>