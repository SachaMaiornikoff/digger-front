<template>
  <div class="container">
    <form @submit.prevent="login" class="creation-form">
      <h1>Formulaire d'identification</h1>
      <p>Email : <input v-model="user.email" type="text" /></p>
      <p>Mot de passe : <input v-model="user.password" type="password" /></p>
      <input type="submit" value="Log in" /><br />
      <nuxt-link to="/sign-up">Créer un compte</nuxt-link>
    </form>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  layout: 'notConnected',
  components: {},
  data() {
    return { user: { email: '', password: '' } }
  },
  methods: {
    login() {
      this.$auth
        .loginWith('local', {
          data: this.user
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          const statusCode = error.response.status
          console.log('Error while logging in : ' + statusCode + ' ' + error)
        })
    }
  }
}
</script>

<style>
.container {
  text-align: center;
  display: inline-block;
}

.creation-form {
  width: 40%;
  margin-left: 30%;
}
</style>
