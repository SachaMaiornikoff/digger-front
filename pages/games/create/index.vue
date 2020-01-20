<template>
  <div class="container">
    <nuxt-link to="/games/list">Retour</nuxt-link>
    <form @submit.prevent="commitGame" class="creation-form">
      <h1>Formulaire de création d'un jeu</h1>
      <p>Titre : <input v-model="game.title" type="text" /></p>
      <p>Date de sortie : <input v-model="game.releaseDate" type="date" /></p>
      <p>Studio : <input v-model="game.studio" type="text" /></p>
      <p>
        URL de l'image de la couverture :
        <input v-model="game.coverUrl" type="text" />
      </p>
      <p>
        URL d'une image de gameplay :
        <input v-model="game.gameplayImageUrl" type="text" />
      </p>

      <input type="submit" value="Créer jeu" />
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { game: {} }
  },
  asyncData(context) {},
  methods: {
    commitGame() {
      return this.$store.dispatch('games/createGame', this.game)
    },
    uploadImage(e) {
      this.game.image = e.toString()
    }
  }
}
</script>

<style>
.container {
  text-align: center;
  display: inline-block;
}

.creation-form {
  width: 40%;
  margin-left: 30%;
}
</style>
