import Home from "@/pages/Home";
import End from "@/pages/End";
import Quiz1 from "@/pages/Quiz1";
import Quiz2 from "@/pages/Quiz2";
import Quiz3 from "@/pages/Quiz3";
import Quiz4 from "@/pages/Quiz4";
import Quiz5 from "@/pages/Quiz5";
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/quiz1",
      name: "Quiz1",
      component: Quiz1
    },
    {
      path: "/quiz2",
      name: "Quiz2",
      component: Quiz2
    },
    {
      path: "/quiz3",
      name: "Quiz3",
      component: Quiz3
    },
    {
      path: "/quiz4",
      name: "Quiz4",
      component: Quiz4
    },
    {
      path: "/quiz5",
      name: "Quiz5",
      component: Quiz5
    },
    {
      path: "/end",
      name: "End",
      component: End
    }
  ]
})
//Vue.use(Router);
export default router