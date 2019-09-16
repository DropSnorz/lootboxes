class Chest {
  constructor(id, label, rewards, price, imageId) {
    this.id = id
    this.label = label
    this.rewards = rewards
    this.price = price
    this.imageId = imageId
  }

  open(){
    let results = []
    for(let reward of this.rewards) {
      let amount = Math.floor((this.random() + 0.5) * reward.amount)
      results.push({ type: reward.type, id: reward.id, amount: amount })
    }
    return results;
  }

  // Generates normaly distributed random value between 0 and 1
  random() {
    return (Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) / 6;
  } 
}


class Chests {
  static chests = [
    new Chest('chest1',
      "Rookie Chest",
      [
        { type: "currencies", id: "gold", amount: 1400 },
        { type: "currencies", id: "gem", amount: 1 },
      ],
      { id: "gold", amount: 1000 },
      'chest1'),
    new Chest('chest2',
      "Asmatic Chest",
      [
        { type: "currencies", id: "gold", amount: 13000 },
        { type: "currencies", id: "gem", amount: 5 },
      ],
      { id: "gold", amount: 10000 },
      'chest2'),
    new Chest('chest3',
      "Bronze Chest",
      [
        { type: "currencies", id: "gold", amount: 13000 },
        { type: "currencies", id: "gem", amount: 5 },
      ],
      { id: "gold", amount: 10000 },
      'chest3'),
    new Chest('chest4',
      "Bronze Chest",
      [
        { type: "currencies", id: "gold", amount: 13000 },
        { type: "currencies", id: "gem", amount: 5 },
      ],
      { id: "gold", amount: 10000 },
      'chest4'),
  ]

  static getChests() {
    return this.chests

  }

  static getChest(id) {
    return this.chests.find(obj => obj.id === id)
  }
}

export default Chests
