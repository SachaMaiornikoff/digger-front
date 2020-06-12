<template>
  <div class="creation-container">
    <CreateGameForm
      @submitCreateGame="submitCreateGame"
      class="creation-form"
    />
    <label>
      <input v-model="igdbnum" type="number" />
    </label>
    <button v-on:click="fetchGameData" variant="primary">GO</button>
  </div>
</template>

<script>
import CreateGameForm from '~/components/Forms/CreateGameForm'

export default {
  layout: 'connected',
  components: {
    CreateGameForm
  },
  data() {
    return {
      game: {},
      igdbnum: 0
    }
  },
  asyncData(context) {},
  methods: {
    submitCreateGame(game) {
      return this.$store.dispatch('games/createGame', game)
    },
    fetchGameData() {
      const _self = this
      for (let i = 0; i < 100; i++) {
        setTimeout(function() {
          _self.$store
            .dispatch('games/gameExists', Number(_self.igdbnum) + i)
            .then((response) => {
              if (!response.data) {
                _self.triggerGetGameWithId(Number(_self.igdbnum) + i)
              }
            })
        }, 5000 * i)
      }
    },
    triggerGetGameWithId(igdbnum) {
      const _self = this.$axios
      const _selfThis = this
      _self.setHeader('user-key', 'f983e18038033b2728a01f9747754402')
      _self
        .post(
          'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/',
          'fields cover.url, first_release_date, name, screenshots.url, storyline, summary, involved_companies.developer, involved_companies.company.name; where id = ' +
            igdbnum +
            ';'
        )
        .then(function(response) {
          const game = {
            title: response.data[0].name,
            studio: response.data[0].involved_companies.filter(
              (a) => a.developer
            )[0].company.name,
            releaseDate: new Date(response.data[0].first_release_date * 1000),
            coverUrl:
              response.data[0].cover.url === undefined
                ? ''
                : 'http:' +
                  response.data[0].cover.url.replace('t_thumb', 't_cover_big'),
            gameplayImageUrl:
              response.data[0].screenshots.length === 0
                ? ''
                : 'http:' +
                  response.data[0].screenshots[0].url.replace(
                    't_thumb',
                    't_screenshot_big'
                  ),
            storyline: response.data[0].storyline,
            summary: response.data[0].summary,
            igdb: igdbnum
          }
          game.releaseDate =
            game.releaseDate.getFullYear() +
            '-' +
            (game.releaseDate.getUTCMonth() + 1) +
            '-' +
            game.releaseDate.getUTCDate()
          _selfThis.submitCreateGame(game)
        })
    }
  }
}
</script>
