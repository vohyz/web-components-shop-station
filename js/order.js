
function itemLoad() {
	let id = localStorage.getItem('ID');
	let data = {
		id: id
	}
	let params = JSON.stringify(data);
	Ajax('/api/getOrder', init, params);
}

function init(e) {
	e = e["errmsg"];
	console.log(e)
	let temp = document.createElement('div');
	for(let i=0;i<e.length;i++) {
		temp.innerHTML += `<order-item data='`+JSON.stringify(e[i])+`'></order-item>`;
	}
	document.querySelector(".orderContent").appendChild(temp);
}
itemLoad();

if(Orderitem!=1) {
    class OrderItem extends HTMLElement {
        constructor() {
            super();
            var templateElem = document.getElementById('OrderTemplate');
			var content = templateElem.content.cloneNode(true);
			var data =this.getAttribute('data');
			console.log(data)
			data = JSON.parse(data);
			for(let i=0;i<data.length;i++) {
				let doc = document.createElement('div');
				doc.className = 'little';
				doc.innerHTML = `<span class="gameName">`+data[i][3]+`</span><span class="x">x</span><span class="quantity">`+data[i][4]+`</span>`
				content.querySelector(".left").appendChild(doc);
			}
			content.querySelector(".time").innerHTML = data[0][2];
            this.appendChild(content);
        }
    }
    window.customElements.define('order-item', OrderItem);
}
var Orderitem = 1;