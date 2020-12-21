<template>
  <section class="flex items-center py-6">
    <h1 v-if="title" class="text-xl font-semibold">{{ title }}</h1>
    <figure class="ml-auto">
      <button
        type="button"
        @click="newNote"
        class="py-2 px-6 bg-blue-500 rounded-md text-gray-50 hover:bg-blue-600"
      >
        New
      </button>
    </figure>
  </section>
</template>

<script>
export default {
  name: "Controls",
  props: {
    title: String,
  },
  methods: {
    newNote() {
      this.$store.commit("newNote");
    },
  },
};
</script>
