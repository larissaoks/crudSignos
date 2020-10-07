import Vue from 'vue';
import VueRouter from 'vue-router';
import ListaSignos from './components/ListaSignos'
import DetailSigno from './components/DetailSigno'
import AddSigno from './components/AddSigno'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'lista',
            component: ListaSignos
        },
        {
            path: '/signos/:id',
            name: 'signo-details',
            component: DetailSigno
          
        },
        {
            path: '/add',
            name: 'signo-add',
            component: AddSigno
        
        },
    ]
});
