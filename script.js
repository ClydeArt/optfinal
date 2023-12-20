function fn(){
    const password = document.getElementById("password").value
    const passcode = "123"

    if (password == passcode){
        window.location = "clyde.html"
    } else if (passcode == ""){
        alert("Please Enter the given Passcode")
    } else if (password != passcode){
        alert("You have enter the wrong Passcode")
    }
}