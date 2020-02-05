<template>
  <div class="full-height">
    <AppHeader class="app-header" />
    <nuxt class="full-height no-padding padding-top-big" />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>
