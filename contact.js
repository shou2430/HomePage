let emailField = document.getElementById("email-field");
let name = document.getElementById("name");
let subject = document.getElementById("subject");
let body = document.getElementById("message");
const form = document.getElementById("form");
let inputGroup = document.getElementsByClassName("input-group");
let ready_to_send = true;
let email_valid = false;

emailField.removeAttribute('required');
emailField.addEventListener('keyup', (e)=> {
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        inputGroup[0].classList.add("error");
        inputGroup[0].children[2].innerHTML = "invalid Email";
        inputGroup[0].children[2].style.display = "inline";
    }
    else {
        inputGroup[0].classList.remove("error");
        inputGroup[0].classList.add("success");
        inputGroup[0].children[2].innerHTML = "valid Email";
        email_valid = true;
    }
})

function sendEmail() {
    console.log("fuck");
    let params = {
        name: document.getElementById("name").value,
        email: emailField.value,
        subject: subject.value,
        message: body.value,
    };

    const serviceID = "service_ivqtfzf";
    const templateID = "template_26vzx8r";

    emailjs.sendForm(serviceID, templateID, form, "M8ORNnf0QvFMfIC4K")
    .then(res=>{
        emailField.value = "";
        emailField.classList.remove("success");
        emailField.style.backgroundColor = "hsl(var(--primary-light-hsl), .3)";
        name.value = "";
        subject.value = "";
        body.value = "";
        alert("Your message sent successfully!!")
    })
    .catch(err=>console.log(err));
}

form.addEventListener('submit', (e) => {
    if (!email_valid) {
        inputGroup[0].classList.add("error");
        inputGroup[0].children[2].innerHTML = "invalid Email";
        inputGroup[0].children[2].style.display = "inline"; 
        console.log("missing")  
        ready_to_send = false;
        e.preventDefault(); 
    }

    if (subject.value === '' || subject.value == null) {
        const error_msg = document.getElementById("subject-require");
        error_msg.innerHTML = "Subject is required"; 
        ready_to_send = false;
        e.preventDefault();
    }

    if (ready_to_send) {
        e.preventDefault();
        sendEmail();
    }  
})


console.log("???")