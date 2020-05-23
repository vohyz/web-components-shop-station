class Route {
    constructor(parameters) {
        this.routes = parameters.routes || [];
        this.init();
    }
    
    init() {
        document.querySelectorAll(".router").forEach((item, index) => {
            item.removeEventListener("click", function(e) {
                let event = e || window.event;
                event.preventDefault();
                window.location.hash = this.getAttribute("href");
            }, false);
        });
        document.querySelectorAll(".router").forEach((item, index) => {
            item.addEventListener("click", function(e) {
                let event = e || window.event;
                event.preventDefault();
                window.location.hash = this.getAttribute("href");
            }, false);
        });
        window.removeEventListener("hashchange", () => {
            this.routerChange();
        });
        window.addEventListener("hashchange", () => {
            this.routerChange();
        });
        this.routerChange();
    };

    routerChange() {
        let nowHash = window.location.hash;
        let index = this.routes.findIndex((item, index) => {
            return nowHash == ('#' + item.path);
        });
        if (index >= 0) {
            let routerView = document.querySelector("#router-view");
            ajaxLoad(routerView, this.routes[index].component, this.routes[index].path);
        } else {
            let defaultIndex = this.routes.findIndex((item, index) => {
                return item.path == '*';
            });
            if (defaultIndex >= 0) {
                window.location.hash = this.routes[defaultIndex].redirect;
            }
        }
    };

    jump(url) {
        window.location.hash = url;
        this.routerChange();
    }
}


var route = new Route({
    routes: [{
        path: '/home',
        component: `/file/home.html`
    }, {
        path: '/login',
        component: `/file/login.html`
    }, {
        path: '/register',
        component: '/file/register.html'
    }, {
        path: '/cart',
        component: '/file/cart.html'
    }, {
        path: '*',
        redirect: '/home'
    }]
});