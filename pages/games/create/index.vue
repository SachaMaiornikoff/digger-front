<template>
  <div class="creation-container">
    <CreateGameForm
      @submitCreateGame="submitCreateGame"
      class="creation-form"
    />
    <input v-model="igdbnum" type="number" />
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
          _self.triggerGetGameWithId(Number(_self.igdbnum) + i)
        }, 5000 * i)
      }
    },
    triggerGetGameWithId(igdbnum) {
      console.log(igdbnum)
      const _self = this.$axios
      const _selfThis = this
      _self.setHeader('user-key', '02213682323c388dd0897166b0ca3b08')
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
            studio: response.involved_companies.filter((a) => a.developer)
              .data[0].company.name,
            releaseDate: new Date(response.data[0].first_release_date * 1000),
            coverUrl:
              response.data[0].cover.url === undefined
                ? ''
                : 'http:' +
                  response.data[0].cover.url.replace('t_thumb', 't_cover_big'),
            gameplayImageUrl:
              response.data[0].screenshots.data.length === 0
                ? ''
                : 'http:' +
                  response.data[0].screenshots.data[0].url.replace(
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
