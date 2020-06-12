export const state = () => {
  return {}
}

export const actions = {
  async createUser({ dispatch }, user) {
    user.privileges = 1
    // eslint-disable-next-line no-return-await
    return await this.$axios.post('/users/sign-up', user).then((response) =>
      this.$auth
        .loginWith('local', {
          data: user
        })
        .then(() => {
          this.$router.push('/games/list')
        })
    )
  }
}

export const mutations = {
  incrementNbRequest(state) {
    state.nbRequests++
  }
}
