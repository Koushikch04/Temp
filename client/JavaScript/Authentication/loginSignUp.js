
const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });

    ipt.addEventListener("blur", () => {
        if (ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
    });
})


const userMail = document.getElementById("user-mail")
const userPassword = document.getElementById("user-password")
const confirmPassword = document.getElementById("user-confirm")
const form = document.querySelector(".contact-buttons")
const mailError = document.getElementById("mail-error")
const passwordError = document.getElementById("password-error")
const confirmPasswordError = document.getElementById("confirm-error")

// p.q q followed by p
//^p any string with p at the beginning of it
//p+ It matches any string containing one or more p's.
//p$ Matches any string with n at the end of it

form.addEventListener('click', async (event) => {
    let mailErrorMessages = []
    let passwordErrorMessages = []
    let validMailFormat = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let employeeFormat = /^e[0-9]+$/
    console.log()
    if (userMail.value === "admin123" && userPassword.value === "Admin@123") {

    }
    else if (userMail.value === "E101" && userPassword.value === "Angela@1234") {

    }
    else if (!userMail.value.match(employeeFormat) || userMail.value.includes('@')) {
        if (userMail.value == "" || userMail.value == null) {
            mailErrorMessages.push("User Mail cannot be empty")
            console.log("User mail cannot be empty");
        }
        else if (!userMail.value.match(validMailFormat)) {
            mailErrorMessages.push("Incorrect Mail Format!")
        }
        else if (document.querySelector("#user-mail").classList.contains("error")) {
            document.querySelector("#user-mail").classList.toggle("error")
            mailError.innerText = ""
        }
        if (mailErrorMessages.length > 0) {
            event.preventDefault()
            mailError.innerText = mailErrorMessages.join(",")
            document.querySelector(".contact-form #user-mail").classList.add("error")
        }
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;
        if (userPassword.value.length == 0 || !userPassword.value.match(lowerCaseLetters) || !userPassword.value.match(upperCaseLetters)
            || !userPassword.value.match(numbers) || userPassword.value.length < 8) {
            passwordErrorMessages.push("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
            document.querySelector(".contact-form #user-password").classList.add("error")
        }

        if ((confirmPassword) != null && (confirmPasswordError) != null) {
            if (userPassword != null && userPassword.value != confirmPassword.value) {
                event.preventDefault()
                confirmPasswordError.innerText = "Passwords doesnot match"
                document.querySelector(".contact-form #user-confirm").classList.add("error")
                // document.getElementById("password-label").style = 'transform: translateY(-30rem)';
            }
            else if (document.querySelector("#user-confirm").classList.contains("error")) {
                document.querySelector(".contact-form #user-confirm").classList.remove("error")
                confirmPasswordError.innerText = ""
            }
            console.log("hello");
        }


        if (passwordErrorMessages.length > 0) {
            event.preventDefault()
            passwordError.innerText = passwordErrorMessages.join(",")
        }
        else if (document.querySelector("#user-password").classList.contains("error")) {
            document.querySelector("#user-password").classList.remove("error")
            passwordError.innerText = ""
        }
    }
    else {
        // event.preventDefault()
        console.log("err");
        let employeeDetails = {
            name: userMail.value,
            passWord: userPassword.value
        }
        document.querySelector('.contact-form').action = "/auth/employee/login"
    }
})

