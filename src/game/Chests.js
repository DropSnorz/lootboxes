class Chest {
  constructor(id, label, rewards, price, imageId) {
    this.id = id
    this.label = label
    this.rewards = rewards
    this.price = price
    this.imageId = imageId
  }
}


class Chests {
  static chests = [
    new Chest('chest1',
      "Rookie Chest",
      [
        { type: "currency", id: "gold", amount: 1100 },
        { type: "currency", id: "gem", amount: 1 },
      ],
      { id: "gold", amount: 1000 },
      'chest1'),
    new Chest('chest2',
      "Asmatic Chest",
      [
        { type: "currency", id: "gold", amount: 13000 },
        { type: "currency", id: "gem", amount: 5 },
      ],
      { id: "gold", amount: 10000 },
      'chest2'),
    new Chest('chest3',
      "Bronze Chest",
      [
        { type: "currency", id: "gold", amount: 13000 },
        { type: "currency", id: "gem", amount: 5 },
      ],
      { id: "gold", amount: 10000 },
      'chest3'),
    new Chest('chest4',
      "Bronze Chest",
      [
        { type: "currency", id: "gold", amount: 13000 },
        { type: "currency", id: "gem", amount: 5 },
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
