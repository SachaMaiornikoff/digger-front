<template>
  <div class="global-container">
    <nuxt-link class="back-button" to="/games/list"
      ><img src="https://img.icons8.com/windows/96/000000/circled-left-2.png"
    /></nuxt-link>
    <img
      v-if="game.gameplayImageUrl"
      :src="game.gameplayImageUrl"
      alt="Gameplay_image"
      class="gameplay-image"
    />
    <img
      v-else
      src="http://www.imfdb.org/images/3/39/MW1-Shipunov-Placeholder.jpg"
      alt="Gameplay_image"
      class="gameplay-image"
    />
    <div class="content">
      <div class="image-container">
        <img
          v-if="game.coverUrl"
          :src="game.coverUrl"
          alt="Game_image"
          class="game-image"
        />
        <img
          v-else
          src="/digging-buddy-icon.jpg"
          alt="Game_image"
          class="game-image"
        />
      </div>
      <div class="title-container">
        <h1>{{ game.title }}</h1>
        <h3>{{ game.studio }}</h3>
        <h4>{{ game.releaseDate }}</h4>
      </div>
      <div class="description-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          est ultricies tortor aliquet scelerisque a ac elit. Duis aliquam
          lacinia lacinia ante id tempus. Donec consequat congue nisi in
          ultricies. Quisque cursus feugiat nisl id accumsan. Donec et ipsum
          posuere, scelerisque est eget, dignissim diam. Praesent vitae feugiat
          erat. Mauris lorem purus, feugiat id consectetur at, scelerisque non
          arcu. Vestibulum eleifend, est a tempus efficitur, massa diam porta
          lacus, elementum gravida purus massa sit amet lacus. Fusce vestibulum
          mi urna, vel tempus arcu mattis vel. Aenean quis ligula a nunc mattis
          pretium eget nec eros. In libero velit, porta eu neque sit amet,
          lobortis pulvinar purus. Nulla sit amet lacinia libero. Fusce ex
          turpis, rutrum vitae urna at, accumsan consequat nulla.
        </p>

        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
          tincidunt, ligula in vehicula laoreet, erat nulla tempor leo, a tempus
          tellus felis vitae ligula. Duis viverra et sapien sed pretium. Morbi a
          lectus id massa malesuada convallis eget varius nunc. Sed convallis
          orci vel sagittis volutpat. Sed convallis eros eget consectetur
          rhoncus. Nulla a quam a felis consequat hendrerit non vitae dolor. Sed
          porta dictum elit, eu dapibus lacus placerat in. Fusce tempor tortor
          neque, pharetra euismod dui pulvinar vitae. Mauris congue, ipsum nec
          varius imperdiet, odio magna aliquam arcu, consequat egestas justo
          ipsum rhoncus turpis. Pellentesque et ante at dolor molestie blandit.
          Phasellus nibh est, efficitur et ligula quis, porta consequat dui. Ut
          imperdiet augue mauris, a cursus lectus viverra vel.
        </p>

        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nam nec tempor lectus. Nam suscipit orci eu
          elit molestie efficitur. Ut molestie nunc nisl, et semper mauris
          egestas vel. Nunc bibendum fringilla tempor. Donec eu pulvinar velit,
          et aliquam libero. Praesent vitae posuere nisl. Aliquam aliquam magna
          vitae libero tempor faucibus. Etiam sollicitudin magna ullamcorper
          magna porta hendrerit. Duis congue risus in metus condimentum semper.
          Etiam aliquet massa at tristique malesuada.
        </p>

        <p>
          Mauris ut accumsan nunc. Sed vel auctor lacus. In luctus libero nunc,
          quis sollicitudin purus elementum eu. Sed lacus augue, laoreet iaculis
          cursus vitae, fringilla sit amet erat. Etiam non est vel lorem
          ultrices aliquam id ac enim. Aliquam mollis, eros in ornare accumsan,
          justo erat volutpat arcu, sit amet maximus odio turpis ut est. Nam
          vitae lacus quis nisl varius dignissim. Sed elementum massa nec lacus
          luctus vestibulum. Sed aliquet libero et nunc egestas vehicula. Sed
          fermentum porttitor laoreet. Integer tristique quam ipsum, in viverra
          eros gravida vitae. Sed consequat elit sed sapien consectetur, vel
          sodales odio laoreet.
        </p>

        <p>
          Maecenas turpis leo, euismod non aliquam id, dignissim et tellus.
          Praesent sollicitudin augue quis dignissim dictum. Quisque vitae felis
          egestas, tempus neque a, accumsan libero. Donec eleifend semper
          lacinia. Nullam et velit sit amet massa pellentesque rhoncus a nec
          orci. Ut tristique urna eu lorem ultrices venenatis. Donec lacinia
          hendrerit ligula nec dictum. Pellentesque volutpat eros convallis
          dignissim lobortis. Cras tincidunt tempor sapien, sit amet laoreet
          lacus finibus vitae.
        </p>
      </div>
      <div class="links-container">
        <img
          v-on:click="deleteGame()"
          class="delete-icon"
          src="/delete_icon.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  asyncData(context) {
    return context.store.dispatch('games/getGame', context.params.id)
  },
  methods: {
    deleteGame(str) {
      return this.$store.dispatch('games/deleteGame', this.game.id)
    }
  }
}
</script>

<style>
.content {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: -150px;
  padding: 0;
  position: relative;
}
.global-container {
  width: 100%;
  padding: 0;
  position: relative;
}

.title-container {
  width: 79%;
  display: inline-block;
  position: absolute;
  right: 0px;
  text-align: left;
  text-shadow: 1px 1px 2px black;
  color: white;
}

.image-container {
  width: 20%;
  height: 400px;
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0px;
}

.game-image {
  width: 100%;
}

.description-container {
  width: 79%;
  right: 0px;
  position: absolute;
  margin-top: 155px;
}

.gameplay-image {
  width: 100%;
  height: 400px;
  position: relative;
  border: 1px solid;
  filter: blur(10px);
}

.delete-icon {
  max-height: 25px;
  position: absolute;
  top: 0px;
  right: 0px;
}

.back-button {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
}

.delete-icon:hover {
  cursor: pointer;
}

.links-container {
  width: 20%;
  position: relative;
  left: 0px;
  top: 400px;
}
</style>
