<template>
  <div class="container">
    <div>
      <nuxt-link to="/games/list">Retour</nuxt-link>
      <h1>{{ gameImage.game.title }}</h1>
      <button v-on:click="deleteGame()">
        Supprimer entrée
      </button>
      <img
        :src="'data:image/png;base64,' + gameImage.image"
        alt="Embedded Image"
        class="game-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  asyncData(context) {
    return context.store.dispatch('games/getGame', context.params.id)
  },
  methods: {
    deleteGame(str) {
      return this.$store.dispatch('games/deleteGame', this.gameImage.game.id)
    }
  }
}
</script>

<style>
.container {
  text-align: center;
}

.game-image {
  max-height: 450px;
  overflow: auto;
}
</style>
