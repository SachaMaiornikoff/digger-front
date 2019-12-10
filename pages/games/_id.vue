<template>
  <div class="container">
    <div class="image-container">
      <img
        :src="'data:image/png;base64,' + gameImage.image"
        alt="Embedded Image"
        class="game-image"
      />
    </div>
    <div class="description-container">
      <nuxt-link class="back-button" to="/games/list"
        ><span class="glyphicon glyphicon-chevron-left"></span>
        Retour</nuxt-link
      >
      <h1>{{ gameImage.game.title }}</h1>
      <img
        v-on:click="deleteGame()"
        class="delete-icon"
        src="/delete_icon.png"
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
  width: 100%;
  height: 100px;
  display: inline-block;
  padding: 0;
  position: relative;
}

.description-container {
  width: 79%;
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 0px;
}

.image-container {
  width: 20%;
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0px;
}

.game-image {
  width: 100%;
}

.delete-icon {
  max-height: 25px;
  position: absolute;
  top: 0px;
  right: 0px;
}

.back-button {
  position: absolute;
  top: 0px;
  left: 0px;
}

.delete-icon:hover {
  cursor: pointer;
}
</style>
