const NoteEditModule = {
  state: () => ({
    // shape: { id: number; title: string; content: string }
    note: null,
  }),

  mutations: {
    newNote(state) {
      state.note = {};
    },

    editNote(state, payload) {
      state.note = payload;
    },

    cancelNote(state) {
      state.note = null;
    },
  },

  actions: {
    submitNote({ commit, dispatch }, payload) {
      if (payload.id) {
        commit("updateNote", payload);
      } else {
        commit("addNote", payload);
      }

      dispatch("saveNotes");

      commit("cancelNote");
    },

    removeNote({ commit, dispatch }, payload) {
      if (payload.id) {
        commit("removeNote", payload);

        dispatch("saveNotes");
      }

      commit("cancelNote");
    },
  },
};

export default NoteEditModule;
