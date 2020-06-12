export const state = () => {
  return {}
}

export const actions = {
  async getGamesFirstPage({ dispatch }) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .get('/games/paginate/0', { progress: false })
      .then((response) => {
        return {
          games: response.data.content
        }
      })
  },
  getGamesPaginate({ dispatch }, page) {
    return this.$axios.get('/games/paginate/' + page, { progress: false })
  },
  async getGame({ dispatch }, idGame) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .get('/games/' + idGame, { progress: false })
      .then((response) => {
        return {
          game: response.data
        }
      })
  },
  async deleteGame({ dispatch }, idGame) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .delete('/games/' + idGame, { progress: false })
      .then((response) => {
        this.$router.replace('/games/list')
        return {
          game: response.data
        }
      })
  },
  async createGame({ dispatch }, game) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .post('/games', game)
      .then((response) => this.$router.replace('/games/list'))
  }
}

export const mutations = {}
