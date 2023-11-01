let getUsersdata=JSON.parse(localStorage.getItem("userData"))

function signin(){
    let mobile=document.getElementById('phone').value
    let password=document.getElementById('pass').value
    let count=0
    if(mobile.length!==10){
        alert("Number should be of 10 digits")
    }
    if(mobile.length==0){
        alert("Enter Mobile Number")
    }
    console.log(mobile,password)
    for(let i=0;i<getUsersdata.length;i++){
        if(mobile==getUsersdata[i].mobile){
            if(password==getUsersdata[i].password){
                alert("Signin Successful")
                window.location.href="index.html"
            }else{
                alert("Invalid Password")
            }
        }else{
            count++
        }
    }
    if(count==getUsersdata.length){
        alert("User is not registered,Signup to continue")
        window.location.href="signup.html"
    }
}