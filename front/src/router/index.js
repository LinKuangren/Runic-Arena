import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TypesView from "../views/types/TypesView.vue";
import NewtypesView from "../views/types/NewtypesView.vue";
import CapacitesView from "../views/capacites/CapacitesView.vue";
import NewcapacitesView from "../views/capacites/NewcapacitesView.vue";
import CardsView from "../views/cards/CardsView.vue";
import NewcardsView from "../views/cards/NewcardsView.vue";
import ClassesView from "../views/classes/ClassesView.vue";
import NewclassesView from "../views/classes/NewclassesView.vue";
import CompetencesView from "../views/competences/CompetencesView.vue";
import NewcompetencesView from "../views/competences/NewcompetencesView.vue";
import EditcompetencesView from "../views/competences/EditcompetencesView.vue";

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
      path: "/competences/edit/:id",
      name: "edit-competences",
      component: EditcompetencesView,
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
