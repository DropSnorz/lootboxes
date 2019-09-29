<template>
  <b-navbar fixed="top" type="light" variant="light">
      <b-navbar-brand href="#" class="d-none d-lg-block">Lootboxes.io <b-badge variant="danger" :style="{'vertical-align': 'text-top'}">Beta</b-badge></b-navbar-brand>
      <b-navbar-nav class="ml-auto" :style="{'overflow-x': 'auto'}">
        <CurrencyBadge :value=this.$root.$data.player.currencies.gold image="gold.png" />
        <CurrencyBadge :value=this.$root.$data.player.currencies.gem image="gem.png" />
        <CurrencyBadge :value=this.$root.$data.player.currencies.diamond image="diamond.png" />
        <CurrencyBadge :value=this.$root.$data.player.currencies.sapphire image="sapphire.png" />
        <CurrencyBadge :value=this.$root.$data.player.currencies.heart image="heart.png" />
        <CurrencyBadge :value=this.$root.$data.player.currencies.void image="void.png" />
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

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
