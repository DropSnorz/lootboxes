<template>
  <div class="row">
    <div class="col-md-12">
      <b-card title="Store" sub-title="Buy awesome rewards">
        <b-list-group flush>
          <b-list-group-item href="#" v-for="(chest, index) in chests" :key="chest.id">
            <img
              :src="require(`@/assets/chests/${chest.imageId}/chest.png`)"
              alt="chest-image"
              class="chest-image"
            />
            {{chest.label}}
            <span class="float-right">
              <b-button @click="buyChest(index)">
                <img :src="require(`@/assets/currencies/${chest.price.id}.png`)" alt="chest-image" class="currency-icon" />
                {{chest.price.amount}}
              </b-button>
            </span>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
import Chests from "@/game/Chests";

export default {
  name: "Store",
  data: function() {
    return {
      chests: Chests.getChests()
    };
  },
  methods: {
    buyChest(index) {
      let selectedChest = this.chests[index];
      let currencyId = selectedChest.price.id;
      let chestCost = selectedChest.price.amount;

      if (this.$root.$data.player.currencies[currencyId] >= chestCost) {
        this.$root.$data.player.updateCurrency(currencyId, -chestCost);
        this.$root.$data.player.updateChest(selectedChest.id, 1);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chest-image {
  height: 50px;
  margin-right: 10px;
}

.currency-icon {
  height: 20px;
}
</style>
