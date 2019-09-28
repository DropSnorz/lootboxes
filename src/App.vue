<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <Preloader v-if="isLoading" />
      <div v-else>
        <HeaderNav />
        <div id="main-container" class="container">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
        <FooterNav />
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import FooterNav from "./components/FooterNav.vue";
import Preloader from "./components/Preloader";

export default {
  name: "app",
  components: {
    HeaderNav,
    FooterNav,
    Preloader
  },
  data() {
    return {
      isLoading: true,
      isRunning: false,
      interval: false,
      time: 0
    }
  },
  mounted() {
    this.toggleTimer();
  },
  methods: {
    toggleTimer() {
      this.interval = setInterval(this.incrementTime, 1000);
      if (this.isRunning) {
        clearInterval(this.interval);
      }
      this.isRunning = this.isRunning ? false : true;
    },
    incrementTime() {
      this.time = parseInt(this.time) + 1;
    }
  },
  watch: {
    time() {
      if (this.time > 5) {
        this.toggleTimer();
        this.isLoading = false;
      }
    }
  }
};
</script>

<style>
body {
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#main-container {
  /* Margin to adjust document with fixed navbars*/
  margin-top: 70px;
  margin-bottom: 95px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
