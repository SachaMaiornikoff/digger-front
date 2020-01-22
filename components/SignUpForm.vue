<template>
  <div>
    <h2>Nouvel utilisateur :</h2>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-invalid-feedback :state="validOverall">
        Veuillez corriger les erreurs avant de valider ce formulaire.
      </b-form-invalid-feedback>

      <b-form-group
        id="input-group-1"
        label="Votre pseudo :"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.user.pseudo"
          required
          placeholder="Pseudo"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Adresse Email :"
        label-for="input-2"
        description="Nous ne partagerons votre adresse mail avec personne."
      >
        <b-form-input
          id="input-2"
          v-model="form.user.email"
          type="email"
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
          :state="sizeValidPassword"
          type="password"
          required
          placeholder="Mot de passe"
        ></b-form-input>
        <b-form-invalid-feedback :state="sizeValidPassword">
          Ton mot de passe doit faire 5-12 caractères.
        </b-form-invalid-feedback>
        <br />
        <b-form-input
          id="input-3"
          v-model="form.pwd_confirm"
          :state="confirmValidPassword"
          type="password"
          required
          placeholder="Confirmez votre mot de passe"
        ></b-form-input>
        <b-form-invalid-feedback :state="confirmValidPassword">
          Les deux mots de passe doivent correspondre.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: { email: '', pseudo: '', password: '' },
        pwd_confirm: ''
      },
      show: true,
      sizeValidPassword: false,
      confirmValidPassword: false,
      validOverall: true
    }
  },
  watch: {
    'form.user.password'() {
      this.sizeValidPassword =
        this.form.user.password.length > 4 &&
        this.form.user.password.length < 13
      this.confirmValidPassword =
        this.form.user.password === this.form.pwd_confirm
    },
    'form.pwd_confirm'() {
      this.confirmValidPassword =
        this.form.user.password === this.form.pwd_confirm
    }
  },
  methods: {
    onSubmit(evt) {
      this.validOverall = this.sizeValidPassword && this.confirmValidPassword
      if (this.validOverall) this.$emit('submitSignUp', this.form.user)
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form = {
        user: { email: '', pseudo: '', password: '' },
        pwd_confirm: ''
      }
      this.sizeValidPassword = false
      this.confirmValidPassword = false
      this.validOverall = true

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
