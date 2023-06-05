if (window.innerWidth > 768) {
    window.location.href = '/newsletter-sign-up-with-success-message-main/success.html';
}
let output = document.querySelector('.output')
var email = localStorage.getItem('input-mail');
output.innerHTML = `A confirmation email has been sent to <strong> ${email}</strong>. Please open it and click the button inside to confirm your subscription.`
function back(){
document.querySelector('.submit').addEventListener('click',
window.location.href = '/index-responsive.html'
)
}
