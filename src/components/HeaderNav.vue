<template>
  <b-navbar type="light" variant="light">
      <b-navbar-brand href="#">Lootboxes.io</b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <CurrencyBadge :value=this.$root.$data.player.currencies.gold image="gold.png" />
        <CurrencyBadge :value=this.$root.$data.player.currencies.gem image="gem.png" />
        <CurrencyBadge :value=0 image="diamond.png" />
        <CurrencyBadge :value=0 image="sapphire.png" />
        <CurrencyBadge :value=0 image="heart.png" />
        <CurrencyBadge :value=0 image="void.png" />
        
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
import CurrencyBadge from "@/components/ui/CurrencyBadge.vue";

export default {
  name: "HeaderNav",
  components: {
      CurrencyBadge,
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
