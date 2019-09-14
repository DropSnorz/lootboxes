<template>
  <div class="site-container">
    <div id="app">
      <HeaderNav />
      <div class="container">
        <img alt="Vue logo" src="./assets/sprites/chest1/chest_closed.png" class="my-4" />
        <div class="row">
          <div class="col-md-12">
            <b-card title="Game Frame" sub-title="Game Layer">
              <b-card-text>
                Some quick example text to build on the
                <em>card title</em> and make up the bulk of the card's
                content.
              </b-card-text>
              <b-card-text>A second paragraph of text in the card.</b-card-text>
              <a href="#" class="card-link">Card link</a>
              <b-link href="#" class="card-link">Another link</b-link>
            </b-card>
          </div>
        </div>
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
</style>
