<template>
  <form
    v-on:submit="updateCompetence"
    action="http://localhost:5173/competences"
    class="form"
  >
    <label>Nom</label>
    <input type="text" v-model="name" required />
    <label>Description</label>
    <textarea v-model="description"></textarea>
    <button class="gdc-2 gdc-color-2" type="submit">Modifier</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      description: "",
      type: "",
    };
  },
  created() {
    this.fetchCompetence();
  },
  methods: {
    fetchCompetence() {
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
          type: this.type,
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
