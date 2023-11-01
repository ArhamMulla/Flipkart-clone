let getUserdata=JSON.parse(localStorage.getItem("userData")) || []
// console.log(getUserdata)

function signup(){
    let uname=document.getElementById('naam').value
    let mobile=document.getElementById('phone').value
    let password=document.getElementById('pass').value
    let userData
    if(mobile.length!==10){
        alert("Number should be of 10 digits")
    }
    else{userData={
        uname:uname,
        mobile:mobile,
        password:password
    }
    
    let user=[...getUserdata,userData]
    localStorage.setItem('userData',JSON.stringify(user))

    alert("SignUp successful")
    window.location.href="signin.html"
}
    
}
