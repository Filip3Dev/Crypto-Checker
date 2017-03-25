<template>
  <div class="corpo">

      <meu-menu :rotas="routes"/>

      <transition name="pagina">
        <router-view transition transition-mode="out-in">

        </router-view>
      </transition>
  </div>
</template>
<script>

import { routes }  from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    'meu-menu' : Menu
  },
  data() {

    return {

      routes
    }

  }

}
</script>
<style>

  .corpo {
    font-family: "Roboto", sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>
