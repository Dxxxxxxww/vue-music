<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import { useScroll } from './use-scroll'
import { ref } from 'vue'

export default {
  name: 'music-scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  emits: ['scroll', 'scrollEnd'],
  setup(props, { emit }) {
    const rootRef = ref(null)
    const { scroll } = useScroll(rootRef, props, emit)

    return {
      rootRef,
      scroll
    }
  }
}
</script>
