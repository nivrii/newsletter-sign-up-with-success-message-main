if (window.innerWidth <= 768) {
    window.location.href = 'success-responsive.html';
}
let output = document.querySelector('.output')
var email = localStorage.getItem('input-mail');
output.innerHTML = `A confirmation email has been sent to <strong> ${email}</strong>. Please open it and click the button inside to confirm your subscription.`
function reload(){
document.querySelector('.submit').addEventListener('click',
window.location.href = 'index.html'
)
}
