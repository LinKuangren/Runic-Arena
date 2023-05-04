<template>
    <main>
        <h1>Types</h1>
        <div class="cta-create">
            <router-link to="/types/new-types">
                <button class="gdc-2 gdc-color-2">Créer un type</button>
            </router-link>
        </div>
        <ul>
            <li v-for="(type) in types" :key="type.id">
                <h2>{{ type.name }}</h2>
                <div class="del-put">
                    <button class="gdc-2 gdc-color-1" @click="deleteTypes(type.id)">Supprimer</button>
                    <router-link :to="`/types/edit/${type.id}`" class="cta-edit">
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
      types: [],
    };
  },
  mounted() {
    this.fetchTypes()
  },
  methods: {
    fetchTypes() {
        fetch('http://127.0.0.1:5173/types')
        .then((response) => {
            if (!response.ok) {
            throw new Error('Erreur lors de la récupération des types');
            }
            return response.json();
        })
        .then((data) => {
            this.types = data;
        })
        .catch((error) => {
            console.error(error);
        });
    },
    deleteTypes(id) {
        fetch(`http://127.0.0.1:5173/types/${id}`, {
            method:'DELETE'
        })
        .then((response) =>{
            if(!response.ok){
                throw new Error('Erreur lors de la suppression du type')
            }
            this.fetchTypes()
        })
        .catch((error)=>{
            console.error(error)
        });
    }
  }
};
</script>