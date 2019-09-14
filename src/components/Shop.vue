<template>
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
</template>

<script>
export default {
  name: "Shop",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
