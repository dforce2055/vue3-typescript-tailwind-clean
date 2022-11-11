<template>
  <section
    class="bg-gray-50 min-h-screen
    flex items-center justify-center px-4
    "
  >
    <div class="absolute max-w-g">
      <!-- shapes -->
      <div 
        class="absolute top-0 -left-4 w-72 h-72 
        bg-purple-300 rounded-full mix-blend-multiply 
        filter blur-xl opacity-50 animate-blob"
      />
      <div 
        class="absolute top-0 -right-4 w-72 h-72 
        bg-yellow-300 rounded-full mix-blend-multiply
        filter blur-xl opacity-50 animate-blob animation-delay-4000"
      />
      <div 
        class="absolute -bottom-8 left-28 w-72 h-72 
        bg-pink-300 rounded-full mix-blend-multiply 
        filter blur-xl opacity-50 animate-blob animation-delay-2000"
      />
    </div>
    <div class="container mx-auto opacity-100">
      <div class="flex">
        <div class="2xl:w-1/3 lg:2/3 md:w-2/3 p-4 mx-auto">
          <div class="border border-gray-200 p-6 rounded-lg bg-white">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full 
              bg-sky-100 text-sky-500 mb-4"
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
              Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>
