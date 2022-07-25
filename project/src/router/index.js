import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import AboutView from "../views/AboutView.vue";
import CosplayView from "../views/CosplayView.vue";
import DrawView from "../views/DrawView.vue";
import GamingView from "../views/GamingView.vue";
import MentionsView from "../views/MentionsView.vue";
import PapercraftView from "../views/PapercraftView.vue";
import ConventionView from "../views/ConventionView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },

  {
    path: "/convention",
    name: "ConventionView",
    component: ConventionView,
  },
  {
    path: "/cosplay",
    name: "CosplayView",
    component: CosplayView,
  },
  {
    path: "/dessin",
    name: "DrawView",
    component: DrawView,
  },
  {
    path: "/gaming",
    name: "GamingView",
    component: GamingView,
  },
  {
    path: "/mentions",
    name: "MentionsView",
    component: MentionsView,
  },
  {
    path: "/papercraft",
    name: "PapercraftView",
    component: PapercraftView,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  routes,
});




export default router;
