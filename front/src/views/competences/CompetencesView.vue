<template>
    <main>
        <h1>Compétences</h1>
        <div class="cta-create">
            <router-link to="/competences/new-competences">
                <button class="gdc-2">Créer une compétence</button>
            </router-link>
        </div>
        <ul>
            <li v-for="(competence) in competences" :key="competence.id">
                <h2>{{ competence.name }}</h2>
                <p>{{ competence.description }}</p>
                <div class="del-put">
                    <button class="gdc-2" @click="deleteCompetences(competence.id)">Supprimer</button>
                    <router-link to="/competences/edit/${id}">
                        <button class="gdc-2">Modifier</button>
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
    };
  },
  mounted() {
    this.fetchCompetences()
  },
  methods: {
    fetchCompetences() {
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
    deleteCompetences(id) {
        fetch(`http://127.0.0.1:5173/competences/${id}`, {
            method:'DELETE'
        })
        .then((response) =>{
            if(!response.ok){
                throw new Error('Erreur lors de la suppression de la compétence')
            }
            this.fetchCompetences()
        })
        .catch((error)=>{
            console.error(error)
        });
    }
  }
};
</script>