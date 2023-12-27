// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!
//do this

// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy $${ totalPrice.toFixed(2) }`

// Challenge:
// The toFixed() method doesn't work anymore, it is now a string, Can you make it work?
// Google the error message if you're unsure about how to do it
const totalPrice = "420.69235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy $${ Number(totalPrice).toFixed(2) }`
 