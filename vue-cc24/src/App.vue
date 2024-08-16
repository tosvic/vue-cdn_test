<script>
export default {
  data() {
    return {
      name: "vite vic",
      status: "pendin",
      task: ['task 1', 'task 2', 'task 3', 'task 4'],
      link: 'https://google.com'
    };
  },
};
</script>
<template>
  <!-- Conditonal Directives -->
  <h1>{{ name }}</h1>
  <p v-if="status ==='active'">User is active</p>
  <p v-else-if="status ==='pending'">User pending</p>
  <p v-else>user is inactive</p>

  <!-- iterating items {for  loop} -->
    <h3>Tasks:</h3>
    <ul>
      <li v-for="i in task" :key="i">{{ i }}</li>
    </ul>

    <!-- v-bind (e.g for links) -->
     <a v-bind:href="link">for google page</a>
    <!-- shorter way to bind -->
    <a :href="link">for google page</a> 
</template>