var result = document.getElementById("result");
var error = document.getElementById("error");
var email1 = document.getElementById("content_email");
var button = document.getElementById("content_button");



function validateEmail(email) {
    let res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}




button.addEventListener('click',e => {

    e.preventDefault();
    var email = email1.value;

    if(validateEmail(email)) {
        result.classList.add("close");
        error.classList.add("close");
    }
    else {
        
        result.classList.remove("close");
        error.classList.remove("close");
    }
});
