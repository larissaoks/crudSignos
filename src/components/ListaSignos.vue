<template>
  <b-container>
    <AddSigno />
    <h1 style="color: white">Signos do Zodiaco</h1>
    <b-row>
      <b-card
        v-for="signo in allSignos"
        :key="signo.id"
        :title="signo.nome"
        :sub-title="signo.data"
        align="center"
        style="width: 300px"
        class="mb-6"
      >
        <b-button
          v-if="signo.elemento == 'Fogo'"
          style="background-color: #cd5c5c"
        >
          <router-link :to="{ name: 'signo-details', params: { id: signo.id } }"
            >Detalhar</router-link
          >
        </b-button>
        <b-button
          v-else-if="signo.elemento == 'Água'"
          style="background-color: #b0e0e6"
        >
          <router-link :to="{ name: 'signo-details', params: { id: signo.id } }"
            >Detalhar</router-link
          >
        </b-button>
        <b-button
          v-else-if="signo.elemento == 'Terra'"
          style="background-color: #cd853f"
        >
          <router-link :to="{ name: 'signo-details', params: { id: signo.id } }"
            >Detalhar</router-link
          >
        </b-button>
        <b-button v-else style="background-color: #c0c0c0">
          <!-- elemento: ar -->
          <router-link :to="{ name: 'signo-details', params: { id: signo.id } }"
            >Detalhar</router-link
          >
        </b-button>

        <b-icon
          class="lixo"
          @click="deleteSigno(signo.id)"
          variant="dark"
          icon="trash"
          font-scale="1"
          >Excluir</b-icon
        >

        <b-iconstack
          class="fav"
          font-scale="1"
          @click="favorSigno(signo)"
          variant="danger"
        >
          <b-icon
            stacked
            icon="suit-heart-fill"
            v-if="signo.fav == true"
          ></b-icon>
          <b-icon stacked icon="suit-heart" v-else></b-icon>
        </b-iconstack>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddSigno from "./AddSigno";

export default {
  name: "ListaSignos",
  components: {
    AddSigno,
  },

  methods: {
    ...mapActions(["getSignos", "deleteSigno", "updateSigno"]),
    favorSigno(signo) {
      if (signo.fav == false){
        signo.fav = true;
        this.updateSigno(signo);
      }else{
        signo.fav = false;
        this.updateSigno(signo);
      }
      
      // modifica o estado de 'falso' para 'verdadeiro'. Se gostou, favorita.
    },
  },
  computed: mapGetters(["allSignos"]),
  created() {
    this.getSignos();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: #f0ffff;
  position: relative;
}
.lixo {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}
.fav {
  margin-left: 5px;
  cursor: pointer;
}

h1 {
  text-align: center;
}
a {
  color: black;
}
.row {
  justify-content: center;
}
</style>
