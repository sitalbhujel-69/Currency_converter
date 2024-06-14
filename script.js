let apiKey = `d94a0efc4e78fbad2f19402a`
let fromCurrency = document.querySelector("#from-currency")
let toCurrency = document.querySelector("#to-currency")
const amount = document.querySelector("#amount")
const resultdiv = document.querySelector("#result")
const button = document.querySelector("button")




 import { currencies } from "./utility.js"
  

function addOption(para){
    
    for (const code of currencies) {
        let option = document.createElement('option')
        option.innerHTML = code.name
        option.value = code.code
        para.appendChild(option)
    }
}
addOption(fromCurrency)
addOption(toCurrency)

async function convert(){
    let API = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency.value}/${toCurrency.value}`
    let response =await fetch(API)
    let data = await response.json()
    console.log(data.conversion_rate)
    result(data.conversion_rate)

}
 function result(data){
        let res = amount.value*data
        console.log(amount.value)
        resultdiv.innerHTML =`${amount.value}${fromCurrency.value} = ${res.toFixed(2)}${toCurrency.value}`
 }
button.addEventListener("click",convert)