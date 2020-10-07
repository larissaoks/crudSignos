<template>
  <b-container>
    <h4>Adicionar signo</h4>
    <b-form inline>
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Signo"
        v-model="signo_add.nome"
      ></b-input>

      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Data"
        v-model="signo_add.data"
      ></b-input>

      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Personalidade"
        v-model="signo_add.personalidade"
      ></b-input>

      <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="signo_add.elemento">
        <option>Água</option>
        <option>Ar</option>
        <option>Fogo</option>
        <option>Terra</option>
      </b-form-select>

      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Regente"
        v-model="signo_add.regente"
      ></b-input>

      <b-button
        variant="light"
        style="background-color: #f0ffff"
        @click="onSubmit()"
        >OK</b-button
      >
    </b-form>
  </b-container>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "AddSigno",
  data() {
    return {
      signo_add: {
        nome: "",
        data: "",
        personalidade: "",
        elemento: "",
        regente: "",
        fav: false,
      },
    };
  },
  methods: {
    ...mapActions(["addSigno"]),
    onSubmit() {
      if (
        this.signo_add.nome == "" ||
        this.signo_add.data == "" ||
        this.signo_add.personalidade == "" ||
        this.signo_add.elemento == "" ||
        this.signo_add.regente == ""
      ) {
        alert("Preencha o campo vazio")
      } else {
        this.addSigno(this.signo_add)
      }
    },
  },
};
</script>

<style scoped>
h4 {
  color: white;
  text-align: center;
}
</style>