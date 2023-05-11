<template>
  <main>
    <h1>Nouvelle carte</h1>
    <CarteForm />
  </main>
</template>

<script>
import CarteForm from "@/components/cartes/CarteForm.vue";
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
  components: { CarteForm },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding-bottom: 30px;
}
</style>
