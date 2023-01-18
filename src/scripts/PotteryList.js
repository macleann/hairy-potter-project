/* 
1. import usePottery function from PotteryCatalog.js
2. export and define PotteryList function
3. within the function, define a variable called potteryArray that invokes the usePottery function
4. then, define a variable called potteryHTMLString that contains an empty string
5. iterate through the potteryArray and append to the potteryHTMLString variable using string interpolation like so:
    `<section class="pottery" id="pottery--${id property}">
        <h2 class="pottery__shape">${shape property}</h2>
        <div class="pottery__properties">
            Item weighs ${weight property} grams and is ${height property} cm in height
        </div>
        <div class="pottery__price">Price is $${price property}</div>
    </section>`
6. lastly make sure the function returns the potteryHTMLString variable

Algorithm

import { usePottery } = "./PotteryCatalog.js"

export const PotteryList = () => {
    const potteryArray = usePottery()

    let potteryHTMLString = ""

    for (const pottery of potteryArray) {
        potteryHTMLString +=
        `<section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pottery.price}</div>
        </section>`
    }

    return potteryHTMLString
}
*/

import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    const potteryArray = usePottery()

    let potteryHTMLString = ''

    for (const pottery of potteryArray) {
        potteryHTMLString +=
        `<section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pottery.price}</div>
        </section>`
    }

    return potteryHTMLString
}