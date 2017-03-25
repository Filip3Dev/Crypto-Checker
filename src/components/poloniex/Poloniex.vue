<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>
    <h4>Livro de Ordens</h4>
    <select class="select form-control" v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="s in lista" :value="s.sigla">
        {{ s.nome }}
        <img :src=" s.img " alt="">
      </option>
    </select>
    <!-- <h5> {{selected}}</h5> -->
    <a href="#" class="btn btn btn-primary" @click="loadPrice()">Show</a>
    <div class="container">
    <div class="row">
    <div class="col-md-6">
      <h4 class="text-center">Venda</h4>
      <li v-for="(s, index) in orderbook.asks">
        <p>{{ s[0] }}</p><p>{{ s[1] }}</p> <p>{{ s[0] * s[1] }}</p>
      </li>
    </div>
    <div class="col-md-6">
      <h4 class="text-center">Compra</h4>
      <li v-for="(s, index) in orderbook.bids">
        <p>{{ s[0] }}</p><p>{{ s[1] }}</p> <p>{{ s[0] * s[1] }}</p>
      </li>
    </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {

  components: {

  },
  methods: {
    loadPrice: function() {
      var x = "https://poloniex.com/public?command=returnOrderBook&currencyPair="
      var y = "&depth=200"
      this.$http.get(x + this.selected + y)
      .then(res => res.json())
      .then(orderbook => this.orderbook = orderbook, err => console.log(err));
    }
  },

  data () {
    return {
      titulo: 'Poloniex',
      selected: '',
      orderbook: [],
      lista: [
        { sigla: 'BTC_BURST', nome: 'Burst', img: 'https://coinmarketcap.com/static/img/coins/16x16/burst.png'},
        { sigla: 'BTC_DASH', nome: 'Dash', img: 'https://coinmarketcap.com/static/img/coins/16x16/dash.png'},
        { sigla: 'BTC_GAME', nome: 'Game', img: 'https://coinmarketcap.com/static/img/coins/16x16/gamecoin.png'},
        { sigla: 'BTC_MAID', nome: 'Maid', img: 'https://coinmarketcap.com/static/img/coins/16x16/maidsafecoin.png'},
        { sigla: 'BTC_LTC', nome: 'Litecoin', img: 'https://coinmarketcap.com/static/img/coins/16x16/litecoin.png'},
        { sigla: 'BTC_NAV', nome: 'Nav', img: 'https://coinmarketcap.com/static/img/coins/16x16/nav-coin.png'},
        { sigla: 'BTC_NAUT', nome: 'Nautiluscoin', img: 'https://coinmarketcap.com/static/img/coins/16x16/nautiluscoin.png'},
        { sigla: 'BTC_NEOS', nome: 'Neoscoin', img: 'https://coinmarketcap.com/static/img/coins/16x16/neoscoin.png'},
        { sigla: 'BTC_NXT', nome: 'NXT', img: 'https://coinmarketcap.com/static/img/coins/16x16/nxt.png'},
        { sigla: 'BTC_POT', nome: 'Potcoin', img: 'https://coinmarketcap.com/static/img/coins/16x16/potcoin.png'},
        { sigla: 'BTC_SJCX', nome: 'Storjcoin X ', img: 'https://coinmarketcap.com/static/img/coins/16x16/storjcoin-x.png'},
        { sigla: 'BTC_XVC', nome: 'Vcash', img: 'https://coinmarketcap.com/static/img/coins/16x16/vcash.png'},
        { sigla: 'BTC_XEM', nome: 'NEM', img: 'https://coinmarketcap.com/static/img/coins/16x16/nem.png'},
        { sigla: 'BTC_XMR', nome: 'Monero', img: 'https://coinmarketcap.com/static/img/coins/16x16/monero.png'},
        { sigla: 'BTC_ETH', nome: 'Ethereum', img: 'https://coinmarketcap.com/static/img/coins/16x16/ethereum.png'},
        { sigla: 'BTC_FCT', nome: 'Factom', img: 'https://coinmarketcap.com/static/img/coins/16x16/factom.png'},
        { sigla: 'BTC_RADS', nome: 'Radium', img: 'https://coinmarketcap.com/static/img/coins/16x16/radium.png'},
        { sigla: 'BTC_AMP', nome: 'Synereo', img: 'https://coinmarketcap.com/static/img/coins/16x16/synereo.png'},
        { sigla: 'BTC_DCR', nome: 'Decred', img: 'https://coinmarketcap.com/static/img/coins/16x16/decred.png'},
        { sigla: 'BTC_LSK', nome: 'Lisk', img: 'https://coinmarketcap.com/static/img/coins/16x16/lisk.png'},
        { sigla: 'BTC_STEEM', nome: 'Steem', img: 'https://coinmarketcap.com/static/img/coins/16x16/steem.png'},
        { sigla: 'BTC_ETC', nome: 'Ethereum Classic', img: 'https://coinmarketcap.com/static/img/coins/16x16/ethereum-classic.png'},
        { sigla: 'BTC_ARDR', nome: 'Ardor', img: 'https://coinmarketcap.com/static/img/coins/16x16/ardor.png'},
        { sigla: 'BTC_ZEC', nome: 'Zcash', img: 'https://coinmarketcap.com/static/img/coins/16x16/zcash.png'},
        { sigla: 'BTC_XRP', nome: 'Ripple', img: 'https://coinmarketcap.com/static/img/coins/16x16/ripple.png'},

      ],
      valor: [],

      filtro: '',
      interval: ''
    }
  },

  computed: {

  },

  created() {
    this.$http.get('https://poloniex.com/public?command=returnTicker')
    .then(res => res.json())
    .then(valor => this.valor = valor, err => console.log(err));
  }
}
</script>
<style >
.select{
  width: 10em;
  height: 2em;
  font-size: 1.1em;
  background: #94cdff;
  border-radius: 5%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  margin: 2px;
  cursor: pointer;
}
.col-md-6{
  border: 1px black solid
}
li{
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.icons{
  width: 1.2em;
}
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
  flex-direction: column;
}

.imagem-responsiva {
  width: 100%;
}

.filtro {
  display: block;
  width: 20%;
}
</style>
