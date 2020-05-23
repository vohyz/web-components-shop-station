class Message extends HTMLElement {
    constructor() {
        super();
        var shadow = this.attachShadow( { mode: 'closed' } );
        var templateElem = document.getElementById('msgTemplate');
        var content = templateElem.content.cloneNode(true);
        content.querySelector('.message').innerText = this.getAttribute('message');
        let type = this.getAttribute('type');
        if(type == 'ok') {
            content.querySelector('.messagebox').style.backgroundColor = "#00FF99";
        } else {
            content.querySelector('.messagebox').style.backgroundColor = "#FF6666";
        }
        
        shadow.appendChild(content);
        setTimeout(() => {
            this.hide()
        }, 2000);
        
    }
    hide() {
        this.parentNode.removeChild(this);
    }
}
window.customElements.define('my-message', Message);

function showMessage(e) {
    let msg = document.createElement('div');
    msg.innerHTML = `<my-message message="`+e["errmsg"]+`" type="`+e["errno"]+`"></my-message>`;
    document.querySelector("body").appendChild(msg);
}
