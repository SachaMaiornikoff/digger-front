<template>
  <div class="container">
    <b-container ref="template" class="bv-example-row">
      <b-row class="full-height">
        <b-col cols="2" class="no-padding-column filter-column">
          Ici on aura des filtres
        </b-col>
        <b-col cols="10" class="no-padding-column">
          <h1>Liste de jeu</h1>
          <GameList :games="games" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import cloneDeep from 'lodash.clonedeep'
import GameList from '~/components/GameList.vue'

export default {
  layout: 'connected',
  components: {
    GameList
  },
  data() {
    return {
      user: cloneDeep(this.$store.state.auth.user),
      pagination: {
        currentPage: 0
      }
    }
  },
  asyncData(context) {
    return context.store.dispatch('games/getAllGames')
  }
}
</script>

<style>
.container {
  display: inline-block;
  max-width: none;
  padding: 0px;
  height: 100%;
}

.no-padding-column {
  padding-left: 0;
  padding-right: 0;
}

.filter-column {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 95%,
    rgba(167, 167, 167, 1) 100%
  );
}

.full-height {
  height: 100%;
}
</style>
