<template>
  <b-container ref="template" class="bv-example-row">
    <b-row>
      <b-col cols="2">
        <img
          v-if="game.coverUrl"
          :src="game.coverUrl"
          class="full-width small-black-border"
          alt="Game_image"
        />
        <img
          v-else
          class="full-width small-black-border"
          src="/digging-buddy-icon.jpg"
          alt="Game_image"
        />
        <img
          v-on:click="deleteGame()"
          class="small-icon-sizing"
          src="/delete_icon.png"
        />
      </b-col>
      <b-col cols="10">
        <div ref="naming" class="white-title-shadowed-container">
          <h1>{{ game.title }}</h1>
          <h3>{{ game.studio }}</h3>
          <h4>{{ game.releaseDate }}</h4>
        </div>
        <div class="text-align-left">
          <p>
            {{ game.storyline }}
          </p>

          <p>
            {{ game.summary }}
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'GameDisplay',
  props: {
    game: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.$nextTick(function() {
        this.$refs.template.style.paddingTop =
          400 - this.$refs.naming.scrollHeight + 'px'
      })
    })
  },
  methods: {
    deleteGame() {
      return this.$store.dispatch('games/deleteGame', this.game.id)
    }
  }
}
</script>
