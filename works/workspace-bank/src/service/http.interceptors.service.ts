import Vue from "vue";
import vueResource from 'vue-resource';
Vue.use(vueResource);

Vue['http'].interceptors.push((request, next) => {
    next((response) => {
        /* 页面只处理code="000000" 时的情况， 其它都分发到请求的error方法中 */
        if (response.ok) {
            if (response.body.code === '666666') {
                response.body.ok = false;
                alert('登陆超时,请重新登陆！');
            } else if (response.body.code === '999999') {
                response.body.ok = false;
                alert(response.body.message);
            }
            else if (response.body.code === '000000') {
                response.body.ok = response.ok;
            }
            return response.body;
        } else {
            alert('网路异常，请求数据失败！');
            return response;
        }
    })
})
