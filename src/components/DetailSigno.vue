<template>
  <b-container>
    <!-- {{getSigno}} -->
    <b-card :key="getSigno.id" :title="getSigno.nome">
      <b-card-text>Data: {{ getSigno.data }}</b-card-text>
      <b-card-text>Personalidade: {{ getSigno.personalidade }}</b-card-text>
      <b-card-text>Elemento: {{ getSigno.elemento }}</b-card-text>
      <b-card-text>Planeta Regente: {{ getSigno.regente }}</b-card-text>

      <b-button
        v-if="getSigno.elemento == 'Fogo'"
        style="background-color: #cd5c5c"
      >
        <router-link tag="a" :to="{ name: 'lista' }">Voltar</router-link>
      </b-button>
      <b-button
        v-else-if="getSigno.elemento == 'Água'"
        style="background-color: #b0e0e6"
      >
        <router-link tag="a" :to="{ name: 'lista' }">Voltar</router-link>
      </b-button>
      <b-button
        v-else-if="getSigno.elemento == 'Terra'"
        style="background-color: #cd853f"
      >
        <router-link tag="a" :to="{ name: 'lista' }">Voltar</router-link>
      </b-button>
      <b-button v-else style="background-color: #c0c0c0">
        <!-- elemento: ar -->
        <router-link tag="a" :to="{ name: 'lista' }">Voltar</router-link>
      </b-button>
    </b-card>
  </b-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DetailSigno",
  data: function () {
    return {
      id: this.$route.params.id,
    };
  },
  computed: mapGetters(["getSigno"]),
  methods: {
    ...mapActions(["getSignoById"]),
  },
  created() {
    console.log(this.id);
    this.getSignoById(this.id);
  },
};
</script>


<style scoped>
.card-body {
  text-align: center;
}
.card {
  justify-content: center;
  background-color: #f0ffff;
  margin-top: 50px;
}
a {
  color: black;
}
</style>