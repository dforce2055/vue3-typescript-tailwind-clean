<template>
  <section>
    <div
      class="flex justify-between items-center w-64 lg:w-80"
      @click="toggleActive = !toggleActive"
    >
      <div 
        class="w-full h-10 flex items-center relative bg-slate-100/10 
        rounded-lg p-1 px-2
        duration-200 ease-in-out"
      >
        <div
          class="bg-green-600 w-32 lg:w-40 h-8 rounded-lg shadow-md 
          transform duration-200 ease-in-out"
          :class="{ 'lg:translate-x-36 translate-x-28': toggleActive}"
        >
          <span
            v-if="selected === options[defaultOption]"
            class="flex mx-auto h-full justify-center items-center
          text-white select-none
            font-bold rounded-lg shadow-md
            animate-fade-in transition-all duration-200
            "
          >
            {{ getTag(selected.text) }}
          </span>
          <span
            v-else
            class="flex mx-auto h-full justify-center items-center
          text-white select-none
            font-bold rounded-lg shadow-md
            animate-fade-in transition-all duration-200
            "
          >
            {{ getTag(selected.text) }}
          </span>
        </div>
        <span
          class="text-gray-600 font-bold cursor-pointer select-none
          absolute left-8 lg:left-16 
          transition-opacity duration-75 ease-in-out"
          :class="toggleActive ? 'animate-fade-in': 'opacity-0'"
        >
          {{ getTag(options[0].text) }}
        </span>
        <span
          class="text-gray-600 font-bold cursor-pointer select-none
          absolute right-8 lg:right-12 
          transition-opacity duration-75 ease-in-out"
          :class="!toggleActive ? 'animate-fade-in': 'opacity-0'"
        >
          {{ getTag(options[1].text) }}
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
interface OptionSlide {
  value: string | number
  text: string
}
export default defineComponent({
  name: 'ButtonsAnimated',
  components: {
  },
  props: {
    defaultOption: {
      type: Number,
      default: 0,
      required: false,
    },
    options: {
      type: Array as PropType<OptionSlide[]>,
      default: () => [
        { value: 'on', text: 'On'},
        { value: 'off', text: 'Off'},
      ],
      required: false
    },
  },
  emits: ['selected'],
  data: () => ({
    toggleActive: true,
  }),
  computed: {
    selected() {
      return this.toggleActive ?  this.options[1] : this.options[0]
    }
  },
  watch: {
    toggleActive() {
      this.$emit('selected', this.selected)
    }
  },
  mounted() {
    this.toggleActive = this.defaultOption === 1 ? true : false
  },
  methods: {
    getTag(text: string, maxLength?: number) {
      if (!text)
        return 

      maxLength = maxLength || 10

      if (text.length > maxLength)
        return text.slice(0, maxLength).concat(' ...')
      else
        return text.slice(0, maxLength)
    }
  }
});
</script>
