function updatestdent() {
    var fname = document.getElementById("ufn").value.trim();
    var lname = document.getElementById("uln").value.trim();
    var name = document.getElementById("usun").value.trim();
    var pass = document.getElementById("uspw").value.trim();
    var number = document.getElementById("usnumber").value;
    var email = document.getElementById("usemail").value;
    var sadd = document.getElementById("uspa").value.trim();
    const phoneno = /^\d{10}$/
    const mailo = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    var status = false;

    if (fname == "") {
        document.getElementById("uferr").innerHTML = "*Please Enter Your First Name";
        status = false;

    } else if (fname.length >= 3) {
        document.getElementById("uferr").innerHTML = "";
        status = false;

    } else if (fname.length <= 2) {
        document.getElementById("uferr").innerHTML = "*First Name Must be Above 2 char";
        status = false;
    }
    if (lname == "") {
        document.getElementById("ulerr").innerHTML = "*Please Enter Your Last Name";
        status = false;
    } else if (lname.length >= 3) {
        document.getElementById("ulerr").innerHTML = "";
        status = false;

    } else if (lname.length <= 2) {
        document.getElementById("ulerr").innerHTML = "*Last Name Must be Above 2 char";
        status = false;
    }
    if (name == "") {
        document.getElementById("ususererr").innerHTML = "*Please Enter Username";
        status = false;
    } else if (name.length >= 4) {
        document.getElementById("ususererr").innerHTML = "";
        status = false;
    } else if (name.length <= 4) {
        document.getElementById("ususererr").innerHTML = "*Please Enter The Valid Username";
        status = false;
    }
    if (pass == "") {
        document.getElementById("uspasserr").innerHTML = "*Please Enter The Password";
        status = false;
    } else if (pass.length <= 5) {
        document.getElementById("uspasserr").innerHTML = "*Please Enter The Valid Password";
        status = false;
    } else if (pass.length >= 6) {
        document.getElementById("uspasserr").innerHTML = "";
        status = false;
    }
    if (number == "") {
        document.getElementById("usnumbererr").innerHTML = "*Please Enter Phone Number";
        status = false;
    } else if (!(phoneno.test(number))) {
        document.getElementById("usnumbererr").innerHTML = "*invlid phone number";
        status = false;
    } else if (phoneno.test(number)) {
        document.getElementById("usnumbererr").innerHTML = "";
        status = false;
    }

    if (email == "") {
        document.getElementById("usemailerr").innerHTML = "*Please Enter Email Id";
        status = false;
    } else if (!(mailo.test(email))) {
        document.getElementById("usemailerr").innerHTML = "*invlid Email Id";
        status = false;
    } else if ((mailo.test(email))) {
        document.getElementById("usemailerr").innerHTML = "";
        status = false;
    }
    if (sadd == "") {
        document.getElementById("usadderr").innerHTML = "*Please Enter Your College Address";
        status = false;
    } else if (sadd.length <= 10) {
        document.getElementById("usadderr").innerHTML = "*Please Enter The Valid Address";
        status = false;
    } else if (sadd.length >= 10) {
        document.getElementById("usadderr").innerHTML = "";
        status = false;
    }

    if (fname.length >= 3 && lname.length >= 3 && name.length >= 4 && pass.length >= 6 && phoneno.test(number) && mailo.test(email) && sadd.length >= 10) {
        alert("Login Successfullly")
        status = true;
    }

    return status;
}