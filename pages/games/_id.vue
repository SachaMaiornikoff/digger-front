<template>
  <div class="container">
    <div>
      <nuxt-link to="/games/list">Retour</nuxt-link>
      <h1>test</h1>
      <img
        :src="'data:image/png;base64,' + gameImage.image"
        alt="Embedded Image"
        class="gameListImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  asyncData(context) {
    console.log('yop')
    return context.$axios
      .get('/games/' + context.params.id)
      .then((response) => {
        return {
          gameImage: response.data
        }
      })
      .catch((error) => console.log('There was an error : ' + error))
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
