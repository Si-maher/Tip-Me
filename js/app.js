// Immediately invoked function 
(function() {
// select options 
const services = [
    {
        value:1,
        title:'great - 20%'
    },
    {
        value:2,
        title:'great - 10%'
    },
    {
        value:3,
        title:'great - 2%'
    },
    {
        value:4,
        title:'You are so tight fisted -0%'
    },
]
services.forEach(function(service) {
    const option = document.createElement("option")
    option.textContent = service.title
    option.value = service.value
    document.getElementById("input-service").appendChild(option)
})

// consts for all the values 

const form = document.getElementById("tip-form")
const amount = document.getElementById("input-bill")
const users = document.getElementById("input-users")
const service = document.getElementById("input-services")

// Feedback 

const feedback = document.querySelector('.feedback')
const loader  = document.querySelector('.loader')
const results = document.querySelector('.results')

// submit form 

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let bill = amount.value
    console.log(bill);
    
})
})()