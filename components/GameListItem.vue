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
