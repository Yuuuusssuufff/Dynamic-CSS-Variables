const userEl = document.getElementById("user")
const pwordEl = document.getElementById("password")
const warnEl = document.querySelector(".warning")
const cancelBtn = document.getElementById("cancel")
const loginBtn = document.getElementById("login")

loginBtn.addEventListener("click", ()=>{
    if(userEl.value === "" || pwordEl.value === ""){
        userEl.value = "" 
        pwordEl.value = "" 
        warnEl.style.display = "block"
        warnEl.style.background= "white"
        warnEl.innerHTML = "Please input your username and password"
    }
    if(userEl.value.match(" ") || pwordEl.value.match(" ")){
        userEl.value = "" 
        pwordEl.value = "" 
        userEl.style.background = "lightyellow";
        pwordEl.style.background = "lightyellow";
        warnEl.style.display = "block"
        warnEl.style.background= "white"
        warnEl.innerHTML = "login should not include space character"
    }
    if(!userEl.value.match("testuser") || !pwordEl.value.match("mypassword")){
        userEl.value = "" 
        pwordEl.value = "" 
        userEl.style.background = "red";
        pwordEl.style.background = "red";
        warnEl.style.display = "block"
    }
    else{
        warnEl.style.display = "block"
        warnEl.style.background= "white"
        warnEl.innerHTML = "Login successful"
        warnEl.style.color= "green"
    }
})
cancelBtn.addEventListener("click", ()=>{
            userEl.value = "" 
            pwordEl.value = "" 
            userEl.style.background = "white";
            pwordEl.style.background = "white";
            warnEl.style.display = "none"
})
userEl.addEventListener("input", ()=>{
            userEl.style.background = "white";
            pwordEl.style.background = "white";
            warnEl.style.display = "none"
})