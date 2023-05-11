import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TypesView from "../views/types/TypesView.vue";
import NewtypesView from "../views/types/NewtypesView.vue";
import EdittypesView from "../views/types/EdittypesView.vue";
import CapacitesView from "../views/capacites/CapacitesView.vue";
import NewcapacitesView from "../views/capacites/NewcapacitesView.vue";
import EditcapacitesView from "../views/capacites/EditcapacitesView.vue";
import CardsView from "../views/cards/CardsView.vue";
import NewcardsView from "../views/cards/NewcardsView.vue";
import EditCartesView from "../views/cards/EditCartesView.vue";
import ClassesView from "../views/classes/ClassesView.vue";
import NewclassesView from "../views/classes/NewclassesView.vue";
import EditclassesView from "../views/classes/EditclassesView.vue";
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
      name: "types",
      component: TypesView,
    },
    {
      path: "/types/new-types",
      name: "new-types",
      component: NewtypesView,
    },
    {
      path: "/types/edit/:id",
      name: "edit-types",
      component: EdittypesView,
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
      path: "/capacites/edit/:id",
      name: "edit-capacites",
      component: EditcapacitesView,
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
      path: "/classes/edit/:id",
      name: "edit-classes",
      component: EditclassesView,
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
      path: "/cartes/edit/:id",
      name: "edit-cards",
      component: EditCartesView,
    },
    {
      path: "/new-cards",
      name: "new-cards",
      component: NewcardsView,
    },
  ],
});

export default router;
