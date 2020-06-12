<template>
  <div class="container-list">
    <b-container ref="template" class="bv-example-row full-height">
      <b-row class="full-height">
        <b-col
          cols="2"
          class="no-padding-left-right filter-column full-height-scroll"
        >
          Ici on aura des filtres
        </b-col>
        <b-col
          ref="listContainer"
          v-on:scroll="scroll"
          cols="10"
          class="no-padding-left-right full-height-scroll"
        >
          <h1>Liste de jeux</h1>
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
    return context.store.dispatch(
      'games/getGamesFirstPage',
      context.route.query.search
    )
  },
  methods: {
    scroll() {
      if (
        this.$refs.listContainer.scrollTop +
          this.$refs.listContainer.offsetHeight >
        this.$refs.listContainer.scrollHeight - 300
      ) {
        this.pagination.currentPage++
        this.loadPage()
      }
    },
    loadPage() {
      this.$store
        .dispatch('games/getGamesPaginate', {
          page: this.pagination.currentPage,
          query: this.$route.query.search
        })
        .then((response) => {
          if (response.data.content.length > 0) {
            this.games = this.games.concat(response.data.content)
          }
        })
    }
  }
}
</script>
