<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
        <li class="lista-fotos-item" >
          <select class="select">
            <option v-for="s of valor" :value="s.MarketName"> {{ s.MarketName }}</option>
          </select>
        </li>

    </ul>

  </div>
</template>

<script>

export default {

  components: {

  },
  methods: {

  },

  data () {
    return {
      titulo: 'Alurapic',
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

      filtro: ''
    }
  },

  computed: {

  },

  created() {
    this.ark();


  },
  methods: {

    ark: function() {

      this.$http
      .get('https://bittrex.com/api/v1.1/public/getmarketsummaries')
      .then(res => res.json())
      .then(valor => this.valor = valor.result, err => console.log(err));


    }

  }
}
</script>
<style scoped>

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
