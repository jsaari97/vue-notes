<template>
  <li
    class="bg-white hover:bg-gray-50 shadow-md rounded-md border border-gray-100"
  >
    <button
      :aria-label="label"
      class="w-full h-full p-6"
      type="button"
      @click="onClick"
    >
      <slot />
    </button>
  </li>
</template>

<script>
export default {
  name: "BaseNote",
  props: {
    label: String,
    onClick: Function,
  },
};
</script>
