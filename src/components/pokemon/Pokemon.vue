<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <h4>Lista de Pokemons</h4>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <ul>
            <li class="list-item" v-for="s in call.results"  @click="carrega(s.name)">{{s.name}}</li>
          </ul>
        </div>
        <div class="col-md-7">
          <ul v-if="search == ''">
              <h1>Wait</h1>
          </ul>
          <ul v-else="">
              <img :src="search.sprites.front_default" alt="">
          </ul>
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

  },

  data () {
    return {
      titulo: 'Pokemon',
      call: '',
      selected: '',
      search: []
    }
  },

  computed: {

},
  created() {
    this.$http.get('http://pokeapi.co/api/v2/pokemon/?limit=811')
    .then(res => res.json())
    .then(call => this.call = call, err => console.log(err));
  },
  methods: {
    carrega: function(nome) {
      const poke = "http://pokeapi.co/api/v2/pokemon/"
      this.$http.get(poke + nome)
      .then(res => res.json())
      .then(search => this.search = search, err => console.log(err));
    }
  },
}
</script>
<style scoped>
.center {
  text-align: center;
}
.list-item{
  list-style: none;
  font-size: 20px;
  text-transform: capitalize;
  border-left: 7px #94cdff solid;
  padding-left: 10px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  transition: all .5s ease
}
.list-item:hover{
  border-left: 7px #64aae6 solid;
}

</style>
