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
      <a>{{ gameImage.game.studio }}</a>
    </div>
  </div>
</template>
<script>
export default {
  props: { gameImage: Object }
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
