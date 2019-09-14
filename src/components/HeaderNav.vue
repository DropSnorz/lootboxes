<template>
  <b-navbar type="light" variant="light">
      <b-navbar-brand href="#">Lootboxes.io</b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <a class="btn icon-btn btn-default" href="#">
          <img src="@/assets/icons/gold.png" class="badge-icon img-circle text-muted" />563 331
        </a>
        <a class="btn icon-btn btn-muted" href="#">
          <img src="@/assets/icons/crystal-gem.png" class="badge-icon img-circle text-muted" />10 052
        </a>
        <a class="btn icon-btn btn-default" href="#">
          <img src="@/assets/icons/crystal-grey.png" class="badge-icon img-circle text-primary" />450
        </a>
        <a class="btn icon-btn btn-default" href="#">
          <img src="@/assets/icons/crystal-blue.png" class="badge-icon img-circle text-success" />200
        </a>
        <a class="btn icon-btn btn-default" href="#">
          <img src="@/assets/icons/crystal-heart.png" class="badge-icon img-circle text-info" />10
        </a>
        <a class="btn icon-btn btn-default" href="#">
          <img src="@/assets/icons/crystal-void.png" class="badge-icon img-circle text-warning" />0
        </a>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "HeaderNav",
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
.badge-icon {
  height: 22px;
  margin-right: 4px;
  margin-left: 4px;
}
.icon-btn {
  margin-left: 10px;
  padding: 1px 15px 3px 2px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>
