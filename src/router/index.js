import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/email-campaigns",
  },
  {
    path: "/all-leads",
    name: "all-leads",
    component: () =>
      import(/* webpackChunkName: "all-leads" */ "../views/AllLeads.vue"),
  },
  {
    path: "/master-inbox",
    name: "master-inbox",
    component: () =>
      import(/* webpackChunkName: "master-inbox" */ "../views/MasterInbox.vue"),
  },
  {
    path: "/email-campaigns",
    name: "email-campaigns",
    component: () =>
      import(
        /* webpackChunkName: "email-campaigns" */ "../views/EmailCampaigns.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/email-campaigns",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
