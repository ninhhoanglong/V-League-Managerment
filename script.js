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
    if(username == '') {
        alert("Bạn phải điền username!");
        document.myform.username.focus();
    } else if(password == '') {
        alert("Bạn phải điền password!");
        document.myform.password.focus();
    } else {
        alert("Bạn đã đăng nhập thành công!");
        var a = document.getElementById("login");
        a.href="";
    }
}

function check1 (username, email, password, password1) {
    if(username == '') {
        alert("Bạn phải điền username!");
        document.myform1.username.focus();
    } else if(email == '') {
        alert("Bạn phải điền email!");
        document.myform1.email.focus();
    } else if(password == '') {
        alert("Bạn phải điền password!");
        document.myform1.password.focus();
    } else if(password1 == '') {
        alert("Bạn phải điền lai password!");
        document.myform1.password1.focus();
    } else if(username.length <= 10) {
        alert("Username phải lớn hơn 10 ký tự!");
        document.myform1.username.focus();
    } else if(password != password1) {
        alert("Mật khẩu không trùng nhau!");
        document.myform1.password1.focus();
    } else {
        alert("Bạn đã đăng ký thành công!");
        var a = document.getElementById("dki");
        a.href="";
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
    var password = document.myform1.password.value;
    document.myform1.password.focus();
    var password1 = document.myform1.password1.value;
    document.myform1.password1.focus();
    check1(username, email, password, password1);
}

// end JS-login- Long