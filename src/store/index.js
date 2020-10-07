import Vuex from "vuex";
import Vue from "vue";
import signos from "./modules/signos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signos
  }
});

// importação e declaração dos módulos que são utilizados