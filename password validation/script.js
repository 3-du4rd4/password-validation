const togglePassword = document.querySelector("#togglePassword");
const button = document.querySelector("#finish");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});


button.addEventListener("click", function (){
    document.getElementById("duck").style.display = "none";
    checkPassword();
})

function checkPassword(){
    const value =  document.getElementById("password").value;
    let flag = true;

    const hasMinLength = (value) => value >= 8 ? "true" : "false";
    const hasUpper = (value) => /[A-Z]/.test(value);
    const hasLower = (value) => /[a-z]/.test(value);
    const hasNumber = (value) => /[0-9]/.test(value);
    const hasSpecial = (value) => /[!@#$%*()_+^&{}}:;?.]/.test(value); 

    if(hasNumber(value)){
        document.getElementById("rule-1").style.color = "#C1FF72";
    } else {
        document.getElementById("rule-1").style.color = "#FF3131";
        flag = false;
    }

    if(hasMinLength(value)){
        document.getElementById("rule-2").style.color = "#C1FF72";
    } else {
        document.getElementById("rule-2").style.color = "#FF3131";
        flag = false;
    }

    if(hasLower(value)){
        document.getElementById("rule-3").style.color = "#C1FF72";
    } else {
        document.getElementById("rule-3").style.color = "#FF3131";
        flag = false;
    }

    if(hasUpper(value)){
        document.getElementById("rule-4").style.color = "#C1FF72";
    } else {
        document.getElementById("rule-4").style.color = "#FF3131";
        flag = false;
    }

    if(hasSpecial(value)){
        document.getElementById("rule-5").style.color = "#C1FF72";
    } else {
        document.getElementById("rule-5").style.color = "#FF3131";
        flag = false;
    }

    if(flag){
        document.getElementById("duck").style.display = "inline";
        setTimeout(function() {
            document.getElementById("password").value = "";
            document.getElementById("duck").style.display = "none";
            document.getElementById("rule-1").style.color = "#FCEDDA";
            document.getElementById("rule-2").style.color = "#FCEDDA";
            document.getElementById("rule-3").style.color = "#FCEDDA";
            document.getElementById("rule-4").style.color = "#FCEDDA";
            document.getElementById("rule-5").style.color = "#FCEDDA";
          }, 4000)
    } else {
        setTimeout(function() {
            document.getElementById("password").value = "";
            document.getElementById("rule-1").style.color = "#FCEDDA";
            document.getElementById("rule-2").style.color = "#FCEDDA";
            document.getElementById("rule-3").style.color = "#FCEDDA";
            document.getElementById("rule-4").style.color = "#FCEDDA";
            document.getElementById("rule-5").style.color = "#FCEDDA";
          }, 4000)
    }
}