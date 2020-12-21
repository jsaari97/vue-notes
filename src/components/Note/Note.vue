<template>
  <BaseNote :onClick="onClick.bind(null, note)" :label="note.title">
    <article class="text-left h-full">
      <div class="mb-6">
        <h2
          class="ad text-lg font-semibold"
          :class="{ 'opacity-30': !note.title }"
        >
          {{ note.title || "Title" }}
        </h2>
      </div>
      <div>
        <p>{{ note.content }}</p>
      </div>
    </article>
  </BaseNote>
</template>

<script>
import BaseNote from "./BaseNote.vue";

export default {
  name: "Note",
  components: { BaseNote },
  props: {
    note: {
      type: Object,
      required: true,
    },
    onClick: Function,
  },
};
</script>
