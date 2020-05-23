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