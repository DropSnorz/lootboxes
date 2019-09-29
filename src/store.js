export default {

  player: {
    
    /**
     * Dispatch rewards list to player inventories
     * @param {Array} rewards 
     */
    pushRewards(rewards) {
      for (let reward of rewards) {
        updateInventories(this[reward.type], reward.id, reward.amount)
      }
    },

    // Currency inventory
    currencies: {
      gold: 1000,
      gem: 0
    },

    updateCurrency(id, amount) {
      updateInventories(this.currencies, id, amount)

    },

    // Chests inventory
    chests: {
      chest1: 1
    },
    updateChest(id, amount) {
      updateInventories(this.chests, id, amount, true)
    },

    // Items inventory
    items: [

    ]

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
    list[id] = list[id] + amount;
  }
  if (removeAttr && list[id] == 0) {
    delete list[id]
  }
}