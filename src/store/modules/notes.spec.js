import Module from "./notes";

describe("Notes Module", () => {
  describe("Mutations", () => {
    test("addNote", () => {
      const state = { notes: [{}] };

      Module.mutations.addNote(state);

      expect(state.notes.length).toEqual(2);
    });

    test("removeNote", () => {
      const state = { notes: [{ id: 1 }, { id: 2 }, { id: 3 }] };

      Module.mutations.removeNote(state, { id: 2 });

      expect(state.notes.length).toEqual(2);
      expect(state.notes[1].id).toEqual(3);
    });
  });
});
