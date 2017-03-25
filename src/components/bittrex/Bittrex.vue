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
