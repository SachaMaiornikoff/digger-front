<template>
  <div>
    <b-navbar class="navigationbar" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Digging buddy</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link to="/games/list" class="not-underlined-link">
              Liste de jeux</nuxt-link
            >
          </b-nav-item>
          <b-nav-item v-if="user.privileges == 0">
            <nuxt-link to="/games/create" class="not-underlined-link"
              >Créer un jeu</nuxt-link
            >
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="search">
            <b-form-input
              v-model="searchField"
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ user.pseudo }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item v-on:click="signOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import cloneDeep from 'lodash.clonedeep'

export default {
  data() {
    return {
      user: cloneDeep(this.$store.state.auth.user),
      searchField: this.$route.query.search,
      pagination: {
        currentPage: 0
      }
    }
  },
  methods: {
    signOut() {
      this.$auth.logout()
    },
    search() {
      const path = this.currentRouteName
      const currentRouteQuery = cloneDeep(this.$route.query)
      delete currentRouteQuery.search
      if (!this.searchField !== '') {
        currentRouteQuery.search = this.searchField
      }
      this.$router.push({ path, query: currentRouteQuery }, function() {
        location.reload()
      })
    }
  }
}
</script>
