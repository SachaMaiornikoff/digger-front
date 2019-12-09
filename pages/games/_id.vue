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
        class="gameListImage"
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
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
