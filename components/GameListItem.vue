<template>
  <div v-if="gameImage" class="game-list-item">
    <img
      :src="'data:image/png;base64,' + gameImage.image"
      alt="Embedded Image"
      class="game-list-image"
    />
    <div class="game-list-desc">
      <h4>{{ gameImage.game.title }}</h4>
      <span>Date de sortie : {{ gameImage.game.releaseDate }}</span>
      <p>{{ gameImage.game.studio }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gameImage: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>
<style>
.game-list-item {
  border: black solid 1px;
  width: 450px;
  height: 200px;
  display: flex;
  border-radius: 20px;
}

.game-list-image {
  height: 198px;
  width: 150px;
  display: inline-block;
  border-right: black solid 1px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.game-list-desc {
  height: 198px;
  width: 300px;
  display: inline-block;
  font-size: 0.8em;
}
</style>
