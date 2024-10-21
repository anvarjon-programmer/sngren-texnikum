document.getElementById("contactform").addEventListener("submit", function(event){
    event.preventDefault();  // Prevent the default form submission


    // Gather form data
    let formData = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        detail: document.getElementById("detail").value  // Changed 'comments' to 'detail'
    };

    // Send data to the API using fetch
    fetch('https://angrenupt.pythonanywhere.com/contactpage/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())  // Parse JSON response
    .then(data => {
        console.log('Success:', data);
        alert("Muofaqyatli royhatdan o'tdingiz'");
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting the form');
    });
});

function reload() {
    window.location.reload()
}

let currentLang = localStorage.getItem('selectedLang') || 'uz'; // Default language or saved language

document.getElementById("first_name").placeholder = currentLang == "en" ? "Firstname" : currentLang == "ru" ? "Имя" : "Ism"
document.getElementById("last_name").placeholder = currentLang == "en" ? "Lastname" : currentLang == "ru" ? "Фамилия" : "Familiya"
document.getElementById("email").placeholder = currentLang == "en" ? "Email" : currentLang == "ru" ? "Электр. почта" : "Email"
document.getElementById("phone").placeholder = currentLang == "en" ? "Phone" : currentLang == "ru" ? "Телефон" : "Telefon raqam"
document.getElementById("detail").placeholder = currentLang == "en" ? "Give us more details..." : currentLang == "ru" ? "Дайте нам больше информации" : "Qo'shimcha ma'lumot"