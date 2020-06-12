<template>
  <div class="global-container">
    <div ref="gameplayImage" class="gameplay-image"></div>
    <GameDisplay :game="game" class="gameplay-container" />
  </div>
</template>

<script>
import GameDisplay from '~/components/GameDisplay'

export default {
  layout: 'connected',
  components: {
    GameDisplay
  },
  asyncData(context) {
    return context.store.dispatch('games/getGame', context.params.id)
  },
  mounted() {
    this.$refs.gameplayImage.style.backgroundImage =
      "url('" +
      (this.game.gameplayImageUrl ||
        'https://i.ytimg.com/vi/AZ0bxSxdIWw/maxresdefault.jpg') +
      "')"
  },
  methods: {}
}
</script>
