<template>
  <div>
    <b-navbar class="navigationbar" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Digging buddy</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link to="/login" class="not-underlined-link"
              >S'identifier</nuxt-link
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script></script>
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
