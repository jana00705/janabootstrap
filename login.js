/*function check(){

    var name=document.getElementById("username").value;
     
    if(name==""){
        document.getElementById("usererr").innerHTML="user not";
         //alert("1234");
    }
    else{
        alert("987");
    }
    e.preventDefault()
}
*/
function check() {
    var name = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value.trim();
     var status = false;

if (document.getElementById('adminr').checked) {
    

    if (name == "" || name == null) {
        document.getElementById("usererr").innerHTML = "*Please Enter The Valid Username";
        status = false;
    } else if (pass == "" || pass == null) {
        document.getElementById("usererr").innerHTML = "";
        document.getElementById("passerr").innerHTML = "*Please Enter The Valid Password";
        status = false;
    } else {
        document.getElementById("passerr").innerHTML = "";
        status = true;
        alert("Login Successfullly")
        window.open("admin.html");
     

    }
    
}

else if (document.getElementById('colleger').checked) {
    

    if (name == "" || name == null) {
        document.getElementById("usererr").innerHTML = "*Please Enter The Valid Username";
        status = false;
    } else if (pass == "" || pass == null) {
        document.getElementById("usererr").innerHTML = "";
        document.getElementById("passerr").innerHTML = "*Please Enter The Valid Password";
        status = false;
    } else {
        document.getElementById("passerr").innerHTML = "";
        status = true;
        alert("College Login Successfullly")
        window.open("college login.html");
    }
    
}

else if (document.getElementById('studentr').checked) {
    

    if (name == "" || name == null) {
        document.getElementById("usererr").innerHTML = "*Please Enter The Valid Username";
        status = false;
    } else if (pass == "" || pass == null) {
        document.getElementById("usererr").innerHTML = "";
        document.getElementById("passerr").innerHTML = "*Please Enter The Valid Password";
        status = false;
    } else {
        document.getElementById("passerr").innerHTML = "";
        status = true;
        alert("Student Login Successfullly")
        window.open("student login.html");

    }
    
}
return status;
}

function cancel(){
location.reload();
}

// if(document.getElementById('summer').checked) {   
//     document.getElementById("disp").innerHTML   
//         = document.getElementById("summer").value   
//         + " radio button is checked";   
// }   
// else if(document.getElementById('winter').checked) {   
//     document.getElementById("disp").innerHTML   
//         = document.getElementById("winter").value   
//         + " radio button is checked";     
// }   
// else if(document.getElementById('rainy').checked) {   
//     document.getElementById("disp").innerHTML   
//         = document.getElementById("rainy").value   
//         + " radio button is checked";     
// }   
// else if(document.getElementById('autumn').checked) {   
//     document.getElementById("disp").innerHTML   
//         = document.getElementById("autumn").value   
//         + " radio button is checked";     
// }  
// else {   
//     document.getElementById("error").innerHTML   
//         = "You have not selected any season";   
// }   

   

   