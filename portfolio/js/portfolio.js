// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Simple validation
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     const formMessage = document.getElementById('formMessage');

//     if (name && email && message) {
//         formMessage.textContent = 'Thank you for your message!';
//         formMessage.style.color = 'green';
//     } else {
//         formMessage.textContent = 'Please fill in all fields.';
//         formMessage.style.color = 'red';
//     }
// });

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname)
{
    for(tablink of tablinks)
        {
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents)
            {
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab")
}