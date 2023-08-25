let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");

form.onsubmit = function (e) {
    let usernameV = false;
    let emailV = false;
    let passwordV = false;

    if (username.value !== "") {
        usernameV = true;
        username.classList.remove("err")
        username.classList.add("good")
        setTimeout(function () {
            username.classList.remove("good")
        }, 2000)
        username.setAttribute("placeholder", "your user is empty")
    } else {

        username.classList.add("err")
        username.classList.remove("good")
        username.setAttribute("placeholder", "your user is empty")
        setTimeout(function () {
            username.classList.remove("err")
        }, 2000)


    }

    function checkEmail() {
        let emailvV = email.value;
        let check = /\w+@\w+.com/ig;
        console.log(emailvV.match(check))
    }

    checkEmail()

    if (email.value !== "" && email.value.match(/\w+@\w+.com/ig)) {
        emailV = true;
        email.classList.add("good")
        email.classList.remove("err")
        setTimeout(function () {
            email.classList.remove("good")
        }, 2000)
    } else {
        email.setAttribute("placeholder", "your email is empty")
        email.classList.add("err")
        email.classList.remove("good")
        setTimeout(function () {
            email.classList.remove("err")
        }, 2000)
    }

    if (password.value !== "" && password.value.length >= 8) {
        password.classList.add("good")
        passwordV = true;
        password.classList.remove("err")
        setTimeout(function () {
            password.classList.remove("good")
        }, 2000)
    } else {
        password.classList.add("err")
        password.classList.remove("good")
        setTimeout(function () {
            password.classList.remove("err")
        }, 2000)
    }

    if (usernameV === false || emailV === false || passwordV === false) {
        e.preventDefault()
    }

}


console.log('suck your self')