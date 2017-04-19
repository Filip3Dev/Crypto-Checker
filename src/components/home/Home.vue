<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>

    <my-list />

    <div class="row">
      <div v-if="valor" class="col-md-4" v-for="s in valor.videos">
        <p>{{s.video.title}}</p>
        <my-video :url="s.video.embed_url" />
      </div>
    </div>
    <a href="#" @click="chamaImagem()" class="btn">Teste</a>

  </div>
</template>

<script>
import Video from '../shared/video/Video.vue'
import List from '../shared/pornlista/List.vue'
export default {
  components: {

    'my-video': Video,
    'my-list': List
  },
  methods: {

  },

  data () {
    return {
      titulo: 'RedApi',

      valor: [],

      filtro: '',

    }
  },

  computed: {

  },

  created() {
    // this.$http
    //   .get('https://bittrex.com/api/v1.1/public/getmarkethistory?market=BTC-LTC&count=4')
    //   .then(res => res.json())
    //   .then(valor => this.valor = valor.result, err => console.log(err));
  },
  methods: {
    chamaImagem: function() {
      var root = "https://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search=hard&thumbsize=medium"
      this.$http.get(root)
      .then(res => res.json())
      .then(valor => this.valor = valor, err => console.log(err));
    }
  },
}
</script>
<style>

  .centralizado {
    text-align: center;
  }
  *{
    font-family: "Roboto", sans-serif;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: flex;
    justify-content: space-around;
  }

  .imagem-responsiva {
    width: 100%;
  }

  .filtro {
    display: block;
    width: 20%;
  }
</style>
