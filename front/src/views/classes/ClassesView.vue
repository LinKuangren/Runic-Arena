<template>
    <main>
        <h1>Classes</h1>
        <div class="cta-create">
            <router-link to="/classes/new-classes">
                <button class="gdc-2 gdc-color-2">Créer une classe</button>
            </router-link>
        </div>
        <ul>
            <li v-for="(classe) in classes" :key="classe.id">
                <h2>{{ classe.name }}</h2>
                <div class="del-put">
                    <button class="gdc-2 gdc-color-1" @click="deleteClasses(classe.id)">Supprimer</button>
                    <router-link :to="`/classes/edit/${classe.id}`" class="cta-edit">
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
      classes: [],
    };
  },
  mounted() {
    this.fetchClasses()
  },
  methods: {
    fetchClasses() {
        fetch('http://127.0.0.1:5173/classes')
        .then((response) => {
            if (!response.ok) {
            throw new Error('Erreur lors de la récupération des classes');
            }
            return response.json();
        })
        .then((data) => {
            this.classes = data;
        })
        .catch((error) => {
            console.error(error);
        });
    },
    deleteClasses(id) {
        fetch(`http://127.0.0.1:5173/classes/${id}`, {
            method:'DELETE'
        })
        .then((response) =>{
            if(!response.ok){
                throw new Error('Erreur lors de la suppression de la classe')
            }
            this.fetchClasses()
        })
        .catch((error)=>{
            console.error(error)
        });
    }
  }
};
</script>