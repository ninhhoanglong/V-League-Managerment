// start JS-login- Long



function closeModal() {
    document.querySelector(".modal1").style.display = "none";
    document.querySelector(".modal2").style.display = "none";
}

function openModal() {
    document.querySelector(".modal1").style.display = "flex";
}

function opendki() {
    document.querySelector(".modal1").style.display = "none";
    document.querySelector(".modal2").style.display = "flex";

}

function check(username, password) {
    if (username == '') {
        alert("Bạn phải điền username!");
        document.myform.username.focus();
    } else if (password == '') {
        alert("Bạn phải điền password!");
        document.myform.password.focus();
    } else {
        alert("Bạn đã đăng nhập thành công!");
        var a = document.getElementById("login");
        a.href = "";
    }
}

function check1(username, email, numberphone, password, password1) {
    if (username == '') {
        alert("Bạn phải điền username!");
        document.myform1.username.focus();
    }
    else if (username.length < 7 || username.length > 10) {
        alert("Username phải từ 7 đến 10 ký tự!");
        document.myform1.username.focus();
    }
    else if (!checkUsername(username)) {
        alert("Username không có ký tự đặc biệt!");
        document.myform1.username.focus();
    }
    else if (email == '') {
        alert("Bạn phải điền email!");
        document.myform1.email.focus();
    }
    else if (!checkEmail(email)) {
        alert("Yêu cầu nhập đúng định dạng email!");
        document.myform1.email.focus();
    }
    else if (numberphone == '') {
        alert("Bạn phải điền number phone!");
        document.myform1.numberphone.focus();
    }
    else if (numberphone.length != 10) {
        alert("Phonenumber phải có 10 chữ số!");
        document.myform1.numberphone.focus();
    }
    else if (!checkNumberphone(numberphone)) {
        alert("Phonenumber phải là số!");
        document.myform1.numberphone.focus();
    }
    else if (password == '') {
        alert("Bạn phải điền password!");
        document.myform1.password.focus();
    }
    else if (password.length < 7 || password.length > 10) {
        alert("Password phải từ 7 đến 10 ký tự!");
        document.myform1.password.focus();
    }
    else if (!checkPassword(password)) {
        alert("Mật khẩu không hợp lệ!");
        document.myform1.password.focus();
    }
    else if (password == username) {
        alert("Mật khẩu và Username không được trùng nhau!");
        document.myform1.password.focus();
    }
    else if (password1 == '') {
        alert("Bạn phải điền lại password!");
        document.myform1.password1.focus();
    }
    else if (password != password1) {
        alert("Mật khẩu không trùng nhau!");
        document.myform1.password1.focus();
    }
    else {
        alert("Bạn đã đăng ký thành công!");
        var a = document.getElementById("dki");
        a.href = "";
    }
}

function displayResult() {
    var username = document.myform.username.value;
    var password = document.myform.password.value;
    check(username, password);
}

function displayResult1() {
    var username = document.myform1.username.value;
    document.myform1.username.focus();
    var email = document.myform1.email.value;
    document.myform1.email.focus();
    var numberphone = document.myform1.numberphone.value;
    document.myform1.numberphone.focus();
    var password = document.myform1.password.value;
    document.myform1.password.focus();
    var password1 = document.myform1.password1.value;
    document.myform1.password1.focus();
    check1(username, email, numberphone, password, password1);
}

function checkUsername(username) {
    var x = /([a-zA-Z0-9_]{7,10})+$/;
    return x.test(username);
}

function checkEmail(email) {
    var x = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+(.[a-zA-Z]{2,})+$/;
    return x.test(email);
}

function checkNumberphone(numberphone) {
    var x = /([0-9]{10,10})+$/;
    return x.test(numberphone);
}

function checkPassword(password) {
    var x = /([a-zA-Z0-9]{7,10})+$/;
    return x.test(password);
}

// end JS-login- Long