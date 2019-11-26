  
  <template>
  <div>
    <h5 class="mt-3">Audio settings</h5>
    <b-button :pressed.sync="audioEnabled" variant="primary">
      <span v-if="audioEnabled">Enabled</span>
      <span v-else>Disabled</span>
    </b-button>
    <h5 class="mt-3">Danger Zone</h5>
    <b-button variant="danger" @click="deleteProgression">Delete progression</b-button>
  </div>
</template>


<script>
export default {
  name: "Options",
  data() {
    return {
      audioEnabled: this.$root.$data.player.options.audioEnabled
    };
  },
  watch: {
    audioEnabled() {
      this.$root.$data.player.options.audioEnabled = this.audioEnabled
      this.$root.$data.persist()
    }
  },
  methods: {
    deleteProgression() {
      localStorage.removeItem("player");
      this.$router.go(0);
    }
  }
};
</script>

<style scoped>
</style>
  
