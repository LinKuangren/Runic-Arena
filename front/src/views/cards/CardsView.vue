<template>
  <main>
      <h1>Cartes</h1>
      <!--Ceci c'est juste un début de mise en page
      <div v-for="class in classes" :key="class">
        <input type="checkbox" :value="class" v-model="selectedClasses" @change="filterClasses">{{ class }}
      </div>-->
      <div>
          <!--<li v-for="(carte) in cartes" :key="carte.id">-->
              <h2><!--{{ carte.illustration }}-->IMG</h2>
              <h2><!--{{ carte.name }}-->David Goodenough</h2>
              <div class="type-class">
                  <h3><!--{{ carte.type }}-->Chaos</h3>
                  <h3><!--{{ carte.classe }}-->Archer</h3>
              </div>
              <h2><!--{{ carte.power }}-->72</h2>
              <h3 class="CA">Compétence Active</h3>
              <div class="CA-space">
                  <h3><!--{{ carte.competence }}-->Epuisement</h3>
                  <div class="CA-space-cc">
                      <p><!--{{ carte.cost }}-->2</p>
                      <p><!--{{ carte.color }}-->Rouge</p>
                  </div>
              </div>
              <h3 class="CA">Compétence Passive</h3>
              <div class="CA-space">
                  <p><!--{{ carte.capacite }}-->Défense</p>
                  <h3><!--{{ carte.competence }}-->Epuisement</h3>
              </div>
              <!--<div class="del-put">
                  <button class="gdc-2 gdc-color-1" @click="deleteCarte(carte.id)">Supprimer</button>
                  <router-link :to="`/cartes/edit/${carte.id}`" class="cta-edit">
                      <button class="gdc-2 gdc-color-2">Modifier</button>
                  </router-link>
              </div>-->
          <!--</li>-->
        </div>
  </main>
</template>
<!--
<script>
export default {
  data() {
    return {
      competences: [],
      capacites: [],
      types: [],
      classes: [],
    };
  },
  mounted() {
    this.fetchCompetences(),
    this.fetchCapacites(),
    this.fetchTypes(),
    this.fetchClasses(),
  },
  methods: {
    fetchCompetences(){
      fetch('http://127.0.0.1:5173/competences')
      .then((response) => {
            if (!response.ok) {
            throw new Error('Erreur lors de la récupération des compétences');
            }
            return response.json();
        })
        .then((data) => {
            this.competences = data;
        })
        .catch((error) => {
            console.error(error);
        });
    },
    fetchCapacites(){
      fetch('http://127.0.0.1:5173/capacites')
      .then((response) => {
            if (!response.ok) {
            throw new Error('Erreur lors de la récupération des capacites');
            }
            return response.json();
        })
        .then((data) => {
            this.competences = data;
        })
        .catch((error) => {
            console.error(error);
        });
    },
    fetchTypes(){
      fetch('http://127.0.0.1:5173/types')
      .then((response) => {
            if (!response.ok) {
            throw new Error('Erreur lors de la récupération des types');
            }
            return response.json();
        })
        .then((data) => {
            this.competences = data;
        })
        .catch((error) => {
            console.error(error);
        });
    },
    fetchClasses(){
      fetch('http://127.0.0.1:5173/classes')
      .then((response) => {
            if (!response.ok) {
            throw new Error('Erreur lors de la récupération des classes');
            }
            return response.json();
        })
        .then((data) => {
            this.competences = data;
        })
        .catch((error) => {
            console.error(error);
        });
    },
    deleteCards(id) {
      fetch(`http://127.0.0.1:5173/cartes/${id}`, {
        method: 'DELETE'
      })
      .then((response) =>{
            if(!response.ok){
                throw new Error('Erreur lors de la suppression de la cartes')
            }
            this.fetchCompetences()
        })
        .catch((error)=>{
            console.error(error)
        });
    }
  }
}
</script>-->