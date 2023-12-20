function fn(){
    const password = document.getElementById("passcode").value
    const passcode = "123"

    if (password == passcode){
        window.location.href = "clyde.html"
    } else if (passcode == ""){
        alert("Please Enter the given Passcode")
    } else if (password != passcode){
        alert("You have enter the wrong Passcode")
    }
}

function btn1(){
    const details1 = document.getElementById("details1")

    details1.classList.toggle("show")
}

function btn2(){
    const details2 = document.getElementById("details2")

    details2.classList.toggle("show")
}

function btn3(){
    const details3 = document.getElementById("details3")

    details3.classList.toggle("show")
}