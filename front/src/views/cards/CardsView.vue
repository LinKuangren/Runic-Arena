<template>
  <main>
    <h1>Cartes</h1>
    <!--Ceci c'est juste un début de mise en page
      <div v-for="class in classes" :key="class">
        <input type="checkbox" :value="class" v-model="selectedClasses" @change="filterClasses">{{ class }}
      </div>-->
    <ul class="cards-container">
      <li v-for="(carte, i) in cartes" :key="i">
        <img :src="carte.illustration" alt="" />
        <h2>{{ carte.name }}</h2>
        <div class="type-class">
          <h3>{{ type(carte.typeId) }}</h3>
          <h3>{{ classe(carte.classeId) }}</h3>
        </div>

        <h2>{{ carte.power }}</h2>
        <h3 class="CA">Compétences actives</h3>
        <div
          class="active"
          v-for="(active, i) in cardActives(carte.id)"
          :key="i"
        >
          <h3>{{ capacity(active.capaciteId) }}</h3>
          <div class="cost">
            <p>{{ active.cost }}</p>
            <img :src="'/public/uploads/' + active.color + '.png'" alt="" />
          </div>
        </div>
        <h3 class="CA">Compétence Passive</h3>
        <div class="passive">
          <h3>{{ capacity(carte.capaciteId) }}</h3>
          <p>{{ carte.passiveCondition }}</p>
        </div>
        <div class="del-put">
          <button class="gdc-2 gdc-color-1" @click="deleteCard(carte.id)">
            Supprimer
          </button>
          <router-link :to="`/cartes/edit/${carte.id}`" class="cta-edit">
            <button class="gdc-2 gdc-color-2">Modifier</button>
          </router-link>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      competences: [],
      capacites: [],
      types: [],
      classes: [],
      cartes: [],
      actives: [],
    };
  },
  methods: {
    type(t) {
      return this.types.find((type) => type.id === t).name;
    },
    classe(c) {
      return this.classes.find((classe) => classe.id === c).name;
    },
    cardActives(id) {
      return this.actives.filter((active) => active.carteId === id);
    },
    capacity(id) {
      return this.competences.find((competence) => competence.id === id).name;
    },
    deleteCard(id_carte) {
      fetch(`http://127.0.0.1:5173/cartes/${id_carte}`, {
        method: "DELETE",
      })
        .then((response) => {
          this.fetchCards();
          if (!response.ok) {
            throw new Error("Erreur lors de la suppression de la cartes");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchCards() {
      fetch("http://127.0.0.1:5173/cartes")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération des cartes");
          }
          return response.json();
        })
        .then((data) => {
          this.cartes = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    // FETCH CARDS
    fetch("http://127.0.0.1:5173/cartes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des cartes");
        }
        return response.json();
      })
      .then((data) => {
        this.cartes = data;
      })
      .catch((error) => {
        console.error(error);
      });
    // FETCH COMPETENCES
    fetch("http://127.0.0.1:5173/competences")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des compétences");
        }
        return response.json();
      })
      .then((data) => {
        this.competences = data;
      })
      .catch((error) => {
        console.error(error);
      });
    // FETCH CAPACITIES
    fetch("http://127.0.0.1:5173/capacites")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des capacites");
        }
        return response.json();
      })
      .then((data) => {
        this.capacites = data;
      })
      .catch((error) => {
        console.error(error);
      });
    //   FETCH TYPES
    fetch("http://127.0.0.1:5173/types")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des types");
        }
        return response.json();
      })
      .then((data) => {
        this.types = data;
      })
      .catch((error) => {
        console.error(error);
      });
    // FETCH CLASSES
    fetch("http://127.0.0.1:5173/classes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des classes");
        }
        return response.json();
      })
      .then((data) => {
        this.classes = data;
      })
      .catch((error) => {
        console.error(error);
      });
    // FETCH ACTIVE CAPACITIES
    const get_actives = fetch("http://127.0.0.1:5173/actives", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des actifs");
        }
        return response.json();
      })
      .then((data) => {
        this.actives = data;
        console.log(this.actives);
      });
  },
};
</script>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > li {
    width: 100%;
    max-width: 350px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2,
    h3,
    p {
      margin: 0;
      padding: 0;
    }
    img {
      width: 100%;
      max-height: 250px;
      object-fit: cover;
    }
    .type-class {
      display: flex;
      justify-content: space-around;
    }
    .active {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cost {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    }
    .active + .active {
      margin-top: -1rem;
    }
    .passive {
      display: flex;
      justify-content: space-between;
      margin-top: 0rem;
    }
  }
}
</style>
