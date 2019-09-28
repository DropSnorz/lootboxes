class Currency {
  constructor(id, label) {
    this.id = id,
      this.label = label
  }
}

class Currencies {
  static currencies = [
    new Currency('gold', 'Gold'),
    new Currency('gem', 'Gem'),
    new Currency('diamond', 'Diamond'),
    new Currency('sapphire', 'Sapphire'),
    new Currency('heart', 'Hearts'),
    new Currency('void', 'Void stones'),
    
  ]

  static getCurrencies() {
    return this.currencies

  }

  static getCurrency(id) {
    return this.currencies.find(obj => obj.id === id)
  }
}