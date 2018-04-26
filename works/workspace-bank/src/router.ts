

import AComponent from "./components/router/a.vue";
import BComponent from "./components/router/b.vue";
import CComponent from "./components/router/c.vue";
export var routes = {
    routes: [
        { path: '*', component: AComponent },
        { path: '/a', component: AComponent },
        { path: '/b', component: BComponent },
        { path: '/c', component: CComponent }
    ]
}
