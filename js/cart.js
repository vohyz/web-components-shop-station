function logout() {
	localStorage.removeItem('ID');
	route.jump('/home');
}

function itemLoad() {
	ajaxLoad(itemTEMP, '/file/cartItem.html', '/cartItem', ()=>{
        let id = localStorage.getItem('ID');
        let data = {
            id: id
        }
        let params = JSON.stringify(data);
		Ajax('/api/getCart', init, params);
	});
}

function init(e) {
	e = e["errmsg"];
	for(let i=0;i<e.length;i++) {
		let temp = document.createElement('div');
		temp.innerHTML = `<cart-item image="`+e[i][8]+`" title="`+e[i][2]+`" price="`+e[i][6]+`" content="`+e[i][5]+`" quantity="`+e[i][3]+`"></my-item>`;
		document.querySelector(".cartContent").appendChild(temp);
	}
	getList();
}
var itemTEMP = document.querySelector("#cartItemTemplate");
if(itemTEMP){}
else {
	itemTEMP = document.createElement("template");
	itemTEMP.id = 'cartItemTemplate';
	document.querySelector("#router-view").appendChild(itemTEMP);
	itemLoad();
}

function getList() {
	var items = document.querySelectorAll(".priceQuantity");
	let count = 0;
	document.querySelector('.cartPrice').innerHTML = '';
	for(let i=0;i<items.length;i++){
		let doc = document.createElement('div');
		let price = Number(items[i].querySelector('.itemprice').innerText);
		let quantity = Number(items[i].querySelector('.quantity').innerText);
		doc.innerHTML = `<list-item price="`+price+`" quantity="`+quantity+`"></list-item>`;
		document.querySelector('.cartPrice').appendChild(doc);
		count += price * quantity;
	}
	document.querySelector(".all").innerHTML = count;
}

function putOrder() {
	let id = localStorage.getItem('ID');
    let data = {
        id: id,
    }
    let params = JSON.stringify(data);
    function a(){Ajax('/api/putOrder', showMessage, params);}
    a();
}

if(listitem!=1) {
    class ListItem extends HTMLElement {
        constructor() {
            super();
            var templateElem = document.getElementById('listTemplate');
			var content = templateElem.content.cloneNode(true);
			content.querySelector('.itemprice').innerText = this.getAttribute('price');
            content.querySelector('.quantity').innerText = this.getAttribute('quantity');
            this.appendChild(content);
        }
    }
    window.customElements.define('list-item', ListItem);
}
var listitem = 1;