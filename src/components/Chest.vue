<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <b-card title="No more chests :(" v-if="Object.keys(playerChests).length === 0">
          <b-button to="/store" class="float-right">Buy chests</b-button>
        </b-card>
        <b-carousel
          v-else
          id="carousel-chest"
          ref="carouselChest"
          v-model="slide"
          :interval="0"
          controls
          indicators
          background="rgba(0,0,0,0)"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            v-for="(chestAmount, chestId) in playerChests"
            :key="chestId"
            :caption="String(chestAmount)"
          >
            <template v-slot:img>
              <img
                class="d-block img-fluid chest-image"
                :src="require(`@/assets/chests/${chests.getChest(chestId).imageId}/chest.png`)"
                alt="image slot"
                @click="openChest(chestId)"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>

import Chests from '@/game/Chests'

export default {
  name: "Chest",
  props: {
    msg: String
  },
  data: function() {
    return {
      slide: 0,
      sliding: null,
      playerChests: this.$root.$data.player.chests,
      chests: Chests
    };
  },
  methods: {
    openChest(chestId) {
      this.$root.$data.player.updateChest(chestId, -1);
      this.$forceUpdate();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carousel-chest {
  margin-top: 50px;
  height: 300px;
}

.chest-image {
  margin: 0 auto;
}
</style>

<style>
.carousel-caption {
  position: static;
}
</style>