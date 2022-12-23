import * as math from 'mathjs'
import { defineStore } from 'pinia'

export const useGroceryStore = defineStore('grocery', {
    state: () => ({
        items: [{
            id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            name: "Yogurt",
            defaultUnitOfMeasure: "lb",
            purchases: [
                {
                    perEachPrice: .69,
                    quantity: 3,
                    unitOfMeasure: "oz",
                    perEachSize: 6,
                    store: "Safeway",
                    location: "Camas, WA",
                    date: "2022-12-23T21:03:02.008Z"
                },
                {
                    perEachPrice: 1.29,
                    quantity: 4,
                    unitOfMeasure: "oz",
                    perEachSize: 12,
                    store: "Walmart",
                    location: "Vancouver, WA",
                    date: "2022-12-22T21:03:02.008Z"
                }

            ]
        },
        {
            id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dfb6d",
            name: "Milk",
            defaultUnitOfMeasure: "gal",
            purchases: [
                {
                    perEachPrice: 6.49,
                    quantity: 3,
                    unitOfMeasure: "floz",
                    perEachSize: 64,
                    store: "Safeway",
                    location: "Camas, WA",
                    date: "2022-12-23T21:03:02.008Z"
                },
                {
                    perEachPrice: 4.49,
                    quantity: 4,
                    unitOfMeasure: "gal",
                    perEachSize: 1,
                    store: "Walmart",
                    location: "Vancouver, WA",
                    date: "2022-12-22T21:03:02.008Z"
                }

            ]
        }]
    }),
    actions: {
        addItem(newItem) {
            this.items.push(newItem)
        }
    },
    getters: {
        itemList(state) {
            return state.items.map(item => {
                return {
                    name: item.name,
                    averagePrice: averagePrice(item.purchases, item.defaultUnitOfMeasure),
                    unitOfMeasure: item.defaultUnitOfMeasure
                }
            })
        },
        getItemById: (state) => {
            return (itemId) => state.items.find((item) => item.id === itemId)
        },
    },
})

const averagePrice = (purchases, defaultUnitOfMeasure) => {
    var reducedArray = purchases.reduce((accumulator, purchase) => {
        const convertedPerEachSize = math.unit(purchase.perEachSize, purchase.unitOfMeasure)
            .to(defaultUnitOfMeasure)
            .toNumber()
        const totalPurchasePrice = purchase.perEachPrice * purchase.quantity
        const totalPurchaseSize = convertedPerEachSize * purchase.quantity

        accumulator["price"] = (accumulator["price"] || 0) + totalPurchasePrice
        accumulator["size"] = (accumulator["size"] || 0) + totalPurchaseSize

        return accumulator
    }, {})

    return math.round(reducedArray['price'] / reducedArray['size'], 2)
}
