// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"

// Random number function for future use
const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

// Make 5 pieces of pottery at the wheel
let coffeeMug = makePottery("mug", randomNumberInRange(3, 8), 3)
let bigPlatter = makePottery("platter", randomNumberInRange(3, 8), 1)
let tallVase = makePottery("vase", randomNumberInRange(3, 8), 6)
let wideBowl = makePottery("bowl", randomNumberInRange(3, 8), 4)
let catSculpture = makePottery("cat", randomNumberInRange(3, 8), 2)

    // Test to make sure these objects are logging correctly (check id property)
    /* console.log(coffeeMug)
    console.log(bigPlatter)
    console.log(tallVase)
    console.log(wideBowl)
    console.log(catSculpture) */

// Fire each piece of pottery in the kiln
let firedMug = firePottery(coffeeMug, randomNumberInRange(600, 2999))
let firedPlatter = firePottery(bigPlatter, randomNumberInRange(600, 2999))
let firedVase = firePottery(tallVase, randomNumberInRange(600, 2999))
let firedBowl = firePottery(wideBowl, randomNumberInRange(600, 2999))
let firedCat = firePottery(catSculpture, randomNumberInRange(600, 2999))

    // Test to make sure these objects are logging correctly (check fired and cracked properties)
    /* console.log(firedMug)
    console.log(firedPlatter)
    console.log(firedVase)
    console.log(firedBowl)
    console.log(firedCat) */

// Determine which ones should be sold, and their price
let finishedMug = toSellOrNotToSell(firedMug)
let finishedPlatter = toSellOrNotToSell(firedPlatter)
let finishedVase = toSellOrNotToSell(firedVase)
let finishedBowl = toSellOrNotToSell(firedBowl)
let finishedCat = toSellOrNotToSell(firedCat)

    // Test to make sure these objects are logging correctly (check fired, cracked, and price properties)
    /* console.log(finishedMug)
    console.log(finishedPlatter)
    console.log(finishedVase)
    console.log(finishedBowl)
    console.log(finishedCat) */

    // Test usePottery to make sure it is copying the array (check fired, cracked, and price properties)
    /* console.log(usePottery()) */

// Invoke the component function that renders the HTML list



