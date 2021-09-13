class FormValidation{
    formValues = {
        cn : "",
        cun : "",
        pw : "",
        cpa : "",
    number : "",
       
       
    }
    errorValues = {
        clgErr : "",
        usernameErr : "",
        passwordErr : "",
        addressErr :"",
        phonenumberErr : "",
    }
    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg   
    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
        this.formValues.cn = document.getElementById('cn').value.trim()
        this.formValues.cun = document.getElementById('cun').value.trim()
        this.formValues.pw = document.getElementById('pw').value.trim()
        this.formValues.cpa = document.getElementById('cpa').value.trim()
        this.formValues.number = document.getElementById('number').value.trim()
       
       
    }
    validateCollegename(){
        if(this.formValues.cn === ""){
            this.errorValues.clgErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues.clgErr)
        } else if(this.formValues.cn.length <= 4 ){
            this.errorValues.clgErr = "* Username must be atleast 5 Characters"
            this.showErrorMsg(0,this.errorValues.clgErr)
        } else if(this.formValues.cn.length > 14){
            this.errorValues.clgErr = "* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.clgErr)
        } else {
            this.errorValues.clgErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateUsername(){
        if(this.formValues.cun=== ""){
            this.errorValues.usernameErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.cun.length <= 4 ){
            this.errorValues.usernameErr = "* Username must be atleast 5 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.cun.length > 14){
            this.errorValues.usernameErr = "* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else {
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validatePassword(){
        if(this.formValues.pw === ""){
            this.errorValues.passwordErr = "* Please Provide a Password"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.pw.length <= 4){
            this.errorValues.passwordErr = "* Password must be atleast 5 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.pw.length > 10){
            this.errorValues.passwordErr = "* Password should not exceeds 10 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else {
            this.errorValues.passwordErr = ""
            this.showSuccessMsg(3)
        }
    }
    validateAddress(){
        if(this.formValues.cpa=== ""){
            this.errorValues. addressErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues. addressErr)
        } else if(this.formValues.cpa.length <= 4 ){
            this.errorValues. addressErr= "* Username must be atleast 5 Characters"
            this.showErrorMsg(0,this.errorValues. addressErr)
        } else {
            this.errorValues. addressErr = ""
            this.showSuccessMsg(0)
        }
    }
    
    validatePhonenumber(){
       const phoneno = /^\d{10}$/
       if(this.formValues.number === ""){
           this.errorValues.phonenumberErr = "* Please Enter your Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       } else if(phoneno.test(this.formValues.number)){
           this.errorValues.phonenumberErr = ""
           this.showSuccessMsg(2)
       } else {
           this.errorValues.phonenumberErr = "* Invalid Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       }
    }
   
   
    alertMessage(){
        const {clgErr ,usernameErr ,passwordErr ,addressErr ,phonenumberErr }= this.errorValues
        if(clgErr=== "" && usernameErr === "" && passwordErr === ""  && addressErr === "" && phonenumberErr === "" &&  confirmpasswordErr === ""){
            swal("Registration Successful","ThankYou , "+this.formValues.cun,"success").then(() => {
                console.log(this.formValues)
                this.removeInputs()
            })
        } else {
            swal("Give Valid Inputs","Click ok to Continue" ,"error")
        }
    }

    removeInputs(){
        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('span')[0].textContent = ""
            element.classList.remove('success')
        })
    }
} 

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('box')[0].addEventListener('button' , event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateCollegename()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validatePassword()
    ValidateUserInputs.validateAddress()
    ValidateUserInputs.validatePhonenumber()
    
    
    ValidateUserInputs.alertMessage()
})