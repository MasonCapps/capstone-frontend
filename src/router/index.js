import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SitesIndex from "../views/SitesIndex.vue";
import SitesShow from "../views/SitesShow.vue";
import SitesNew from "../views/SitesNew.vue";
import SitesEdit from "../views/SitesEdit.vue";
import DashboardView from "../views/DashboardView.vue";
import OrdersIndex from "../views/OrdersIndex.vue";
import ScheduleView from "../views/ScheduleView.vue";
import SignupView from "../views/SignupView.vue";
import CustomerSignupView from "../views/CustomerSignupView.vue";
import CustomerLoginView from "../views/CustomerLoginView.vue";
import CustomerLogoutView from "../views/CustomerLogoutView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import CartIndex from "../views/CartIndex.vue";
import OrderHistory from "../views/OrderHistory.vue";

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
    path: "/sites/dashboard/:siteId",
    name: "dashboard",
    component: DashboardView,
    props: true,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersIndex,
  },
  {
    path: "/orders-history",
    name: "orders-history",
    component: OrderHistory,
  },
  {
    path: "/schedule",
    name: "schedule",
    component: ScheduleView,
  },
  {
    path: "/carted_services",
    name: "cart",
    component: CartIndex,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/signup-customer",
    name: "signup-customer",
    component: CustomerSignupView,
  },
  {
    path: "/login-customer",
    name: "login-customer",
    component: CustomerLoginView,
  },
  {
    path: "/logout-customer",
    name: "logout-customer",
    component: CustomerLogoutView,
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
