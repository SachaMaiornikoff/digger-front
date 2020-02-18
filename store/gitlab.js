export const state = () => {
  return {}
}

export const actions = {
  async getNumberOfMRLastWeek({ dispatch }, selectedFilter) {
    // 10-02-2020
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .get(
        'https://gitlab.com/api/v4/projects/' +
          selectedFilter.selectedProject +
          '/merge_requests?author_id=' +
          selectedFilter.selectedUser +
          '&updated_after=' +
          selectedFilter.from +
          '&updated_before=' +
          selectedFilter.to +
          '&scope=all',
        {
          progress: false,
          headers: {
            Authorization: null
          }
        }
      )
      .then((response) => {
        let count = 0
        for (const mr of response.data) {
          count += mr.user_notes_count
        }
        return {
          nbMR: response.data.length,
          nbComments: count
        }
      })
  },
  async getJiraTickets({ dispatch }, selectedFilter) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://predictice.atlassian.net/rest/api/2/search?jql=updated>' +
          selectedFilter.from +
          '+AND+updated<' +
          selectedFilter.to +
          '+AND+project=' +
          selectedFilter.selectedJiraProject +
          '&maxResults=100',
        {
          progress: false,
          headers: {
            Authorization: 'Basic JIRA_KEY'
          }
        }
      )
      .then((response) => {
        return response.data.issues
      })
  },

  async getGitlabProjects({ dispatch }) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .get(
        'https://gitlab.com/api/v4/projects?visibility=private&per_page=100',
        {
          progress: false,
          headers: {
            Authorization: null
          }
        }
      )
      .then((response) => {
        const tab = []
        tab.push({ text: 'Sélectionnez un projet' })
        for (const element of response.data) {
          tab.push({ id: element.id, value: element.id, text: element.name })
        }
        return {
          projects: tab
        }
      })
  },

  async getGitlabUsers({ dispatch }, projectId) {
    // eslint-disable-next-line no-return-await
    return await this.$axios
      .get(
        'https://gitlab.com/api/v4/projects/' +
          projectId +
          '/users?active=true',
        {
          progress: false,
          headers: {
            Authorization: null
          }
        }
      )
      .then((response) => {
        return {
          users: response.data
        }
      })
  }
}

export const mutations = {}
