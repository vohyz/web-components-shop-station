window.onload = () => {
    let userName = localStorage.getItem('ID');
    if (userName != null) {
        //document.querySelector('#headlogin').style.display = 'none';
    } else {
        document.querySelector('#headuser').style.display = 'none';
    }
}