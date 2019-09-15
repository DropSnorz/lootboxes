<template>

<div class="reward-cannon"> 
  <transition name="slide-fade" v-for="(particle, index) in this.particles" :key="index" v-on:after-enter="afterEnter">
    <img v-if="trigger" class="particle" :src="require(`@/assets/currencies/gold.png`)" :style="{top: particle.top + 'px', left: particle.left + 'px'}"/>
  </transition>

</div>

</template>


<script>
export default {
  name: "RewardCannon",
  props: {
    trigger: Boolean
  },
  data: function () {
    return {
      show: true
    }
  },
  computed: {
    particles: function () {
      let particles = []

      for(let i=0; i < 50; i++){
        particles.push({top: Math.floor(Math.random() * 100) + 200 , left: Math.floor(Math.random() * 400) - 200})
      }
      return particles
    }
  },
  methods: {
    afterEnter() {
      this.$emit('eventComleted')
    }
  }
};
</script>

<style scoped>
.reward-cannon {
  z-index: 100;
}
.particle {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  height: 50px ;
  left: 0;
  right: 0;
  opacity: 0;
}

.slide-fade-enter-active {
  opacity: 1;
}

.slide-fade-enter-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
 .slide-fade-enter-to {
  left: 400px !important; 
  top: -200px !important;
  opacity: 0;
}

</style>