<template>
  <div class="container">
    <div>
      <h1 class="title">
        Monitoring Gitlab & JIRA
      </h1>
      <div class="filters creation-form">
        <span>Projets</span>
        <div>
          <b-form-select
            v-model="selectedFilters.selectedProject"
            :options="projects"
            @change="projectSet"
          ></b-form-select>
        </div>
        <br />
        <span>Utilisateur</span>
        <div>
          <b-form-select
            v-model="selectedFilters.selectedUser"
            :options="users"
            @change="loadData"
            text-field="name"
            value-field="id"
          ></b-form-select>
        </div>
        <br />
        <span>APP/DATA</span>
        <div>
          <b-form-select
            v-model="selectedFilters.selectedJiraProject"
            :options="jiraProjects"
            @change="loadData"
          ></b-form-select>
        </div>
        <br />
        <span>Date de début (incluse)</span>
        <div>
          <b-form-input
            v-model="selectedFilters.from"
            @change="loadData"
            type="date"
            placeholder="date de début"
          ></b-form-input>
        </div>
        <br />
        <span>Date de fin (incluse)</span>
        <div>
          <b-form-input
            v-model="selectedFilters.to"
            @change="loadData"
            type="date"
            placeholder="date de fin"
          ></b-form-input>
        </div>
      </div>
      <div class="padding-top-std">
        <span class="button--grey">
          Nombre de MR cette semaine {{ nbMR }}
        </span>
        <br />
        <span> Nombre de retour sur ces MR : {{ nbComments }} </span>
        <br />
        <span> Nombre de reviews faite sur la période : {{ nbReviews }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'connected',
  components: {},
  data() {
    return {
      selectedFilters: {
        selectedProject: {},
        selectedUser: {},
        from: '',
        to: '',
        selectedJiraProject: ''
      },
      jiraProjects: ['APP', 'DATA'],
      users: [],
      nbMR: 0,
      nbComments: 0,
      nbReviews: 0
    }
  },
  asyncData(context) {
    return context.store.dispatch('gitlab/getGitlabProjects')
  },
  methods: {
    async projectSet() {
      if (this.users.length !== 0) {
        this.loadData()
      } else {
        this.users = []
        this.selectedFilters.selectedUser = {}
        await this.$store
          .dispatch(
            'gitlab/getGitlabUsers',
            this.selectedFilters.selectedProject
          )
          .then((a) => {
            this.users = a.users
          })
      }
    },
    async loadData() {
      this.nbReviews = 0
      let selectedUserName = {}
      this.users.forEach((user) => {
        if (this.selectedFilters.selectedUser === user.id)
          selectedUserName = user.name
      })
      if (
        this.selectedFilters.selectedUser !== {} &&
        this.selectedFilters.from !== '' &&
        this.selectedFilters.to !== '' &&
        this.selectedFilters.selectedJiraProject !== '' &&
        this.selectedFilters.selectedProject !== {}
      ) {
        await this.$store
          .dispatch('gitlab/getNumberOfMRLastWeek', this.selectedFilters)
          .then((a) => {
            this.nbMR = a.nbMR
            this.nbComments = a.nbComments
          })
        await this.$store
          .dispatch('gitlab/getJiraTickets', this.selectedFilters)
          .then((a) => {
            a.forEach((issue) => {
              const reviewers = issue.fields.customfield_10413

              if (reviewers !== null && reviewers !== undefined) {
                reviewers.forEach((reviewer) => {
                  if (reviewer.displayName === selectedUserName) {
                    this.nbReviews++
                  }
                })
              }
            })
          })
      }
    }
  }
}
</script>
