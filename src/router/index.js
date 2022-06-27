import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SitesIndex from "../views/SitesIndex.vue";
import SitesShow from "../views/SitesShow.vue";
import SitesNew from "../views/SitesNew.vue";
import SitesEdit from "../views/SitesEdit.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sites",
    name: "sites-index",
    component: SitesIndex,
  },
  {
    path: "/sites/:id",
    name: "sites-show",
    component: SitesShow,
  },
  {
    path: "/sites/new",
    name: "sites-new",
    component: SitesNew,
  },
  {
    path: "/sites/:id/edit",
    name: "sites-edit",
    component: SitesEdit,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
