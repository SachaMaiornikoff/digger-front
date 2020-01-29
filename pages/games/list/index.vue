<template>
  <div class="container-list">
    <b-container ref="template" class="bv-example-row full-height">
      <b-row class="full-height">
        <b-col
          cols="2"
          class="no-padding-column filter-column full-height-scroll"
        >
          Ici on aura des filtres
        </b-col>
        <b-col
          ref="listContainer"
          v-on:scroll="scroll"
          cols="10"
          class="no-padding-column full-height-scroll"
        >
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
    return context.store.dispatch('games/getGamesFirstPage')
  },
  methods: {
    scroll() {
      if (
        this.$refs.listContainer.scrollTop +
          this.$refs.listContainer.offsetHeight ===
        this.$refs.listContainer.scrollHeight
      ) {
        this.pagination.currentPage++
        this.loadPage()
      }
    },
    loadPage() {
      this.$store
        .dispatch('games/getGamesPaginate', this.pagination.currentPage)
        .then((response) => {
          if (response.data.content.length > 0) {
            this.games = this.games.concat(response.data.content)
          }
        })
    }
  }
}
</script>

<style scoped>
.container-list {
  display: inline-block;
  max-width: none;
  padding-left: 0px;
  padding-right: 0px;
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
  max-height: 100%;
  overflow: hidden;
}

.full-height-scroll {
  height: 100%;
  max-height: 100%;
  overflow: scroll;
}
</style>
