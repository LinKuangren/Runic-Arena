<template>
  <main>
    <h1>Home</h1>
    name <input v-model="name" type="text" /> illustration
    <input v-model="illustration" type="text" /> power
    <input v-model="power" type="number" />
    <button @click="createCard">Envoyer</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      illustration: "",
      power: 0,
    };
  },
  methods: {
    createCard() {
      fetch("http://127.0.0.1:5000/card", {
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
