export const actions = {
  async getGames({ dispatch }) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .get('/games', { progress: false })
      .then((response) => {
        return {
          gamesImage: response.data
        }
      })
  }
}
