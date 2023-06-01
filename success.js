let output = document.querySelector('.output')
var email = localStorage.getItem('input-mail');
output.textContent = `A confirmation email has been sent to  ${email}. Please open it and click the button inside to confirm your subscription.`
function reload(){
document.querySelector('.submit').addEventListener('click',
window.location.href = 'index.html',
setTimeout(function() {
    window.location.reload();
  }, 100)
)
}
