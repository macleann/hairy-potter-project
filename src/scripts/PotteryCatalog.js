/* 
1. define a variable that is an empty array called potteryToSell
2. export and define a function called toSellOrNotToSell that accepts a potteryObject as a parameter
3. the function will determine the price to sell based on the object's properties:
    i. if weight >= 6, price should be 40, else price should be 20
    ii. if cracked, don't add price property
    iii. if not cracked, push to potteryToSell
4. return potteryObject at the end of the function
5. export and define a function called usePottery that copies and returns the copy of the modified potteryToSell array

Algorithm

const potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === false) {
        if (potteryObject.weight >= 6) {
            pottery.price = 40
            potteryToSell.push(potteryObject)
        } else {
            pottery.price = 20
            potteryToSell.push(potteryObject)
        }
    }

    return potteryObject
}

export const usePottery = () => {
    const potteryToSellCopy = []
    
    for (const pottery of potteryToSell) {
        potteryToSellCopy.push(pottery)
    }

    return potteryToSellCopy
}
*/

const potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.fired === true) { //this line is to account for the event that a potteryObject is fired under 1400 degrees (see Kiln.js)
        if (potteryObject.cracked === false) {
            if (potteryObject.weight >= 6) {
                potteryObject.price = 40
                potteryToSell.push(potteryObject)
            } else {
                potteryObject.price = 20
                potteryToSell.push(potteryObject)
            }
        }
    }

    return potteryObject
}

export const usePottery = () => {
    const potteryToSellCopy = []

    for (const pottery of potteryToSell) {
        potteryToSellCopy.push(pottery)
    }

    return potteryToSellCopy
}