<template>
  <ul class="games-container">
    <li
      v-for="(game, indexGame) in games"
      :key="indexGame"
      class="games-container-item"
    >
      <nuxt-link :to="'/games/' + game.id" class="not-underlined-link">
        <GameListItem :game="game" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import GameListItem from '~/components/GameListItem'

export default {
  components: { GameListItem },
  props: {
    games: { type: Array, required: true, default: () => [] }
  },
  component: {
    GameListItem
  }
}
</script>
