<template>
  <b-container ref="template" class="bv-example-row">
    <b-row>
      <b-col cols="2">
        <img
          v-if="game.coverUrl"
          :src="game.coverUrl"
          class="game-cover"
          alt="Game_image"
        />
        <img
          v-else
          class="game-cover"
          src="/digging-buddy-icon.jpg"
          alt="Game_image"
        />
        <img v-on:click="deleteGame()" class="icon" src="/delete_icon.png" />
      </b-col>
      <b-col cols="10">
        <div ref="naming" class="title-container">
          <h1>{{ game.title }}</h1>
          <h3>{{ game.studio }}</h3>
          <h4>{{ game.releaseDate }}</h4>
        </div>
        <div class="desc-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            in est ultricies tortor aliquet scelerisque a ac elit. Duis aliquam
            lacinia lacinia ante id tempus. Donec consequat congue nisi in
            ultricies. Quisque cursus feugiat nisl id accumsan. Donec et ipsum
            posuere, scelerisque est eget, dignissim diam. Praesent vitae
            feugiat erat. Mauris lorem purus, feugiat id consectetur at,
            scelerisque non arcu. Vestibulum eleifend, est a tempus efficitur,
            massa diam porta lacus, elementum gravida purus massa sit amet
            lacus. Fusce vestibulum mi urna, vel tempus arcu mattis vel. Aenean
            quis ligula a nunc mattis pretium eget nec eros. In libero velit,
            porta eu neque sit amet, lobortis pulvinar purus. Nulla sit amet
            lacinia libero. Fusce ex turpis, rutrum vitae urna at, accumsan
            consequat nulla.
          </p>

          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
            tincidunt, ligula in vehicula laoreet, erat nulla tempor leo, a
            tempus tellus felis vitae ligula. Duis viverra et sapien sed
            pretium. Morbi a lectus id massa malesuada convallis eget varius
            nunc. Sed convallis orci vel sagittis volutpat. Sed convallis eros
            eget consectetur rhoncus. Nulla a quam a felis consequat hendrerit
            non vitae dolor. Sed porta dictum elit, eu dapibus lacus placerat
            in. Fusce tempor tortor neque, pharetra euismod dui pulvinar vitae.
            Mauris congue, ipsum nec varius imperdiet, odio magna aliquam arcu,
            consequat egestas justo ipsum rhoncus turpis. Pellentesque et ante
            at dolor molestie blandit. Phasellus nibh est, efficitur et ligula
            quis, porta consequat dui. Ut imperdiet augue mauris, a cursus
            lectus viverra vel.
          </p>

          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nam nec tempor lectus. Nam suscipit orci eu
            elit molestie efficitur. Ut molestie nunc nisl, et semper mauris
            egestas vel. Nunc bibendum fringilla tempor. Donec eu pulvinar
            velit, et aliquam libero. Praesent vitae posuere nisl. Aliquam
            aliquam magna vitae libero tempor faucibus. Etiam sollicitudin magna
            ullamcorper magna porta hendrerit. Duis congue risus in metus
            condimentum semper. Etiam aliquet massa at tristique malesuada.
          </p>

          <p>
            Mauris ut accumsan nunc. Sed vel auctor lacus. In luctus libero
            nunc, quis sollicitudin purus elementum eu. Sed lacus augue, laoreet
            iaculis cursus vitae, fringilla sit amet erat. Etiam non est vel
            lorem ultrices aliquam id ac enim. Aliquam mollis, eros in ornare
            accumsan, justo erat volutpat arcu, sit amet maximus odio turpis ut
            est. Nam vitae lacus quis nisl varius dignissim. Sed elementum massa
            nec lacus luctus vestibulum. Sed aliquet libero et nunc egestas
            vehicula. Sed fermentum porttitor laoreet. Integer tristique quam
            ipsum, in viverra eros gravida vitae. Sed consequat elit sed sapien
            consectetur, vel sodales odio laoreet.
          </p>

          <p>
            Maecenas turpis leo, euismod non aliquam id, dignissim et tellus.
            Praesent sollicitudin augue quis dignissim dictum. Quisque vitae
            felis egestas, tempus neque a, accumsan libero. Donec eleifend
            semper lacinia. Nullam et velit sit amet massa pellentesque rhoncus
            a nec orci. Ut tristique urna eu lorem ultrices venenatis. Donec
            lacinia hendrerit ligula nec dictum. Pellentesque volutpat eros
            convallis dignissim lobortis. Cras tincidunt tempor sapien, sit amet
            laoreet lacus finibus vitae.
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
        console.log('HEEEEERE !' + (400 - this.$refs.naming.scrollHeight))
        console.log(this.$refs.template.style)
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

<style scoped>
.game-cover {
  width: 100%;
}

.icon {
  width: 20px;
  height: 20px;
}

.title-container {
  text-align: left;
  text-shadow: 1px 1px 2px black;
  color: white;
}

.desc-container {
  text-align: left;
}

.game-cover {
  border: 1px solid black;
}
</style>
