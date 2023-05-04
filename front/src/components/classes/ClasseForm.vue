<template>
  <form v-on:submit="createClasse" action="http://localhost:5173/classes" class="form">
    <label>Nom</label>
    <input type="text" v-model="name" required>
    <button class="gdc-2 gdc-color-2">Envoyer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async createClasse() {
      const response = await fetch("http://127.0.0.1:5173/classes/new-classes", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
        }),
      });
      console.log(response);
      if (response.ok) {
        const classe = await response.json();
        console.log('Classe ajoutée :', classe);
      }
    },
  },
};
</script>