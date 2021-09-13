function check() {
    var feed = document.getElementById("fb").value.trim();
     var status = false;


    if (feed == "" || feed == null) {
        document.getElementById("feederr").innerHTML = "*Please Enter Your Feedback";
        status = false;
    }  else {
        document.getElementById("feederr").innerHTML = "";
        status = true;
        alert("Thank You For Your Feedback")

    }

    return status;
}