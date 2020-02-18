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
        }, 2500 * i)
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
          'fields cover, first_release_date, name, screenshots, storyline, summary, involved_companies; where id = ' +
            igdbnum +
            ';'
        )
        .then(function(response) {
          _self
            .post(
              'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers',
              'fields url; where id = ' + response.data[0].cover + ';'
            )
            .then(function(responseCover) {
              const firstCover =
                response.data[0].screenshots === undefined
                  ? ''
                  : response.data[0].screenshots[0] + ';'
              _self
                .post(
                  'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/screenshots',
                  firstCover === ''
                    ? ''
                    : 'fields *; where id = ' + firstCover + ';'
                )
                .then(function(responseGameplay) {
                  let body = 'fields *; where id = ('
                  response.data[0].involved_companies.forEach(
                    (element) => (body = body + element + ',')
                  )
                  body = body.substring(0, body.length - 1)
                  body = body + ') & developer = true;'

                  _self
                    .post(
                      'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/involved_companies',
                      body
                    )
                    .then(function(responseInvolvedCompanies) {
                      _self
                        .post(
                          'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/companies',
                          'fields name; where id = ' +
                            responseInvolvedCompanies.data[0].company +
                            ';'
                        )
                        .then(function(responseDeveloper) {
                          const game = {
                            title: response.data[0].name,
                            studio: responseDeveloper.data[0].name,
                            releaseDate: new Date(
                              response.data[0].first_release_date * 1000
                            ),
                            coverUrl:
                              responseCover.data[0].url === undefined
                                ? ''
                                : 'http:' +
                                  responseCover.data[0].url.replace(
                                    't_thumb',
                                    't_cover_big'
                                  ),
                            gameplayImageUrl:
                              responseGameplay.data[0].url === undefined
                                ? ''
                                : 'http:' +
                                  responseGameplay.data[0].url.replace(
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
                    })
                })
            })
        })
    }
  }
}
</script>
