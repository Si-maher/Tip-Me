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
const service = document.getElementById("input-service")

// Feedback 

const feedback = document.querySelector('.feedback')
const loader  = document.querySelector('.loader')
const results = document.querySelector('.results')

// submit form 

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let bill = amount.value
    let people = users.value
    let quality = service.value

    if (bill === '' || bill <= '0' || (people === '' || people <= '0') || quality === '0') {
        feedback.classList.add('showItem', 'alert-danger')
        feedback.innerHTML = `
        <p>Please check the value</p>
        <p>Bill amount cannot be less than zero</p>
        <p>Must be more than one person sharing</p>
        <p>Service has to be selected</p>
        `
        setTimeout(function() {
            feedback.classList.remove('showItem', 'alert-danger')
        },5000)
    } else {
        feedback.classList.add('showItem', 'alert-success')
        feedback.innerHTML = `<p>calculating...</p>`
        loader.classList.add('showItem')
        setTimeout(function() {
            feedback.classList.remove('showItem', 'alert-success')
            loader.classList.remove('showItem')
            showResults(bill, people, quality)
            ClearForm()
        },5000)
    }
})
// show result 

function showResults(bill, people, quality) {
    let percent = 0
    if (quality === '1') {
        percent = 0.2
    }else if(quality === '2') {
        percent = 0.1
    }else if(quality === '3') {
        percent = 0.02
    }
    
}
//    clear form  
function ClearForm() {
    amount.value = ''
    users.value = ''
    service.value = ''
}
})()