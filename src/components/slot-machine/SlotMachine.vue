<template>
<div class="SlotMachine">
    <div class="SlotMachine-reels">
      <div class="SlotMachine-shadow"></div>
      <div class="SlotMachine-payline"></div>
      <SlotReel ref="reel1" :canlock="canlock" v-on:stopped="reelStopped"></SlotReel>
      <SlotReel ref="reel2" :canlock="canlock" v-on:stopped="reelStopped"></SlotReel>
      <SlotReel ref="reel3" :canlock="canlock" v-on:stopped="reelStopped"></SlotReel>
    </div>
    <div class="SlotMachine-actions">
      <b-button variant="success" class="SlotMachine-button is-spin" v-on:mousedown="spin()">Play</b-button>
    </div>
  </div>
</template>

<script>
/**
 * SlotMachine component based on the awesome rattatat work.
 * https://codepen.io/rattatat/pen/mXqJEq
 */
import SlotReel from './SlotReel'
export default {
  name: 'SlotMachine',
  components: {
    SlotReel
  },
  data: function() {
    return {
      spend: 6,
      win: 0,
      resultData: false,
      canlock: true,
      waslocked: false,
      audio: {
        barWin: new Audio('https://freesound.org/data/previews/337/337049_3232293-lq.mp3'),
        win: new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3'),
        insertCoin: new Audio('https://freesound.org/data/previews/276/276091_5123851-lq.mp3'),
        bigwin: new Audio('https://freesound.org/data/previews/270/270319_5123851-lq.mp3')
      }
    }
  },
  beforeMount: function () {},
  mounted: function() {
    window.addEventListener('keydown', this.keydown)
  },
  computed: {
  },
  methods: {
    keydown: function(e) {
      const key = {
        one: 49,
        two: 50,
        three: 51,
        space: 32
      }
      if (e.which === key.one) {
        this.$refs.reel1.lock()
        e.preventDefault()
      } else if (e.which === key.two) {
        this.$refs.reel2.lock()
        e.preventDefault()
      } else if (e.which === key.three) {
        this.$refs.reel3.lock()
        e.preventDefault()
      } else if (e.which === key.space) {
        this.spin()
        e.preventDefault()
      }
    },
    spin: function() {
      if (!this.resultData) {
        this.resultData = []
        this.$refs.reel1.run()
        this.$refs.reel2.run()
        this.$refs.reel3.run()
      }
    },
    insertCoin: function() {
      this.audio.insertCoin.currentTime = 0
      this.audio.insertCoin.play()
      this.spend += .5
    },
    takeWin: function() {
      if (this.win > 0) {
        this.win = 0
      }
    },
    reelStopped(resultData, wasLocked) {
      if (wasLocked) this.waslocked = wasLocked
      this.resultData.push(resultData)
      if (this.resultData.length === 3) {
        this.checkWin(this.resultData)
        if (this.waslocked) {
          this.waslocked = false
          this.canlock = false
        } else {
          this.canlock = true
        }
      }
    },
    checkWin: function() {
      if (this.resultData.length === 3) { // ;-)
        const v1 = this.resultData[0]
        const v2 = this.resultData[1]
        const v3 = this.resultData[2]
        if(v1.name === v2.name && v2.name === v3.name) {
          if (v1.value >= 8) {
            this.audio.bigwin.play()
          } else {
            this.audio.win.play()
          }
          this.win += v1.value
          this.waslocked = true // prevent lock after an unlocked win
        } else {

          const bar1 = v1.name === 'Bar'
          const bar2 = v2.name === 'Bar'
          const bar3 = v3.name === 'Bar'
          if (bar1 && bar2 || bar1 && bar3 || bar2 && bar3) {
            this.audio.bigwin.play()
            this.win += 18
            this.waslocked = true // prevent lock after an unlocked win
          } else if (bar1 || bar2 || bar3) {
            // this.audio.win.play()
            // this.audio.barWin.play()
            this.win += 3
            this.waslocked = true // prevent lock after an unlocked win
          } else {
            // Lose : (
          }
        }
      }
      this.resultData = false
    },
  },  
}
</script>

<style>

.SlotMachine {
  border-radius: 5px;
  width: 270px;
}
.SlotMachine-reels {
  display: flex;
  position: relative;
}
.SlotMachine-shadow {
  border-radius: 4px 4px 0 0;
  pointer-events: none;
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 
    inset 0 25px 30px -5px gray(0,.1),
    inset 0 5px 10px -2px gray(0,.2),
    inset 0 -25px 30px -5px gray(0,.1),
    inset 0 -5px 10px -2px gray(0,.2);
}
.SlotMachine-payline {
  position: absolute;
  top: calc(90px * 1 * 1.1666); /* tileSize */
  height: 1px;
  width: 100%;
  background: gray(0, 0.3);
}

.SlotMachine-coin {
  width: 6px;
  height: 38px;
  background: gray(20);
  border: 3px solid gray(40);
  border-radius: 6px;
  margin: 12px 10px 0 10px;
}
.SlotMachine-coin:hover {
  background: gray(140);
}

.SlotMachine-actions {
  padding: 20px 10px;
  display: flex;
  justify-content: flex-end;
  background: gray(20);
  border-radius: 0 0 4px 4px;
}

</style>
