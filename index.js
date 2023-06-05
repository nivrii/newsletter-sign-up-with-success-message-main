
if (window.innerWidth <= 768) {
    window.location.href = 'index-responsive.html';
}
const emailText = document.getElementById("input-mail")
var email = emailText.value.trim();
localStorage.setItem('input-mail', email);
function validateEmail() {
    setTimeout(function() {
        window.location.reload();
      }, 1000)
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/
    const warning = document.querySelector('.warning')
    if (!email.match(regex) || email ==="") {
        warning.textContent = "Valid email required";
        warning.style.color = "hsl(4, 100%, 67%)"
        return false
    }
    else {  
        warning.textContent = "";
        window.location.href = "success.html" 
        return true
  }
}





