var email = document.getElementById("input-mail").value;
function validateEmail() {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/
    const warning = document.querySelector('.warning')
    if (!regex.test(email) || email ==="") {
        warning.textContent = "Valid email required";
        warning.style.color = "hsl(4, 100%, 67%)"
    }
    else {
        setTimeout(function() {
            window.onload();
          }, 10)  
        warning.textContent = "";
        localStorage.setItem('input-mail', email);
        window.location.href = "success.html" 
  }
}




