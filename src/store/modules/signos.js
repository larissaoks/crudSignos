import axios from "axios";

const URL = "https://my-json-server.typicode.com/larissaoks/fakeapi-signos/signos"

const state = {
  signos : [],
  signo: {},
}

const getters = {
  allSignos: state => state.signos,
  getSigno: state => state.signo,
  
}

const actions = {
  getSignos({commit}) {
    axios.get(
      URL
    ).then((response) => {
      commit('getSignos', response.data)
    })
  },
  getSignoById({ commit }, id) {
    axios.get(
        URL + "/" + id
      ).then((response) => {
        commit('getSigno', response.data);
    });
  },
  deleteSigno({ commit }, id) {
    commit("removeSigno", id);
  },
  updateSigno({commit}, updSigno){
    commit("updateSigno", updSigno)
    // passa o que recebe de parâmentro para o commit
  },
  addSigno({ commit }, signo_add) {
    const new_index =  state.signos.length +1
    const response =  {
            "id": new_index,
            "nome": signo_add.nome,
            "data": signo_add.data,
            "personalidade": signo_add.personalidade,
            "elemento": signo_add.elemento,
            "regente": signo_add.regente,
            "fav": false
          }
    commit("newSigno",response);
    },
}

const mutations = {
  getSignos: (state, signos) => (state.signos = signos),
  getSigno: (state, signo) => (state.signo = signo),
  removeSigno: (state, id) => (state.signos = state.signos.filter(s => s.id !== id)), // filtra e sobrescreve a lista sem o id do obj clicado
  updateSigno: (state, updSigno) => {
    const index = state.signos.findIndex(s => s.id === updSigno.id)
    if (index !== -1) {
      state.signos.splice(index, 1, updSigno);
      }
      // tá pegando o index do obj clicado, buscando na listagem, divide o state no ponto que o id se encontra e dá um update nele. o 1 é para deixar claro que está dando update e não criando um novo
    },
  newSigno: (state, signo) => state.signos.push(signo), //adiciona um novo no final da lista
  
}

export default{
  state,
  getters,
  actions,
  mutations
}