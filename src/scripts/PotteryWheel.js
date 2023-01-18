/*
1. define a variable (let or const?) called primaryKey with an initial value of 1 (makes me think we'll use let)
2. export and define makePottery that creates an object each time it's invoked.
3. the function will need to accept 3 parameters:
    i. shape, which will be a string like "mug" or "platter"
    ii. weight, which will be an integer
    iii. height, which is also an integer
4. the object will have the following properties:
    i. shape
    ii. weight
    iii. height
    iv. id, which will be increased every time the function is invoked
5. the function then returns the object

Algorithm

let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    const potteryObject = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    }
    
    primaryKey++

    return potteryObject
}
*/

let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    const potteryObject = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    }

    primaryKey++

    return potteryObject
}