// function toggleMenu() {
//     const navLinks = document.getElementById("navLinks");
//     navLinks.classList.toggle("aactive");
// }

let email=document.getElementById("email");
let username=document.getElementById("username");

function sendMessage(){
    email.value="";
    username.value="";
    alert("Message Sent!");
}

