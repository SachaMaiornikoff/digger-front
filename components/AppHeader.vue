<template>
  <div>
    <b-navbar class="navigationbar" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Digging buddy</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link to="/games/list" class="not-underlined-link">
              Liste de jeu</nuxt-link
            >
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/games/create" class="not-underlined-link"
              >Créer un jeu</nuxt-link
            >
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
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
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
      pagination: {
        currentPage: 0
      }
    }
  }
}
</script>
<style>
.not-underlined-link {
  color: white;
}
.not-underlined-link:hover {
  color: white;
}
.navigationbar {
  z-index: 4;
}
</style>
