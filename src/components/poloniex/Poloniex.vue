<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <h4>Livro de Ordens</h4>
    <select class="select form-control" v-model="selected"  @change="loadPrice(), takeVol()">
      <option disabled value="">Please select one</option>
      <option v-for="s in lista" :value="s.sigla" :style="{ 'background-image': 'url(' + s.img + ')' }">
        {{ s.nome }}
      </option>
    </select>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4 class="text-center">Venda</h4>

          <div class="box-price">
            <li v-for="s in orderbook.asks">
              <p>{{ s[0] }}</p>
              <p>{{ s[1] }}</p>
              <p v-if="Number(s[0] * s[1]).toFixed(8) >= 15" class="red">
                {{ Number(s[0] * s[1]).toFixed(8)}}
              </p>
              <p v-else>
                {{ Number(s[0] * s[1]).toFixed(8)}}
              </p>
            </li>
          </div>

        </div>
        <div class="col-md-4">
          <h4 class="text-center">Compra</h4>
          <div class="box-price">

            <li v-for="s in orderbook.bids">
              <p>{{ s[0] }}</p>
              <p>{{ s[1] }}</p>
              <p v-if="Number(s[0] * s[1]).toFixed(8) >= 15" class="red">
                {{ Number(s[0] * s[1]).toFixed(8)}}
              </p>
              <p v-else>
                {{ Number(s[0] * s[1]).toFixed(8)}}
              </p>
            </li>

          </div>
        </div>
        <div class="col-md-4">
          <h4 class="text-center">Detalhes</h4>
          <div class="box-price">
            <h5 v-if="selected">Volume em Bitcoin: {{ volume[selected].BTC }}</h5>
            <h5 v-if="selected">Volume em {{reversedMessage}}: {{ volume[selected][reversedMessage] }}</h5>

          </div>
        </div>

        <div class="col-md-12">
          <h4 class="text-center">Detalhes</h4>
          <div class="box-price">
            <demo-grid
              :data="valor"
              :columns="gridColumns">
            </demo-grid>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Grid from '../shared/grid/Grid.vue'
export default {

  components: {
    'demo-grid': Grid
  },
  methods: {
    loadPrice: function() {
      var ord = "https://poloniex.com/public?command=returnOrderBook&currencyPair="
      var book = "&depth=500"
      this.$http.get(ord + this.selected + book)
      .then(res => res.json())
      .then(orderbook => this.orderbook = orderbook, err => console.log(err));
    },
    takeVol: function() {
      var  vol = "https://poloniex.com/public?command=return24hVolume"
      this.$http.get(vol)
      .then(res => res.json())
      .then(volume => this.volume = volume, err => console.log(err));
    }
  },

  data () {
    return {
      titulo: 'Poloniex',
      gridColumns: ['id','last','lowestAsk','highestBid','percentChange','baseVolume','quoteVolume','high24hr'],
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
      interval: '',
      volume: []
    }
  },

  computed: {
    reversedMessage: function (selected) {
      return this.selected.slice('4')
    },

},
  created() {
    this.$http.get('https://poloniex.com/public?command=returnTicker')
    .then(res => res.json())
    .then(valor => this.valor = valor, err => console.log(err));
  }
}
</script>
<style scoped>
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
.col-md-4{
  border: 1px black solid
}
li{
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.red{
  background: red;
}
.icons{
  width: 1.2em;
}
.centralizado {
  text-align: center;
}
.box-price{
  height: 55vh;
  width: auto;
  overflow-y: auto;
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
