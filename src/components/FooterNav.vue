<template>
  <b-navbar fixed="bottom" type="light" variant="light">
    <!-- Center aligned nav items -->
    <b-navbar-nav class="mx-auto">
      <b-nav-item href="#" to="/">Boxes</b-nav-item>
      <b-nav-item href="#" disabled>Inventory</b-nav-item>
      <b-nav-item href="#" disabled>Craft</b-nav-item>
      <b-nav-item href="#" disabled>Marketplace</b-nav-item>
      <b-nav-item href="#" to="shop">Shop</b-nav-item>

    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "FooterNav",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
