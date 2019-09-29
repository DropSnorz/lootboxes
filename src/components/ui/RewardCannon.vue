<template>
<div class="reward-cannon"> 
  <transition name="slide-fade" v-for="(particle, index) in particles" :key="index" v-on:after-enter="afterEnter" appear>
    <img v-if="show" class="particle" :src="require(`@/assets/${particle.image}.png`)" :style="{top: particle.top + 'px', left: particle.left + 'px'}"/>
  </transition>
</div>
</template>

<script>
export default {
  name: "RewardCannon",
  props: {
    rewards: Array
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    particles() {
      let particles = []
      for (let reward of this.rewards){
        if(reward.amount <= 10 ){
          for(let i=0; i < reward.amount; i++){
          particles.push({image: reward.type +'/' + reward.id, top: Math.floor(Math.random() * 100) + 200 , left: Math.floor(Math.random() * 400) - 200})
          }
        }
        else {
          for(let i=0; i < 20; i++) {
            particles.push({image: reward.type +'/' + reward.id, top: Math.floor(Math.random() * 100) + 200 , left: Math.floor(Math.random() * 400) - 200})
          }
        }
      }
      return particles
    }
  },
  watch: {
    particles(){
        if(this.particles.length > 0){
        this.show = true;
      }
    }
  },
  methods: {
    afterEnter() {
      this.show = false;
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
  left: 300px !important; 
  top: -150px !important;
  opacity: 0;
}

</style>