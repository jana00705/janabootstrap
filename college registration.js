function collegereg() {
    var clgname = document.getElementById("cn").value.trim();
    var name = document.getElementById("cun").value.trim();
    var pass = document.getElementById("cpw").value.trim();
    var cadd = document.getElementById("cpa").value.trim();
    var number = document.getElementById("number").value;
    const phoneno = /^\d{10}$/
    var status = false;

    if (clgname == "") {
        document.getElementById("cerr").innerHTML = "*Please Enter Your College Name";
        status = false;
        
    } else if (clgname.length >= 10) {
        document.getElementById("cerr").innerHTML = "";
        status = false;
        
    } else if (clgname.length <= 9) {
        document.getElementById("cerr").innerHTML = "*College Name Must be Above 10 char";
        status = false;
    }
    if (name == "") {
        document.getElementById("cusererr").innerHTML = "*Please Enter Your Name";
        status = false;
    } else if (name.length >= 4) {
        document.getElementById("cusererr").innerHTML = "";
        status = false;
    } else if (name.length <= 4) {
        document.getElementById("cusererr").innerHTML = "*Please Enter The Valid Username";
        status = false;
    }
    if (pass == "") {
        document.getElementById("cpasserr").innerHTML = "*Please Enter The Password";
        status = false;
    } else if (pass.length <= 5) {
        document.getElementById("cpasserr").innerHTML = "*Please Enter The Valid Password";
        status = false;
    } else if (pass.length >= 6) {
        document.getElementById("cpasserr").innerHTML = "";
        status = false;
    }
    if (cadd == "") {
        document.getElementById("adderr").innerHTML = "*Please Enter Your College Address";
        status = false;
    } else if (cadd.length <= 10) {
        document.getElementById("adderr").innerHTML = "*Please Enter The Valid Address";
        status = false;
    } else if (cadd.length >= 10) {
        document.getElementById("adderr").innerHTML = "";
        status = false;
    }

    if (number == "") {
        document.getElementById("numbererr").innerHTML = "*Please Enter Phone Number";
        status = false;
    } else if (!(phoneno.test(number))) {
        document.getElementById("numbererr").innerHTML = "*invlid phone number";
        status = false;
    } else if (phoneno.test(number)) {
        document.getElementById("numbererr").innerHTML = "";
        status = false;
    }
    if(clgname.length >= 10 && name.length >= 4 && pass.length >= 6 && cadd.length >= 10 && phoneno.test(number)) {
        document.getElementById("numbererr").innerHTML = "";
        alert("Registration Successfullly")
        status = true;
    }

    return status;
}

