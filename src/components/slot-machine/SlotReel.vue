<template>
  <div class="Reel" v-bind:class="{'is-locked':locked}" v-on:mousedown="lock()">
    <div class="Reel-inner">
      <img class="Reel-image" :src="reelTileData[tile1Index].image" />
      <img class="Reel-image" :src="reelTileData[tile2Index].image" />
      <img class="Reel-image" :src="reelTileData[tile3Index].image" />
      <img class="Reel-image" :src="reelTileData[tile4Index].image" />
      <img class="Reel-image" :src="reelTileData[tile5Index].image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotReel',
  props: ['value', 'canlock'],
  data: function() {
    return {
      momentum: null,
      audio: {
        bar: new Audio('https://freesound.org/data/previews/0/707_207-lq.mp3'),
        barWin: new Audio('https://freesound.org/data/previews/337/337049_3232293-lq.mp3'),
        spin: new Audio('https://freesound.org/data/previews/120/120373_824230-lq.mp3'),
        spinEnd: new Audio('https://freesound.org/data/previews/145/145441_2615119-lq.mp3'),
        lock: new Audio('https://freesound.org/data/previews/56/56246_91374-lq.mp3')
      },
      reelTileCount: 15,
      reelTileData: null,
      reelSourceData: [
        {
          name: 'gold',
          value: 2,
          image: require(`@/assets/currencies/gold.png`)
        },
        {
          name: 'gem',
          value: 4,
          image: require(`@/assets/currencies/gem.png`)
        },
        {
          name: 'diamond',
          value: 8,
          image: require(`@/assets/currencies/diamond.png`)
        },
        {
          name: 'sapphire',
          value: 16,
          image: require(`@/assets/currencies/sapphire.png`)
        },
        {
          name: 'heart',
          value: 72,
          image: require(`@/assets/currencies/heart.png`)
        }
      ],
      reelIndex: 2,
      tile1Index: 0,
      tile2Index: 1,
      tile3Index: 2,
      tile4Index: 3,
      tile5Index: 4,
      locked: false
    }
  },
  beforeMount: function () {
    // Build up the reelTileData array with random tiles  
    let frs = []
    this.audio.spin.volume = 0.3
    this.audio.spinEnd.volume = 0.8
    this.audio.lock.volume = 0.2
    this.audio.spin.currentTime = 0.3
    // Method 1, random until count is reached
    // let count = this.reelTileCount
    // while (count > 0) {
    //   const fruitIndex = Math.floor(Math.random() * this.reelSourceData.length)
    //   const fruitObject = this.reelSourceData[fruitIndex]
    //   frs.push(fruitObject)
    //   count--
    // }
    
    // Method 2, sort on value, use index to determine entry count, shuffle
    let reelSourceData = this.reelSourceData.slice(0)
    reelSourceData.sort((a, b) => b.value - a.value)
    reelSourceData.forEach((sd, i) => {
      let times = i + 1 + i // 0+1+0=1, 3+2+3=8
      // if (sd.name === 'Bar') times += 40 // TEST
      while (times > 0) {
        frs.push(sd)
        times--
      }
    })
    
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    
    this.reelTileData = shuffle(frs)
  },
  mounted: function() {
    this.$el.addEventListener("transitionend", this.animateEnd)
  },
  computed: {
  },
  methods: {
    run: function() {
      if (!this.locked) {
        const min = 8
        const max = 28
        const momentum = Math.floor(Math.random()*(max-min+1)+min);
        this.momentum = momentum
        this.audio.spin.play()
        this.animate()
      } else {
        this.locked = false
        this.$emit('stopped', this.reelTileData[this.reelIndex], true)
      }
    },
    animate: function() {
      this.$el.classList.add('move')
    },
    animateEnd: function() {
      this.$el.classList.remove('move')
      this.reIndex()
      this.momentum = this.momentum - 1
      if (this.momentum > 0) {
        setTimeout(this.animate, 10)
      } else {
        const reelTileData = this.reelTileData[this.reelIndex]
        this.$emit('stopped', reelTileData)
        if (reelTileData.name === 'Bar') {
          this.audio.barWin.play()
        } else {
        this.audio.spinEnd.play()          
        }
        this.audio.spin.pause()
        this.audio.spin.currentTime = 0.3
      }
    },
    reIndex: function() {
      const end = this.reelTileData.length - 1 //this.reelTileCount - 1
      const index = this.reelIndex === 0 ? end : this.reelIndex - 1
      // const index = this.index === end ? 0 : this.index + 1
      this.reelIndex = index
      this.tile1Index = index === 1 ? end : index === 0 ? end - 1 : index - 2
      this.tile2Index = index === 0 ? end : index - 1
      this.tile3Index = index
      this.tile4Index = index === end ? 0 : index + 1
      this.tile5Index = index === end - 1 ? 0 : index === end ? 1 : index + 2
    },
    lock: function() {
      if (this.canlock) {
        this.locked = !this.locked
        this.audio.lock.play()
      }
    }
  }
}
</script>

<style>
.Reel {
  width: 90px; /* tileSize */
  height: calc(90px * 2.333); /* tileSize */
  overflow: hidden;
}
.Reel.is-locked {
/*   opacity: 0.8; */
  background: rgba(0,0,0,0.1);
}
.Reel:not(:last-child) {
  border-right: 1px solid gray(0, 0.1);
}
.Reel-inner {
  position: relative;
  top: calc(90px * -1 * 1.333); /* tileSize */
  display: flex;
  flex-direction: column;
}
.Reel.move .Reel-inner{
  transition: margin-top 0.04s linear;
  margin-top: 90px; /* tileSize */
}
.Reel-image {
  width: 90px; /* tileSize */
  width: 90px; /* tileSize */
}
</style>