<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Digging buddy
      </h1>
      <div class="padding-top-std">
        <a
          href="https://github.com/SachaMaiornikoff"
          target="_blank"
          class="button--grey"
        >
          GitHub {{ nbMR }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  auth: 'guest',
  layout: 'notConnected',
  components: {
    Logo
  },
  asyncData(context) {}
}
</script>
