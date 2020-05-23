function login() {
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;
    let data = {
        id: id,
        password: password,
    }
    let params = JSON.stringify(data);
    function a(){Ajax('/api/login', showMessage, params, '/home', store(id))};
    a();
}

function store(id) {
    localStorage.setItem('ID', id);
}