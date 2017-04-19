import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
import Bittrex from './components/bittrex/Bittrex.vue';
import Poloniex from './components/poloniex/Poloniex.vue';
import Pokemon from './components/pokemon/Pokemon.vue';
// adicionando a propriedade título

export const routes = [

    { path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' },
    { path: '/bittrex', component:  Bittrex, titulo: 'Bittrex' },
    { path: '/pokemon', component:  Pokemon, titulo: 'Pokemon' },
    { path: '/poloniex', component:  Poloniex, titulo: 'Poloniex' }

];
