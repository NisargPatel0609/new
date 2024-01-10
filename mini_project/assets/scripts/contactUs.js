let contact_us_form = document.getElementById('contact_us-form')
let contact_us_name = document.getElementById('contact_us-input_name')
let contact_us_email = document.getElementById('contact_us-input_email')
let contact_us_message = document.getElementById('contact_us-input_message')

let users = []

contact_us_form.addEventListener('submit',function(e){
        e.preventDefault()
    let user = {
        name : contact_us_name.value,
        email : contact_us_email.value,
        message : contact_us_message.value
    }
    users.push(user)
    localStorage.setItem('userDetails',JSON.stringify(users))
    contact_us_name.value = ''
    contact_us_email.value = ''
    contact_us_message.value = ''
})