class TopBar extends HTMLElement {
    constructor() {
        super();
        let userName = localStorage.getItem('userName');

        var templateElem = document.getElementById('topBarTemplate');
        var content = templateElem.content.cloneNode(true);
        if (userName != null) {
            content.querySelector('.headlogin').setAttribute('display', none)
            content.querySelector('#username').innerText = this.getAttribute('name');
        } else {
            content.querySelector('.headuser').setAttribute('display', none)
        }
        shadow.appendChild(content);
    }
}
window.customElements.define('top-bar', TopBar);