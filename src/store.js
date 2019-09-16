export default {

    player: {

        pushRewards(rewards){
            for(let reward of rewards){
                updateInventories(this[reward.type], reward.id, reward.amount)
            }
        },

        currencies: {
            gold: 100000,
            gem: 0
        },

        updateCurrency(id, amount) {
            updateInventories(this.currencies, id, amount)

        },

        chests: {
        },
        updateChest(id, amount) {
            updateInventories(this.chests, id, amount)
        },
        items: [

        ]

    }

}

function updateInventories(list, id, amount){
    if (list[id] == undefined) {
        list[id] = amount
    } else {
        list[id] = list[id] + amount;
    }
    if(list[id] == 0){
        delete list[id]
    }
}