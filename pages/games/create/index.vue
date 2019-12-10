<template>
  <div class="container">
    <nuxt-link to="/games/list">Retour</nuxt-link>
    <form class="creation-form" @submit.prevent="commitGame">
      <h1>Formulaire de création d'un jeu</h1>
      <p>Titre : <input v-model="game.title" type="text" /></p>
      <p>Date de sortie : <input v-model="game.releaseDate" type="date" /></p>
      <p>Studio : <input v-model="game.studio" type="text" /></p>
      <p>Image : <FileReader @load="uploadImage" /></p>

      <input type="submit" value="Créer jeu" />
    </form>
  </div>
</template>

<script>
import FileReader from '~/components/FileReader.vue'

export default {
  components: { FileReader },
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
