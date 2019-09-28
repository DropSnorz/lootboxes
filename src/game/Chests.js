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
        { type: "currencies", id: "gold", amount: 1300 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "gold", amount: 1000 }),
    new Chest('chest2',
      "Asthmatic Chest",
      [
        { type: "currencies", id: "gold", amount: 13000 },
        { type: "currencies", id: "gem", amount: 1 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "gold", amount: 10000 }),
    new Chest('chest3',
      "Emotional Chest",
      [
        { type: "currencies", id: "gold", amount: 130000 },
        { type: "currencies", id: "gem", amount: 5 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "gold", amount: 100000 }),
    new Chest('chest4',
      "Drunk Chest",
      [
        { type: "currencies", id: "gold", amount: 1300000 },
        { type: "currencies", id: "diamond", amount: 1 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "gem", amount: 100 }),
      new Chest('chest5',
      "Modest Chest",
      [
        { type: "currencies", id: "gold", amount: 13000000 },
        { type: "currencies", id: "diamond", amount: 10 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "gem", amount: 1000 }),
    new Chest('chest6',
      "Hesitant Chest",
      [
        { type: "currencies", id: "gold", amount: 130000000 },
        { type: "currencies", id: "diamond", amount: 5 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "gem", amount: 10000 }),
    new Chest('chest7',
      "Curious Chest",
      [
        { type: "currencies", id: "gold", amount: 1300000000 },
        { type: "currencies", id: "sapphire", amount: 1 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "diamond", amount: 100 }),
    new Chest('chest8',
      "Peaceful Chest",
      [
        { type: "currencies", id: "gold", amount: 13000000000 },
        { type: "currencies", id: "sapphire", amount: 1 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "diamond", amount: 1000 }),
    new Chest('chest9',
      "Respectful Chest",
      [
        { type: "currencies", id: "gold", amount: 1300000000000 },
        { type: "currencies", id: "sapphire", amount: 1 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "diamond", amount: 10000 }),
    new Chest('chest10',
      "Generous Chest",
      [
        { type: "currencies", id: "gold", amount: 13000000000000 },
        { type: "currencies", id: "heart", amount: 5 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "sapphire", amount: 1000 }),
    new Chest('chest11',
      "Wonderful Chest",
      [
        { type: "currencies", id: "gold", amount: 130000000000000 },
        { type: "currencies", id: "heart", amount: 5 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "sapphire", amount: 10000 }),
    new Chest('chest12',
      "Dark Chest",
      [
        { type: "currencies", id: "gold", amount: 1300000000000000 },
        { type: "currencies", id: "void", amount: 1 },
        { type: "items", id: "backpack", amount: 2 },
      ],
      { id: "heart", amount: 10000 }),
  ]

  static getChests() {
    return this.chests

  }

  static getChest(id) {
    return this.chests.find(obj => obj.id === id)
  }
}

export default Chests
