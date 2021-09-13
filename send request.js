function check() {
    var name = document.getElementById("name").value.trim();
    var college = document.getElementById("college").value.trim();
    var request = document.getElementById("request").value.trim();
    var status = false;


    if (name == "") {
        document.getElementById("nameerr").innerHTML = "*Please Enter Your Name";
        status = false;
    } else if (name.length >= 4) {
        document.getElementById("nameerr").innerHTML = "";
        status = false;
    } else if (name.length <= 4) {
        document.getElementById("nameerr").innerHTML = "*The Name Must Have Be Above 4 Char";
        status = false;
    } if (college == "") {
        document.getElementById("collegeerr").innerHTML = "*Please Enter Your College Name";
        status = false;
        
    } else if (college.length >= 10) {
        document.getElementById("collegeerr").innerHTML = "";
        status = false;
        
    } else if (college.length <= 9) {
        document.getElementById("collegeerr").innerHTML = "*College Name Must be Above 10 char";
        status = false;
    } 
    if (request == "") {
        document.getElementById("requesterr").innerHTML = "*Please Enter Your Request";
        status = false;
        
    } else if (request.length >= 10) {
        document.getElementById("requesterr").innerHTML = "";
        status = false;
        
    } else if (request.length <= 9) {
        document.getElementById("requesterr").innerHTML = "*Must be Above 10 char";
        status = false;
    } 
    if(name.length >= 4 && college.length >= 10 && request.length >= 10) {
        
        alert("Send Your Request Successfullly")
        status = true;
    }


    return status;
}