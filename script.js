document.getElementById("signupForm").addEventListener('submit', function(event){
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword =document.getElementById('confirm-password').value;
    const alert = document.getElementById('passwordHelp');

    if (password !== confirmPassword) {
        alert.style.display = 'block';
    } else {
        alert.style.display = 'none';
    }
})