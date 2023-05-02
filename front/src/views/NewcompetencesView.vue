<template>
    <main>
      <h1>Nouvelles competences</h1>
      <h3>Nom</h3>
      <input v-model="name" type="text" />
      <h3>Description</h3>
      <input v-model="description" type="text" />
    </main>
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
    createCard() {
      fetch("http://127.0.0.1:5000/competences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // like application/json or text/xml
        },
        body: JSON.stringify({
          name: this.name,
          illustration: this.illustration,
          power: this.power,
        }),
      })
        .then((response) => response.json())
        .then((response) => console.log(response));
    },
  },
};
</script>
