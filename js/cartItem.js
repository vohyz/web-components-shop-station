if(cartitem!=1) {
    class CartItem extends HTMLElement {
        constructor() {
            super();
            var templateElem = document.getElementById('cartItemTemplate');
            var content = templateElem.content.cloneNode(true);
            content.querySelector('img').setAttribute('src', this.getAttribute('image'));
            content.querySelector('.itemRight>.container>.title').innerText = this.getAttribute('title');
            content.querySelector('.itemRight>.container>.itemContent').innerText = this.getAttribute('content');
            content.querySelector('.itemprice').innerText = this.getAttribute('price');
            content.querySelector('.quantity').innerText = this.getAttribute('quantity');
            this.appendChild(content);
        }
    }
    window.customElements.define('cart-item', CartItem);
}
var cartitem = 1;

function add(e) {
    let id = localStorage.getItem('ID');
    let gameName = e.querySelector('.title').innerText;
    e.querySelector('.quantity').innerText = Number(e.querySelector('.quantity').innerText) + 1;
    getList();
    let data = {
        id: id,
        gameName: gameName,
    }
    let params = JSON.stringify(data);
    function a(){Ajax('/api/addToCart', null, params);}
    a();
}

function reduce(e) {
    let id = localStorage.getItem('ID');
    let gameName = e.querySelector('.title').innerText;
    if(Number(e.querySelector('.quantity').innerText) > 0){
        e.querySelector('.quantity').innerText = Number(e.querySelector('.quantity').innerText) - 1;
        getList();
        let data = {
            id: id,
            gameName: gameName,
        }
        let params = JSON.stringify(data);
        function a(){Ajax('/api/cartReduce', null, params);}
        a();
    }
}