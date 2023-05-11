<template>
  <form
    v-on:submit="createCard"
    action="http://localhost:5174/cards"
    class="form"
  >
    <label>Nom</label>
    <input type="text" v-model="name" required />
    <label>Illustration</label>
    <input
      type="file"
      accept="image/*"
      ref="file"
      @change="upload()"
      required
    />
    <label>Type</label>
    <select name="type" id="type" v-model="type" required>
      <option v-for="(e, i) in types" :key="i" :value="e.id">
        {{ e.name }}
      </option>
    </select>
    <label>Classe</label>
    <select name="classe" id="classe" v-model="classe" required>
      <option v-for="(e, i) in classes" :key="i" :value="e.id">
        {{ e.name }}
      </option>
    </select>
    <label>Puissance</label>
    <input type="number" name="power" id="power" v-model="power" required />
    <div class="active">
      <div>
        <label>Compétence active</label>
        <select
          name="competence_1"
          id="competence_1"
          v-model="competence_1"
          required
        >
          <option v-for="(e, i) in competences" :key="i" :value="e.id">
            {{ e.name }}
          </option>
        </select>
        <select name="competence_2" id="competence_2" v-model="competence_2">
          <option v-for="(e, i) in competences" :key="i" :value="e.id">
            {{ e.name }}
          </option>
        </select>
      </div>
      <div>
        <label>Coût</label>
        <input
          type="number"
          name="cost_1"
          id="cost_1"
          v-model="cost_1"
          required
        />
        <input type="number" name="cost_2" id="cost_2" v-model="cost_2" />
      </div>
      <div>
        <label>Couleur</label>
        <select name="color_1" id="color_1" v-model="color_1" required>
          <option value="red">Rouge</option>
          <option value="blue">Bleu</option>
          <option value="yellow">Jaune</option>
          <option value="green">Vert</option>
        </select>
        <select name="color_2" id="color_2" v-model="color_2">
          <option value="red">Rouge</option>
          <option value="blue">Bleu</option>
          <option value="yellow">Jaune</option>
          <option value="green">Vert</option>
        </select>
      </div>
    </div>
    <div class="passive">
      <div>
        <label>Compétences passive</label>
        <select name="capaciteId" id="capaciteId" v-model="capaciteId" required>
          <option v-for="(e, i) in competences" :key="i" :value="e.id">
            {{ e.name }}
          </option>
        </select>
      </div>
      <div>
        <label>Condition</label>
        <select name="capaciteId" id="capaciteId" v-model="condition" required>
          <option value="Attaque">Attaque</option>
          <option value="Défense">Défense</option>
          <option value="Avantage">Avantage</option>
          <option value="Groupe">Groupe</option>
        </select>
      </div>
    </div>
    <button class="gdc-2 gdc-color-2">Enregistrer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      // CARD DATA
      name: "",
      illustration: undefined,
      type: null,
      classe: null,
      power: null,
      competence_1: null,
      competence_2: null,
      cost_1: null,
      cost_2: null,
      color_1: "",
      color_2: "",
      capaciteId: null,
      condition: null,
      //   ALL DATAS
      types: [],
      classes: [],
      competences: [],
      actives: [],
    };
  },
  methods: {
    async upload() {
      this.illustration = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("file", this.illustration);
      const uploadIllustration = await fetch(
        "http://127.0.0.1:5173/cartes/upload",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => (response = response.json()))
        .then((response) => {
          this.illustration =
            "http://127.0.0.1:5173/images/" + response.imgName;
          console.log(this.illustration);
        });
    },
    async createCard() {
      const response = await fetch(
        "http://127.0.0.1:5173/cartes/" + req.params.id,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            illustration: this.illustration,
            typeId: this.type,
            classeId: this.classe,
            power: this.power,
            capaciteId: this.capaciteId,
            competence_1: this.competence_1,
            competence_2: this.competence_2,
            cost_1: this.cost_1,
            cost_2: this.cost_2,
            color_1: this.color_1,
            color_2: this.color_2,
            condition: this.condition,
          }),
        }
      );
      if (response.ok) {
        const carte = await response.json();
        console.log("carte ajoutée :", carte);
      }
    },
  },
  mounted() {
    // GET TYPES
    const get_types = fetch("http://127.0.0.1:5173/types", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des types");
        }
        return response.json();
      })
      .then((data) => {
        data.forEach((element) => {
          this.types.push(element);
        });
      });
    // GET CLASES
    const get_classes = fetch("http://127.0.0.1:5173/classes", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des classes");
        }
        return response.json();
      })
      .then((data) => {
        data.forEach((element) => {
          this.classes.push(element);
        });
      });
    // GET CLASSES
    const get_competences = fetch("http://127.0.0.1:5173/competences", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des compétences");
        }
        return response.json();
      })
      .then((data) => {
        data.forEach((element) => {
          this.competences.push(element);
        });
      });
  },
};
</script>
<style lang="scss" scoped>
.form {
  width: 100%;
  margin: inherit;
  padding: inherit;
  select,
  input {
    all: unset;
    background-color: white;
    border-radius: 0.3rem;
    margin: 0 0 1rem;
    padding: 0.4rem 0.25rem;
    font-family: "Lato", sans-serif;
  }
  .active {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2rem;
    > div {
      display: flex;
      flex-direction: column;
    }
  }
  .passive {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    > div {
      display: flex;
      flex-direction: column;
    }
  }
  button {
    margin-top: 1rem;
  }
}
</style>
