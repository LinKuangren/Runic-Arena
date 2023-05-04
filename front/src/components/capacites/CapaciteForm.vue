<template>
  <form v-on:submit="createCapacite" action="http://localhost:5173/capacites" class="form">
    <label>Nom</label>
    <input type="text" v-model="name" required>
    <label>Description</label>
    <textarea v-model="description"></textarea>
    <button class="gdc-2 gdc-color-2">Envoyer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    async createCapacite() {
      const response = await fetch("http://127.0.0.1:5173/capacites/new-capacites", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          description: this.description,
        }),
      });
      console.log(response);
      if (response.ok) {
        const capacite = await response.json();
        console.log('Capacite ajoutée :', capacite);
      }
    },
  },
};
</script>