<template>
  <div class="container">
    <SignUpForm @submitSignUp="submitSignUp" class="creation-form" />
  </div>
</template>

<script>
import SignUpForm from '~/components/SignUpForm.vue'

export default {
  auth: 'guest',
  layout: 'notConnected',
  components: {
    SignUpForm
  },
  data() {
    return {
      user: { pseudo: '', email: '', password: '' },
      password_confirm: ''
    }
  },
  watch: {
    password_confirm() {
      this.raiseErrors()
    }
  },
  methods: {
    submitSignUp(user) {
      console.log(user)
      return this.$store.dispatch('users/createUser', user)
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

.error {
  border-color: red;
}
</style>
