<template>
      <form v-on:submit="updateType" action="http://localhost:5173/types" class="form">
          <label>Nom</label>
          <input type="text" v-model="name" required>
          <button class="gdc-2 gdc-color-2" type="submit">Modifier</button>
      </form>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      name: "",
    };
  },
  created() {
    this.fetchType();
  },
  methods: {
    fetchType() {
      fetch(`http://127.0.0.1:5173/types/${this.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération du type");
          }
          return response.json();
        })
        .then((data) => {
          this.name = data.name
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateType() {
      fetch(`http://127.0.0.1:5173/types/${this.id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la mise à jour du type");
          }
          this.$router.push({ name: "Types" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>