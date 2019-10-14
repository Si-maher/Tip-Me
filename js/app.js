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
]
services.forEach(function(service) {
    const option = document.createElement("option")
    option.textContent = service.title
    option.value = service.value
    document.getElementById("input-service").appendChild(option)
})
})()