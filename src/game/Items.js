class Item {
    constructor(id, label) {
      this.id = id,
      this.label = label
    }
  }


class Items {
    static items = [
        new Item('gold', "Gold"),
        new Item('gem', "Gem")
    ]

    static getItems(){
        return this.items

    }

    static getItem(id){
        return this.items.find(obj => obj.id === id)
    }
}