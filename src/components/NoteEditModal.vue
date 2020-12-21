<template>
  <div
    ref="container"
    class="fixed left-0 top-0 w-full h-full bg-blue-900 bg-opacity-50 flex items-center justify-center"
    @click="cancel"
  >
    <form
      ref="dialog"
      role="dialog"
      @submit="handleSubmit"
      :aria-label="label"
      class="bg-white mx-4 p-6 pt-8 shadow-md rounded-md border border-gray-100 max-w-lg w-full"
    >
      <header class="flex items-center mb-6 gap-6">
        <input
          v-model="note.title"
          type="text"
          placeholder="Title"
          class="text-2xl flex-grow pl-2 border-b-2 border-gray-200 outline-none focus:border-blue-500"
        />
      </header>
      <div class="flex mb-6">
        <textarea
          rows="5"
          v-model="note.content"
          placeholder="Content..."
          class="flex-grow border border-gray-300 p-2"
        />
      </div>
      <footer class="flex">
        <button
          v-if="note.id"
          type="button"
          @click="remove"
          class="text-red-400"
        >
          Remove
        </button>
        <div class="ml-auto flex gap-6">
          <button type="button" @click="cancel" class="text-gray-600">
            Cancel
          </button>
          <button type="button" @click="submit" class="text-blue-500">
            Save
          </button>
        </div>
      </footer>
    </form>
  </div>
</template>

<script>
import { createFocusTrap } from "focus-trap";

export default {
  name: "NoteEditModal",
  data() {
    return {
      note: { ...this.$store.state.noteEditModule.note },
      focusTrap: null,
    };
  },
  computed: {
    label() {
      return this.note.id ? "Edit note" : "Add note";
    },
  },
  methods: {
    cancel() {
      this.$store.commit("cancelNote");
    },
    submit() {
      this.$store.dispatch("submitNote", this.note);
    },
    remove() {
      this.$store.dispatch("removeNote", this.note);
    },
    handleBackdrop(e) {
      e.stopPropagation();
    },
    handleSubmit(e) {
      e.preventDefault();

      this.submit();
    },
  },
  mounted() {
    this.focusTrap = createFocusTrap(this.$refs.container, {
      onDeactivate: this.cancel,
    }).activate();

    this.$refs.dialog.addEventListener("click", this.handleBackdrop);
  },
  beforeDestroy() {
    this.focusTrap.deactivate();
    this.$refs.dialog.removeEventListener("click", this.handleBackdrop);
  },
};
</script>
