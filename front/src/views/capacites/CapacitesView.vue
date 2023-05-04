<template>
    <main>
        <h1>Capacites</h1>
        <div class="cta-create">
            <router-link to="/capacites/new-capacites">
                <button class="gdc-2 gdc-color-2">Créer une capacite</button>
            </router-link>
        </div>
        <ul>
            <li v-for="(capacite) in capacites" :key="capacite.id">
                <h2>{{ capacite.name }}</h2>
                <p>{{ capacite.description }}</p>
                <div class="del-put">
                    <button class="gdc-2 gdc-color-1" @click="deleteCapacites(capacite.id)">Supprimer</button>
                    <router-link :to="`/capacites/edit/${capacite.id}`" class="cta-edit">
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
      capacites: [],
    };
  },
  mounted() {
    this.fetchCapacites()
  },
  methods: {
    fetchCapacites() {
        fetch('http://127.0.0.1:5173/capacites')
        .then((response) => {
            if (!response.ok) {
            throw new Error('Erreur lors de la récupération des capacites');
            }
            return response.json();
        })
        .then((data) => {
            this.capacites = data;
        })
        .catch((error) => {
            console.error(error);
        });
    },
    deleteCapacites(id) {
        fetch(`http://127.0.0.1:5173/capacites/${id}`, {
            method:'DELETE'
        })
        .then((response) =>{
            if(!response.ok){
                throw new Error('Erreur lors de la suppression de la capacite')
            }
            this.fetchCapacites()
        })
        .catch((error)=>{
            console.error(error)
        });
    }
  }
};
</script>