<template>
  <div>
    <h2>Se connecter :</h2>
    <b-form @submit.prevent="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Email :" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.user.email"
          required
          placeholder="Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Mot de passe :"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.user.password"
          type="password"
          required
          placeholder="Mot de passe"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Log in</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: { email: '', password: '' },
        pwd_confirm: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submitLogIn', this.form.user)
    }
  }
}
</script>
