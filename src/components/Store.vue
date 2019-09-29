<template>
  <div class="row">
    <div class="col-md-12">
      <b-card title="Store" sub-title="Buy awesome rewards">
        <b-list-group flush>
          <b-list-group-item v-for="(chest, index) in chests" :key="chest.id">
            <img
              :src="require(`@/assets/chests/${chest.id}/chest.png`)"
              alt="chest-image"
              class="chest-image"
            />
            {{chest.label}}
            <span class="float-right">
              <b-button variant="success" @click="buyChest(index)">
                <img :src="require(`@/assets/currencies/${chest.price.id}.png`)" alt="chest-image" class="currency-icon" />
                {{chest.price.amount | numeralFormat('0,0')}}
              </b-button>
            </span>
          </b-list-group-item>
           <b-list-group-item>
            <img
              :src="require(`@/assets/extra/chestpack.png`)"
              alt="chest-image"
              class="chest-image"
            />
            Ultimate Chest pack (all chests x10)
            <span class="float-right">
              <b-button variant="success">
                1.99€
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
  data() {
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

<style scoped>
.chest-image {
  height: 50px;
  margin-right: 10px;
}

.currency-icon {
  height: 20px;
}
</style>
