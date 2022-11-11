<template>
  <section
    class="bg-gray-50 min-h-screen overflow-hidden
    flex items-center justify-center px-4 
    "
  >
    <ShapesBgAnimated />
    <div class="container mx-auto opacity-100">
      <div class="flex">
        <h1 class="text-dark-green-500">
          probando!
        </h1>
        <div class="2xl:w-1/3 lg:2/3 md:w-2/3 p-4 mx-auto">
          <div class="border border-gray-200 p-6 rounded-lg bg-white">
            <div 
              class="w-10 h-10 inline-flex items-center justify-center 
                rounded-full bg-sky-100 text-sky-500 mb-4"
            >
              <svg 
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              Shooting Stars
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waist co, 
              subway tile poke farm.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ShapesBgAnimated from '@/components/ShapesBgAnimated.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { ShapesBgAnimated }
})
</script>
