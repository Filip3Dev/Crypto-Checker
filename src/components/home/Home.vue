<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="s of valor">
          <p>Id: {{ s.Id }}</p> <p>Total: {{ s.Total }} </p>  <p>Quantidade: {{ s.Quantity }}</p> <p> Valor: {{ s.Price }} </p>
        </li>
      </ul>

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

      valor: [],

      filtro: ''
    }
  },

  computed: {

  },

  created() {
    // this.$http
    //   .get('https://bittrex.com/api/v1.1/public/getmarkethistory?market=BTC-LTC&count=4')
    //   .then(res => res.json())
    //   .then(valor => this.valor = valor.result, err => console.log(err));
  }
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
