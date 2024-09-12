import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import jobView from "@/views/jobView.vue";
import AddJob from "@/views/AddJob.vue";
import EditJob from "@/views/EditJob.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },

    {
      path: '/jobs/:id',
      name: 'job',
      component: jobView,
    },

    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJob,
    },

    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJob
    },

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
});

export default router