class Currency {
    constructor(id, label) {
      this.id = id,
      this.label = label
    }
  }


class Currencies {
    static currencies = [
        new Currency('gold', "Gold"),
        new Currency('gem', "Gem")
    ]

    static getCurrencies(){
        return this.currencies

    }

    static getCurrency(id){
        return this.currencies.find(obj => obj.id === id)
    }
}