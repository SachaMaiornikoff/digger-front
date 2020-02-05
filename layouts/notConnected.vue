<template>
  <div>
    <AppHeaderNotConnected />
    <nuxt />
  </div>
</template>

<script>
import AppHeaderNotConnected from '~/components/AppHeaderNotConnected.vue'

export default {
  components: {
    AppHeaderNotConnected
  }
}
</script>
