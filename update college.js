function updatecollege() {
    var clgname = document.getElementById("ucn").value.trim();
    var name = document.getElementById("ucun").value.trim();
    var pass = document.getElementById("ucpw").value.trim();
    var cadd = document.getElementById("ucpa").value.trim();
    var number = document.getElementById("ucnumber").value;
    const phoneno = /^\d{10}$/
    var status = false;

    if (clgname == "") {
        document.getElementById("ucerr").innerHTML = "*Please Enter Your College Name";
        status = false;
        
    } else if (clgname.length >= 10) {
        document.getElementById("ucerr").innerHTML = "";
        status = false;
        
    } else if (clgname.length <= 9) {
        document.getElementById("ucerr").innerHTML = "*College Name Must be Above 10 char";
        status = false;
    }
    if (name == "") {
        document.getElementById("ucusererr").innerHTML = "*Please Enter Your Name";
        status = false;
    } else if (name.length >= 4) {
        document.getElementById("ucusererr").innerHTML = "";
        status = false;
    } else if (name.length <= 4) {
        document.getElementById("ucusererr").innerHTML = "*Please Enter The Valid Username";
        status = false;
    }
    if (pass == "") {
        document.getElementById("ucpasserr").innerHTML = "*Please Enter The Password";
        status = false;
    } else if (pass.length <= 5) {
        document.getElementById("ucpasserr").innerHTML = "*Please Enter The Valid Password";
        status = false;
    } else if (pass.length >= 6) {
        document.getElementById("ucpasserr").innerHTML = "";
        status = false;
    }
    if (cadd == "") {
        document.getElementById("ucadderr").innerHTML = "*Please Enter Your College Name";
        status = false;
    } else if (cadd.length <= 10) {
        document.getElementById("ucadderr").innerHTML = "*Please Enter The Valid Address";
        status = false;
    } else if (cadd.length >= 10) {
        document.getElementById("ucadderr").innerHTML = "";
        status = false;
    }

    if (number == "") {
        document.getElementById("ucnumbererr").innerHTML = "*Please Enter Phone Number";
        status = false;
    } else if (!(phoneno.test(number))) {
        document.getElementById("ucnumbererr").innerHTML = "*invlid phone number";
        status = false;
    } else if (phoneno.test(number)) {
        document.getElementById("ucnumbererr").innerHTML = "";
        status = false;
    }
    if(clgname.length >= 10 && name.length >= 4 && pass.length >= 6 && cadd.length >= 10 && phoneno.test(number)) {
        document.getElementById("ucnumbererr").innerHTML = "";
        alert("Update Successfullly")
        status = true;
    }

    return status;
}