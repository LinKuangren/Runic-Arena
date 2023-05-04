<template>
      <form v-on:submit="updateCompetence" :action="`/competences/edit/${id}`">
          <label>Nom</label>
          <input type="text" v-model="name" required>
          <label>Description</label>
          <textarea v-model="description"></textarea>
          <button class="gdc-2" type="submit">Modifier</button>
      </form>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      description: ""
    };
  },
  created() {
    this.fetchCompetence();
  },
  methods: {
    fetchCompetence() {
      console.log(this.id);
      fetch(`http://127.0.0.1:5173/competences/${this.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la compétence");
          }
          return response.json();
        })
        .then((data) => {
          this.name = data.name;
          this.description = data.description;
        })
        .catch((error) => {
          console.error(error);
        });
        console.log(this.id)
    },
    updateCompetence() {
      fetch(`http://127.0.0.1:5173/competences/${this.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          description: this.description,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la mise à jour de la compétence");
          }
          this.$router.push({ name: "Competences" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>