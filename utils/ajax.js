function Ajax(url, msg, params, path='#', fn=null) {
    var xhr = '';
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("POST", url, true);
    xhr.send(params);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                msg(JSON.parse(xhr.responseText));
                if(fn!=null)
                    fn();
                if(path!='#')
                    route.jump(path);
            }
        }
    }
}

function ajaxLoad(Elem, url, path, fn=null) {
    var xhr = '';
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                Elem.innerHTML = xhr.responseText; 
                // 这个加载js的部分必须放在接收到ajax后，否则有可能先加载js，就会找不到dom  
                var newjs = document.createElement('script');
                newjs.src = 'js' + path + '.js';
                document.querySelector("#router-view").appendChild(newjs);
                if(fn!=null)
                    fn();
            }
        }
    }
}