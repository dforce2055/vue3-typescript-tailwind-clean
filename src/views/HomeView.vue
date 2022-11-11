<template>
  <section>
    <ShapesBgAnimated v-if="false" />
    <SliderOptionsAnimated
      v-if="true"
      @selected="onSelected"
    />
    <Notification v-if="true" />
    <button
      class="btn btn-primary flex mx-auto text-center"
      @click="showConfetti"
    >
      Show confetti
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShapesBgAnimated from '@/components/ShapesBgAnimated.vue'
import Notification from '../components/Notification.vue'
import SliderOptionsAnimated from '../components/SliderOptionsAnimated.vue'
import confetti from 'canvas-confetti'

export default defineComponent({
  name: 'HomeView',
  components: {
    Notification,
    SliderOptionsAnimated,
    ShapesBgAnimated,
  },
  data: () => ({
    enabled: false,
  }),
  methods: {
    onSelected(payload: unknown) {
      // console.log('selected', payload)
    },
    showConfetti() {
      confetti({
        particleCount: 600,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: 0.5,
          y: 0
        }
      })
    }
  }
});
</script>
