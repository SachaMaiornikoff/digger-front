<template>
  <div class="creation-container">
    <SignUpForm @submitSignUp="submitSignUp" class="creation-form" />
  </div>
</template>

<script>
import SignUpForm from '~/components/Forms/SignUpForm.vue'

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
      return this.$store.dispatch('users/createUser', user)
    }
  }
}
</script>
