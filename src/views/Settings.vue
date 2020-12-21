<template>
  <div class="mx-auto max-w-xl px-4 pt-6">
    <h1 class="text-xl font-semibold mb-6">Settings</h1>
    <div>
      <button
        @click="clear"
        class="py-2 px-6 bg-red-500 rounded-md text-gray-50 hover:bg-red-600"
      >
        Clear Notes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  methods: {
    clear() {
      this.$store.dispatch("clearNotes");
    },
  },
};
</script>
