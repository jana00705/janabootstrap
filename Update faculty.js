function updatefaculty() {
    var facname = document.getElementById("ufan").value.trim();
    var qualify = document.getElementById("uqua").value.trim();
   var skill = document.getElementById("ust").value.trim();
    
    var status = false;

    if (facname == "") {
        document.getElementById("ufaerr").innerHTML = "*Please Enter The Faculty Name";
        status = false;
        
    } else if (facname.length >=3) {
        document.getElementById("ufaerr").innerHTML = "";
        status = false;
        
    } else if (clgname.length <= 2) {
        document.getElementById("ufaerr").innerHTML = "*Faculty Name Must be Above 2 char";
        status = false;
    }
    if (qualify == "") {
        document.getElementById("uquerr").innerHTML = "*Please Enter Your Qualification";
        status = false;
    } else if (qualify.length >= 2) {
        document.getElementById("uquerr").innerHTML = "";
        status = false;
    } else if (qualify.length <=1) {
        document.getElementById("uquerr").innerHTML = "*Please Enter The Valid Qualification";
        status = false;
    }
   
    if (skill== "") {
        document.getElementById("uskillerr").innerHTML = "*Please Enter Your Skill Set";
        status = false;
    } else if (skill.length <= 5) {
        document.getElementById("uskillerr").innerHTML = "*The SkillSet Must Be Above 5 char";
        status = false;
    } else if (skill.length >= 6) {
        document.getElementById("uskillerr").innerHTML = "";
        status = false;
    }

  
    if(facname.length >=3 && qualify.length >= 2 && skill.length >= 6 ) {

        alert("Faculty Added Successfullly")
        status = true;
    }

    return status;
}