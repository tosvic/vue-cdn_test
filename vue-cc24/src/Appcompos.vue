<!-- Compostion API -->
<script setup>
import { ref } from "vue";

const name = ref("vite vic");
const status = ref("pendin");
const task = ref(['task 1', 'task 2', 'task 3', 'task 4']);
const link = 'https://google.com';

const toggleStatus = () => {
    if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active'
    }    
}

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

    <!-- using methods -->
     <button v-on:click="toggleStatus">show status</button>
     <!-- another way to do event is using the @ symbol -->
     <button @click="toggleStatus">show status</button>
</template>