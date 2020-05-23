var carousel = document.getElementById('carousel'),
   // push All Element in Array  
    arr = carousel.querySelectorAll('.item'),
	dot = carousel.querySelectorAll('.indicators .dot'),
    current = 0,
    img = carousel.querySelector('.item > img'),
    item = carousel.querySelector('.item ');
	
	window.onresize = function(){
   	carousel.style.height = img.height + 'px';
   	item.style.height = img.height + 'px';
   }



// Display First Element in Array 
arr[current].style.left = 0;


// Function For Get Previous Element in Array 
function prevSlide(btn){
	btn.disabled = true;
	c(0);
	var prev;
	if(current === 0){
		prev = arr.length - 1
	}else{
		prev = current - 1;
	}
	
	// setup prev and current for animation
	arr[prev].style.left = '-100%';
	arr[current].style.left = 0;
	// add class
	arr[prev].setAttribute("class", "item slideInLeft");
	arr[current].setAttribute("class", "item slideOutRight");

	// Update Current Position 
	current = prev ;
	
}

// Function For Get Next Element in Array
function nextSlide(btn){
	if(btn)
		btn.disabled = true;
	c(1);
	var next;
	if(current === (arr.length -1) ){
		next = 0
	}else{
		next = current + 1 ;
	}
	
	// setup next and current for animation
	arr[next].style.left = '100%';
	arr[current].style.left = 0;
	// add class
	arr[next].setAttribute("class", "item slideInRight");
	arr[current].setAttribute("class", "item slideOutLeft");
	
	// Update Current Position 
	current = next ;
}

function c(i){
	setTimeout("b("+i+")", 750);
}

function b(i){
	if (i == 0) {
		var btn = document.querySelector(".prev");
	} else {
		var btn = document.querySelector(".next");
	}
	btn.disabled = false;
}

function itemLoad() {
	ajaxLoad(itemTEMP, '/file/item.html', '/item', ()=>{
		Ajax('/api/getGames', init);
	});
}

function init(e) {
	e = e["errmsg"];
	for(let i=0;i<e.length;i++) {
		let temp = document.createElement('div');
		temp.innerHTML = `<my-item image="`+e[i][4]+`" title="`+e[i][0]+`" price="`+e[i][2]+`" content="`+e[i][1]+`"></my-item>`;
		if(i%4==0) {
			temp.querySelector(".host").classList.add('rr');
		} else if(i%4==3) {
			temp.querySelector(".host").classList.add('ll');
		} else if(i%4==1){
			temp.querySelector(".host").classList.add('rl');
		} else if(i%4==2){
			temp.querySelector(".host").classList.add('lr');
		}
		document.querySelector(".homebottom>.bigcontent").appendChild(temp);
	}
}
var itemTEMP = document.querySelector("#itemTemplate");
if(itemTEMP){}
else {
	itemTEMP = document.createElement("template");
	itemTEMP.id = 'itemTemplate';
	document.querySelector("#router-view").appendChild(itemTEMP);
	itemLoad();
}