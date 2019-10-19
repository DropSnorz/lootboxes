export default {

  player: {

    // Currency inventory
    currencies: {
      gold: 1000,
      gem: 0
    },

    // Chests inventory
    chests: {
      chest1: 1
    },
    // Items inventory
    items: [

    ],
    
    options: {
      audioEnabled: true
    }

  },

  /**
 * Dispatch rewards list to player inventories
 * @param {Array} rewards 
 */
  pushRewards(rewards) {
    for (let reward of rewards) {
      updateInventories(this.player[reward.type], reward.id, reward.amount)
      this.persist()
    }
  },

  updateCurrency(id, amount) {
    updateInventories(this.player.currencies, id, amount)
    this.persist()
  },

  updateChest(id, amount) {
    updateInventories(this.player.chests, id, amount, true)
    this.persist()
  },

  mount() {
    if(localStorage.getItem('player')) {
      this.player = JSON.parse(localStorage.getItem('player'))
    }
  },

  persist() {
    const playerData = JSON.stringify(this.player);
    localStorage.setItem('player', playerData);
  }

}

/**
 * Update user inventory with given object
 * @param {Object} list inventory to update
 * @param {String} id object id
 * @param {Number} amount quantity to update. Can be negative or positive
 * @param {Boolean} removeAttr Remove attribute if amount is equal to 0
 */
function updateInventories(list, id, amount, removeAttr = false) {
  if (list[id] == undefined) {
    list[id] = amount
  } else {
    list[id] = list[id] + amount
  }
  if (removeAttr && list[id] == 0) {
    delete list[id]
  }
}

