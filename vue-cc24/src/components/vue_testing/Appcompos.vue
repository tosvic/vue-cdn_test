<!-- Compostion API -->
<script setup>
import { onMounted, ref } from "vue";

const name = ref("vite vic");
const status = ref("pendin");
const task = ref(['task 1', 'task 2', 'task 3', 'task 4']);
const link = 'https://google.com';
const newTask = ref('');

const toggleStatus = () => {
    if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active'
    }    
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    task.value.push(newTask.value);
    newTask.value = '';
  }
};

const delTask = (index) => [
  task.value.splice(index, 1)
]

// fetching json placeholder data
onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    task.value = data.map((task) => task.title);
    
  } catch (error) {
    console.log('Error fetching tasks');
    
  }
})
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
      <li v-for="(i, index) in task" :key="i">
        <span>{{ i }}</span>
        <button @click="delTask(index)">x</button>
      </li>
    </ul>

    <!-- v-bind (e.g for links) -->
     <a v-bind:href="link">for google page</a>
    <!-- shorter way to bind -->
    <a :href="link">for google page</a> 

    <!-- using methods -->
     <button v-on:click="toggleStatus">show status</button>
     <!-- another way to do event is using the @ symbol -->
     <button @click="toggleStatus">show status</button>

     <!-- form -->
      <br>
      <form @submit.prevent="addTask">
        <label for="newTask">Add Task</label><br>
        <input type="text" id="newTask" name="newTask" v-model="newTask" />
        <button type="submit">submit</button>
      </form>
</template>