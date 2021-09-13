function addfaculty() {
    var facname = document.getElementById("fan").value.trim();
    var qualify = document.getElementById("qua").value.trim();
   var skill = document.getElementById("st").value.trim();
    
    var status = false;

    if (facname == "") {
        document.getElementById("faerr").innerHTML = "*Please Enter The Faculty Name";
        status = false;
        
    } else if (facname.length >=3) {
        document.getElementById("faerr").innerHTML = "";
        status = false;
        
    } else if (clgname.length <= 2) {
        document.getElementById("faerr").innerHTML = "*Faculty Name Must be Above 2 char";
        status = false;
    }
    if (qualify == "") {
        document.getElementById("querr").innerHTML = "*Please Enter Your Qualification";
        status = false;
    } else if (qualify.length >= 2) {
        document.getElementById("querr").innerHTML = "";
        status = false;
    } else if (qualify.length <=1) {
        document.getElementById("querr").innerHTML = "*Please Enter The Valid Qualification";
        status = false;
    }
   
    if (skill== "") {
        document.getElementById("skillerr").innerHTML = "*Please Enter Your Skill Set";
        status = false;
    } else if (skill.length <= 5) {
        document.getElementById("skillerr").innerHTML = "*The SkillSet Must Be Above 5 char";
        status = false;
    } else if (skill.length >= 6) {
        document.getElementById("skillerr").innerHTML = "";
        status = false;
    }

  
    if(facname.length >=3 && qualify.length >= 2 && skill.length >= 6 ) {

        alert("Faculty Added Successfullly")
        status = true;
    }

    return status;
}