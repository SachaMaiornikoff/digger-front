<template>
  <div class="gameListItem">
    <img
      :src="'data:image/png;base64,' + gameImage.image"
      alt="Embedded Image"
      class="gameListImage"
    />
    <div class="gameListDesc">
      <h4>{{ gameImage.game.title }}</h4>
      <a>Date de sortie : {{ gameImage.game.releaseDate }}</a>
      <br />
      <a>{{ gameImage.game.description }}</a>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line no-undef
  props: { gameImage: Object },
  data(context) {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
  },
  fetch() {
    // The `fetch` method is used to fill the store before rendering the page
  },
  head() {
    // Set Meta Tags for this Page
  }
  // and more functionality to discover
}
</script>
<style>
.gameListItem {
  border: black solid 1px;
  width: 450px;
  height: 200px;
  display: flex;
}

.gameListImage {
  height: 198px;
  width: 150px;
  display: inline-block;
}

.gameListDesc {
  height: 198px;
  width: 300px;
  display: inline-block;
  font-size: 0.8em;
}
</style>
