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
                :src="require(`@/assets/chests/${chests.getChest(chestId).imageId}/chest${chestState}.png`)"
                alt="image slot"
                @click="openChest(chestId)"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
        <RewardCannon :rewards="cannonRewards" @eventComleted="cannonEventCompleted()"/>

      </div>
    </div>
  </div>
</template>

<script>

import Chests from '@/game/Chests'
import RewardCannon from '@/components/ui/RewardCannon'

export default {
  name: "Chest",
  components: {
    RewardCannon
  },
  props: {
    msg: String
  },
  data: function() {
    return {
      slide: 0,
      sliding: null,
      cannonTrigger: false,
      cannonRewards: [],
      playerChests: this.$root.$data.player.chests,
      chests: Chests
    };
  },
  computed : {
    chestState : function () {
      if(this.cannonTrigger == true) {
        return '_filled'
      }
      return ''
    }
  },
  methods: {
    openChest(chestId) {

      if(this.cannonTrigger == false) {
        let rewards = this.chests.getChest(chestId).open()
        this.$root.$data.player.pushRewards(rewards)
        this.$root.$data.player.updateChest(chestId, -1)
        this.$forceUpdate()
        this.cannonTrigger = true
        this.cannonRewards = rewards

      }
    },

    cannonEventCompleted(){
      this.cannonTrigger = false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carousel-chest {
  margin-top: 50px;
  height: 400px;
  
}

.chest-image {
  margin: 0 auto;
  height: 400px;
}
</style>

<style>
.carousel-caption {
  position: static;
}
</style>