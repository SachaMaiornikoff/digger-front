<template>
  <div class="container">
    <form @submit.prevent="commitGame">
      <h1>Formulaire de création d'un jeu</h1>
      <a>Titre : </a><input v-model="game.title" type="text" />
      <a>Date de sortie : </a><input v-model="game.releaseDate" type="date" />
      <a>Studio : </a><input v-model="game.studio" type="text" />
      <input type="submit" value="Créer jeu" />
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { game: JSON }
  },
  asyncData(context) {},
  methods: {
    commitGame() {
      return this.$store.dispatch('games/createGame', this.game)
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
