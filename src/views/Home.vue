<template>
  <div class="mx-auto max-w-4xl px-4">
    <Controls title="Home" />
    <transition-group
      @before-leave="beforeLeave"
      name="list"
      tag="ul"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
    >
      <Note
        v-for="note in notes"
        :key="note.id"
        :note="note"
        :onClick="editNote"
        class="list-item"
      />
      <AddNote key="add" class="list-item" :onClick="newNote" />
    </transition-group>
    <transition name="fade">
      <NoteEditModal v-if="isEditing" />
    </transition>
  </div>
</template>

<script>
import Note from "@/components/Note/Note.vue";
import AddNote from "@/components/Note/AddNote.vue";
import Controls from "@/components/Controls.vue";
import NoteEditModal from "@/components/NoteEditModal.vue";

export default {
  name: "Home",
  components: { Note, AddNote, Controls, NoteEditModal },
  computed: {
    notes() {
      return this.$store.state.notesModule.notes;
    },
    isEditing() {
      return !!this.$store.state.noteEditModule.note;
    },
  },
  methods: {
    newNote() {
      this.$store.commit("newNote");
    },
    editNote(note) {
      this.$store.commit("editNote", note);
    },
    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } = window.getComputedStyle(
        el
      );

      /* eslint-disable no-param-reassign */
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
      el.style.width = width;
      el.style.height = height;
      /* eslint-enable no-param-reassign */
    },
  },
  mounted() {
    this.$store.dispatch("loadNotes");
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.list-item {
  display: flex;
  transition: opacity 225ms ease-in-out, transform 225ms ease-in-out;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: fixed;
}
</style>
