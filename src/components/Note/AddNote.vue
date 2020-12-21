<template>
  <BaseNote :onClick="onClick" label="Add Note">
    <div>
      <h2 class="text-lg text-gray-700 font-semibold">Add Note</h2>
    </div>
  </BaseNote>
</template>

<script>
import BaseNote from "./BaseNote.vue";

export default {
  name: "AddNote",
  components: { BaseNote },
  props: {
    onClick: Function,
  },
};
</script>
