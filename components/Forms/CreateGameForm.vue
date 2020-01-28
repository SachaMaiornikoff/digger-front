<template>
  <div>
    <h2>Nouveau jeu :</h2>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Titre :" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.game.title"
          required
          placeholder="Titre"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Date de sortie :"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.game.releaseDate"
          type="date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Studio :" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.game.studio"
          type="text"
          required
          placeholder="Studio"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="URL de l'image de couverture :"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.game.coverUrl"
          type="text"
          required
          placeholder="URL"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="URL de l'image de gameplay :"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="form.game.gameplayImageUrl"
          type="text"
          required
          placeholder="URL"
        ></b-form-input>
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
        game: {
          title: '',
          studio: '',
          releaseDate: '',
          coverUrl: '',
          gameplayImageUrl: ''
        }
      },
      show: true
    }
  },
  watch: {},
  methods: {
    onSubmit() {
      this.$emit('submitCreateGame', this.form.game)
    },
    onReset() {
      // Reset our form values
      this.form = {
        game: {
          title: '',
          studio: '',
          releaseDate: '',
          coverUrl: '',
          gameplayImageUrl: ''
        }
      }

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
