<template>
  <section>
    <div class="absolute top-24 my-4 inset-x-0 w-full flex items-center">
      <button
        class="flex mx-auto mt-16 text-white 
        bg-blue-600 border-0 py-2 px-8 focus:outline-none 
        hover:bg-blue-700 rounded text-lg"
        @click="show = !show"
      >
        Show notification
      </button>
    </div>

    <TransitionRoot
      :show="show"
      enter="transition transform duration-300 ease-out"
      enter-from="translate-x-4 opacity-0"
      enter-to="translate-x-0 opacity-100"
      leave="transition transform duration-300 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-3/4 md:w-full mx-auto">
          <div class="
              flex border-2 rounded-lg bg-slate-100/20 
            border-gray-200 border-opacity-50 
              p-8 sm:flex-row flex-col"
          >
            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex 
                items-center justify-center rounded-full 
              bg-blue-100 text-blue-500 flex-shrink-0"
            >
              <TransitionChild
                enter="transition transform duration-300 ease-out"
                enter-from="rotate-90 scale-50 opacity-0"
                enter-to="rotate-0 scale-100 opacity-100"
                leave="transition transform duration-300 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </TransitionChild>
            </div>
            <div class="flex-grow">
              <TransitionChild
                enter="transition transform duration-300 ease-out"
                enter-from="translate-x-4 opacity-0"
                enter-to="translate-x-0 opacity-100"
                leave="transition transform duration-300 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. 
                  Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-blue-500 inline-flex items-center cursor-pointer">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </TransitionChild>
            </div>
          </div>
        </div>
      </div>
    </TransitionRoot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { TransitionRoot, TransitionChild } from '@headlessui/vue';

export default defineComponent({
  name: 'Notification',
  components: {
    TransitionRoot,
    TransitionChild
  },
  data: () => ({
    show: false
  })
});
</script>
