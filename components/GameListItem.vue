<template>
  <div v-if="game" class="game-list-item">
    <img
      v-if="game.coverUrl"
      :src="game.coverUrl"
      alt="Embedded Image"
      class="game-list-image"
    />
    <img
      v-else="game.coverUrl"
      src="/digging-buddy-icon.jpg"
      alt="Embedded Image"
      class="game-list-image"
    />
    <div class="game-list-desc">
      <h4>{{ game.title }}</h4>
      <span>Date de sortie : {{ game.releaseDate }}</span>
      <p>{{ game.studio }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    game: {
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
  color: black;
}

.game-list-desc:hover {
  color: black;
  text-decoration: none;
}
</style>
