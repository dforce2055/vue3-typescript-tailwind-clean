<template>
  <section
    class="bg-gradient-to-r from-blue-400 to-indigo-500
    text-gray-100 overflow-hidden
      flex items-center justify-center p-4
      shadow-sm h-screen container px-5 py-24 mx-auto max-w-screen-2xl"
  >
    <ShapesBgAnimated />
    <SliderOptionsAnimated 
      class="absolute top-20 left-0 mx-2 lg:mx-auto lg:left-auto"
      @selected="onSelected"
    />
    <Notification />
  </section>
</template>

<script lang="ts">
import ShapesBgAnimated from '@/components/ShapesBgAnimated.vue';
import { defineComponent } from 'vue';
import Notification from '../components/Notification.vue'
import SliderOptionsAnimated from '../components/SliderOptionsAnimated.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Notification,
    SliderOptionsAnimated,
    ShapesBgAnimated
  },
  data: () => ({
  }),
  methods: {
    onSelected(payload: unknown) {
      // console.log('selected', payload)
    }
  }
});
</script>
