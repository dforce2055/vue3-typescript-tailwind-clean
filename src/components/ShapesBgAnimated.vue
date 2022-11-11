<template>
  <section class="relative max-w-g">
    <!-- shapes -->
    <div 
      class="absolute top-0 -left-4 w-72 h-72 
      bg-purple-300 rounded-full mix-blend-multiply 
      filter blur-xl opacity-50 animate-blob select-none z-0"
    />
    <div 
      class="absolute top-0 -right-4 w-72 h-72 
      bg-yellow-300 rounded-full mix-blend-multiply
      filter blur-xl opacity-50 animate-blob animation-delay-4000 select-none z-0 "
    />
    <div 
      class="absolute -bottom-8 left-28 w-72 h-72 
      bg-pink-300 rounded-full mix-blend-multiply 
      filter blur-xl opacity-50 animate-blob animation-delay-2000 select-none z-0"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShapesBgAnimated',
})
</script>
