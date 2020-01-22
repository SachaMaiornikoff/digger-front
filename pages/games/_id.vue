<template>
  <div class="global-container">
    <div ref="gameplayImage" class="gameplay-image"></div>
    <GameDisplay class="gameplay-container" :game="game" />
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

<style>
.global-container {
  width: 100%;
  padding: 0;
  position: relative;
  background-size: 100%;
}

.gameplay-image {
  position: absolute;
  width: 100%;
  height: 400px;
  filter: blur(10px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.gameplay-container {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
