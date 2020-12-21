<template>
  <header class="fixed w-full top-0 left-0 bg-blue-500 text-gray-50 py-4">
    <div class="flex max-w-6xl mx-auto px-6 items-center">
      <router-link to="/">Notes</router-link>
      <nav class="ml-auto">
        <ul class="flex">
          <li v-for="link in links" :key="link.to" class="ml-6">
            <router-link :to="link.to">{{ link.label }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          label: "Home",
          to: "/",
        },
        {
          label: "Settings",
          to: "/settings",
        },
      ],
    };
  },
};
</script>
