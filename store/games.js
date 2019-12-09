export const state = () => {
  return {
    nbRequests: 0
  }
}

export const actions = {
  async getAllGames({ dispatch }) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .get('/games', { progress: false })
      .then((response) => {
        return {
          gamesImage: response.data
        }
      })
  },
  async getGame({ dispatch }, idGame) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .get('/games/' + idGame, { progress: false })
      .then((response) => {
        return {
          gameImage: response.data
        }
      })
      .catch((error) => console.log('There was an error : ' + error))
  },
  async deleteGame({ dispatch }, idGame) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .delete('/games/' + idGame, { progress: false })
      .then((response) => {
        this.$router.replace('/games/list')
        return {
          gamesImage: response.data
        }
      })
  },
  async createGame({ dispatch }, game) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .post('/games', game)
      .then((response) => this.$router.replace('/games/list'))
      .catch((response) => console.log(response))
  }
}

export const mutations = {
  incrementNbRequest(state) {
    state.nbRequests++
  }
}
