var run_onchange = false;

function valid() {
    var errors = false;
    var reg_mail =
        /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;


    var fullname_value = document.getElementById("fullname").value;
    console.log("fullname: " + fullname_value);

    var phonelbl_element = document.getElementById("phonelbl");
    var phone_element = document.getElementById("phone");
    var phone_value = phone_element.value;
    if (isNaN(phone_value) == true) {
        phonelbl_element.innerHTML = "Phone: Số điện thoại phải là kiểu số";
        phonelbl_element.style.fontFamily = "Times New Roman";
        phonelbl_element.style.color = "#FF0000";
        errors = true;
        run_onchange = true;
        phone_element.style.border = "1px solid #c6807b";
        phone_element.style.background = "#fffcf9";
    }
    console.log("phone: " + phone_value);

    var emaillbl_element = document.getElementById("emaillbl");
    var email_element = document.getElementById("email");
    var email_value = email_element.value;
    if (reg_mail.test(email_value) == false) {
        emaillbl_element.innerHTML = "Email không hợp lệ (ví dụ: abc@gmail.com)";
        emaillbl_element.style.fontFamily = "Times New Roman";
        emaillbl_element.style.color = "#FF0000";
        errors = true;
        run_onchange = true;
        email_element.style.border = "1px solid #c6807b";
        email_element.style.background = "#fffcf9";
    }
    console.log("email: " + email_value);

    var passwordlbl_element = document.getElementById("passwordlbl");
    var pass_element = document.getElementById("password");
    var pass_value = pass_element.value;
    if (pass_value.length < 6) {
        passwordlbl_element.innerHTML = "Password phải từ 6 ký tự";
        passwordlbl_element.style.fontFamily = "Times New Roman";
        passwordlbl_element.style.color = "#FF0000";
        errors = true;
        run_onchange = true;
        pass_element.style.border = "1px solid #c6807b";
        pass_element.style.background = "#fffcf9";
    }

    // Kiểm tra password nhập lại
    var confirm_passlbl_element = document.getElementById("confirm_passlbl");
    var confirm_pass_element = document.getElementById("confirm_pass");
    var confirm_pass_value = confirm_pass_element.value;
    if (confirm_pass_value != pass_value) {
        confirm_passlbl_element.innerHTML = "Password nhập lại chưa đúng";
        confirm_passlbl_element.style.fontFamily = "Times New Roman";
        confirm_passlbl_element.style.color = "#FF0000";
        errors = true;
        run_onchange = true;
        confirm_pass_element.style.border = "1px solid #c6807b";
        confirm_pass_element.style.background = "#fffcf9";
    }

    if (errors == false) {
        localStorage.setItem('account',JSON.stringify({ email: email_value, pwd: pass_value }));
        alert("Đăng ký thành công");
        document.write("You will be redirected to login page in 3 sec.");
        setTimeout(redirect(), 700);
        console.log(accounts)
    }


    return !errors;
}

var register = document.getElementById("submit");
register.onclick = function () {
    return valid();
};

function redirect() {
    window.location = "./login.html";
};


