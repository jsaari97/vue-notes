import Vue from "vue";
import Vuex from "vuex";

import notesModule from "./modules/notes";
import noteEditModule from "./modules/edit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { notesModule, noteEditModule },
});
