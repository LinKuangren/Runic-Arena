<template>
  <form v-on:submit="createType" action="http://localhost:5173/types" class="form">
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
    async createType() {
      const response = await fetch("http://127.0.0.1:5173/types/new-types", {
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
        const type = await response.json();
        console.log('Type ajoutée :', type);
      }
    },
  },
};
</script>