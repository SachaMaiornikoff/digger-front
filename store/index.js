export const state = () => {
  return {
    query: ''
  }
}

export const mutations = {
  updateQuery(state, query) {
    state.query = query
  }
}

export const actions = {
  // eslint-disable-next-line require-await
  async newSearch({ dispatch, commit }, data) {
    if (document.getElementById('newTag'))
      document.getElementById('newTag').value = data.query || ''

    return new Promise((resolve) => {
      commit('updateQuery', data.query ? data.query : '')
      dispatch('filters/validNewSearch', data, { root: true }).then(() => {
        resolve()
      })
    })
  },

  // eslint-disable-next-line require-await
  async populateQuery({ commit }, query) {
    commit('updateQuery', query || '')
  },

  // eslint-disable-next-line require-await
  async resetStateSearchAtrium({ dispatch, commit }) {
    commit('updateQuery', '')
    dispatch('filters/resetState', null, { root: true })
    dispatch('search/resetState', null, { root: true })
    dispatch('atrium/resetState', null, { root: true })
  },

  // eslint-disable-next-line require-await
  async resetStateFilters({ dispatch }) {
    dispatch('filters/resetState', null, { root: true })
    dispatch('search/resetState', null, { root: true })
    dispatch('atrium/resetState', null, { root: true })
  },

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

export const getters = {
  getQuery: (state) => state.query
}
