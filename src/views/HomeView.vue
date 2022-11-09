<template>
  <div class="home">
    <Popover class="relative">
      <PopoverButton
        class="bg-sky-400 delay-75 hover:bg-sky-500 text-white transition-all"
      >
        Solutions
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
          />
        </svg>
      </PopoverButton>

      <PopoverPanel class="absolute z-10">
        <div class="grid grid-cols-2">
          <a href="/analytics">
            Analytics
          </a>
          <a href="/engagement">
            Engagement
          </a>
          <a href="/security">
            Security
          </a>
          <a href="/integrations">
            Integrations
          </a>
        </div>

        <img 
          src="/solutions.jpg" 
          alt="" 
        >
      </PopoverPanel>
    </Popover>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
});
</script>
