<template>
  <div class="creation-container">
    <b-form-invalid-feedback :state="error.size > 0">
      {{ error }}
    </b-form-invalid-feedback>
    <LoginForm @submitLogIn="login" class="creation-form" />
    <br />
    <nuxt-link to="/sign-up"
      ><b-button variant="outline-primary">Créer un compte</b-button></nuxt-link
    >
  </div>
</template>

<script>
import LoginForm from '~/components/Forms/LoginForm'

export default {
  auth: 'guest',
  layout: 'notConnected',
  components: {
    LoginForm
  },
  data() {
    return { error: '' }
  },
  methods: {
    login(user) {
      this.$auth
        .loginWith('local', {
          data: user
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((errorServer) => {
          this.error = errorServer
        })
    }
  }
}
</script>
