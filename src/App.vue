<template>
  <div class="site-container">
    <div id="app">
      <HeaderNav />
      <div class="container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <FooterNav />
    </div>
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import FooterNav from "./components/FooterNav.vue";

export default {
  name: "app",
  components: {
    HeaderNav,
    FooterNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.site-container {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  top: 0;
  background-image: url("./assets/background.png");
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
