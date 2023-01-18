/* 
1. export and define a function called firePottery
2. the function needs to accept the following parameters:
    i. a potteryObject
    ii. a temperature for the kiln firing
3. the function needs to add a property of fired, which will always be true
4. the function then needs to add a property of cracked, which will reference the temperature parameter:
    i. if the temp is >= 2200, cracked = true
    ii. if the temp is < 2200, cracked = false
5. after all that, the function returns the potteryObject

Algorithm

export const firePottery = (potteryObject, temperature) => {
    potteryObject.fired = true
    
    if (temperature >= 2200) {
        potteryObject.cracked = true
    } else {
        potteryObject.cracked = false
    }

    return potteryObject
}
*/

export const firePottery = (potteryObject, temperature) => {
    
    //i didn't like that you could literally fire something at, like, 300 degrees and it would be both fired and uncracked.
    //uncomment lines 31-33 AND 41 if you want it to make more sense, but this is the only way for the test to mark as passed.
    /* if (temperature < 1400) {
        potteryObject.fired = false
    } else { */
        potteryObject.fired = true

        if (temperature >= 2200) {
            potteryObject.cracked = true
        } else {
            potteryObject.cracked = false
        }
    /* } */

    return potteryObject
}