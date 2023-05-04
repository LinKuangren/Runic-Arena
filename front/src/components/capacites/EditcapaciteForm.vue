<template>
      <form v-on:submit="updateCapacite" action="http://localhost:5173/capacites" class="form">
          <label>Nom</label>
          <input type="text" v-model="name" required>
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
    };
  },
  created() {
    this.fetchCapacite();
  },
  methods: {
    fetchCapacite() {
      fetch(`http://127.0.0.1:5173/capacites/${this.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la capacite");
          }
          return response.json();
        })
        .then((data) => {
          this.name = data.name
          this.description = data.description
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateCapacite() {
      fetch(`http://127.0.0.1:5173/capacites/${this.id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          description: this.description,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la mise à jour de la capacite");
          }
          this.$router.push({ name: "Capacites" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>