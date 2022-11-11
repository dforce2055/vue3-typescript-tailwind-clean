<template>
  <section
    class="bg-gradient-to-r from-blue-400 to-indigo-500 
    text-gray-100
      flex items-center justify-center p-4
      shadow-sm h-screen ontainer px-5 py-24 mx-auto"
  >
    <SliderOptionsAnimated 
      class="absolute top-20 left-0 mx-2 lg:mx-auto lg:left-auto"
      @selected="onSelected"
    />
    <Notification />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Notification from '../components/Notification.vue'
import SliderOptionsAnimated from '../components/SliderOptionsAnimated.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Notification,
    SliderOptionsAnimated
  },
  data: () => ({
  }),
  methods: {
    onSelected(payload: any) {
      console.log('selected', payload)
    }
  }
});
</script>
