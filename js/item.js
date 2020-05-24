if(myitem!=1) {
    class MyItem extends HTMLElement {
        constructor() {
            super();
            var templateElem = document.getElementById('itemTemplate');
            var content = templateElem.content.cloneNode(true);
            content.querySelector('img').setAttribute('src', this.getAttribute('image'));
            content.querySelector('.itemcontainer>.itemtitle').innerText = this.getAttribute('title');
            content.querySelector('.itemcontainer>.itemcontent').innerText = this.getAttribute('content');
            content.querySelector('.itemprice').innerText = this.getAttribute('price');
            this.appendChild(content);
        }
    }
    window.customElements.define('my-item', MyItem);
}
var myitem = 1;

function addToCart(e) {
    let id = localStorage.getItem('ID');
    let gameName = e.getAttribute('title');
    let data = {
        id: id,
        gameName: gameName,
    }
    let params = JSON.stringify(data);
    function a(){Ajax('/api/addToCart', showMessage, params);}
    if(id)
        a();
    else
        route.jump('/login')
}