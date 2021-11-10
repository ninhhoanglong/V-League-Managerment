// start JS-login- Long

function closeModal() {
    document.querySelector(".modal1").style.display = "none";
}

function openModal() {
    document.querySelector(".modal1").style.display = "flex";
}

function check(username, password) {
    if(username == '') {
        alert("Bạn phải điền username!");
        document.myform.username.focus();
    } else if(password == '') {
        alert("Bạn phải điền password!");
        document.myform.password.focus();
    } else {
        alert("Bạn đã đăng ký thành công!");
    }
}

function displayResult() {
    var username = document.myform.username.value;
    // var email = document.myform.email.value;
    var password = document.myform.password.value;
    // var password1 = document.myform.password1.value;
    check(username, password);
}

// end JS-login- Long