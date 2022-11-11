<template>
  <section
    class=" flex items-center justify-center p-4
      bg-gradient-to-r from-blue-400 to-indigo-500 
      text-gray-100
      shadow-sm border-b-2 border-gray-100/50 gap-4
    "
  >
    <router-link 
      to="/"
      class="hover:text-sky-300 cursor-pointer"
    >
      Home
    </router-link> | 
    <router-link 
      to="/about"
      class="hover:text-sky-300 cursor-pointer"
    >
      About
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  data: () => ({

  })
})
</script>
