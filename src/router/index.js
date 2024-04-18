import { createRouter, createWebHistory } from "vue-router";
import mainPage from "@/pages/mainPage.vue";
import QuizPage from "@/pages/quizPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: mainPage,
    },
    {
      path: "/quiz",
      name: "quiz",
      component: QuizPage,
    },
  ],
});

export default router;
