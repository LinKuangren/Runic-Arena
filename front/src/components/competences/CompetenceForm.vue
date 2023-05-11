<template>
  <form
    v-on:submit="createCompetence"
    action="http://localhost:5173/competences"
    class="form"
  >
    <label>Nom</label>
    <input type="text" v-model="name" required />
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
      type: "",
    };
  },
  methods: {
    async createCompetence() {
      const response = await fetch(
        "http://127.0.0.1:5173/competences/new-competences",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            description: this.description,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        const competence = await response.json();
        console.log("Compétence ajoutée :", competence);
      }
    },
  },
};
</script>
