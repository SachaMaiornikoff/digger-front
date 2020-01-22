export const state = () => {
  return {}
}

export const mutations = {}

export const actions = {
  async login({ dispatch }, user) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .post('/login', user)
      .then(function(response) {
        console.log(response)
        this.token = response.headers
        this.$router.replace('/games/list')
      })
      .catch((response) => console.log(response))
  }
}

export const getters = {}
