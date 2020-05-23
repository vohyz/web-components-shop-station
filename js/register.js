function register() {
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let data = {
        id: id,
        password: password,
        email: email
    }
    let params = JSON.stringify(data);
    function a(){Ajax('/api/register', showMessage, params, '/home')};
    a();
}