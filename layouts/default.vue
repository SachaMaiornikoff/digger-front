<template>
  <div>
    <AppHeader @updatedQuery="updatedQuery" />
    <nuxt :query="query" />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    updatedQuery(query) {
      this.query = query
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
