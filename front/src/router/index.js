import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TypesView from "../views/TypesView.vue";
import NewtypesView from "../views/NewtypesView.vue";
import CapacitesView from "../views/CapacitesView.vue";
import NewcapacitesView from "../views/NewcapacitesView.vue";
import CardsView from "../views/CardsView.vue";
import NewcardsView from "../views/NewcardsView.vue";
import ClassesView from "../views/ClassesView.vue";
import NewclassesView from "../views/NewclassesView.vue";
import CompetencesView from "../views/CompetencesView.vue";
import NewcompetencesView from "../views/NewcompetencesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/types",
      name: "type",
      component: TypesView,
    },
    {
      path: "/types/new-types",
      name: "new-type",
      component: NewtypesView,
    },
    {
      path: "/capacites",
      name: "capacites",
      component: CapacitesView,
    },
    {
      path: "/capacites/new-capacites",
      name: "new-capacites",
      component: NewcapacitesView,
    },
    {
      path: "/classes",
      name: "classes",
      component: ClassesView,
    },
    {
      path: "/classes/new-classes",
      name: "new-classes",
      component: NewclassesView,
    },
    {
      path: "/competences",
      name: "competences",
      component: CompetencesView,
    },
    {
      path: "/competences/new-competences",
      name: "new-competences",
      component: NewcompetencesView,
    },
    {
      path: "/cards",
      name: "cards",
      component: CardsView,
    },
    {
      path: "/new-cards",
      name: "new-cards",
      component: NewcardsView,
    },
  ],
});

export default router;
