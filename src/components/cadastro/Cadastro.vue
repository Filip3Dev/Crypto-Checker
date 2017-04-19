<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <br>
    <input v-model.lazy="key" placeholder="Key" autocomplete="on">
    <input v-model.lazy="secret" placeholder="Secret" autocomplete="on">
    <button type="button" name="button" @click="login">Teste</button>


      <p>Você está logado como: {{info}}<span id="usename"></span></p>

  </div>
</template>

<script>

export default {
  data () {
    return {
      info: [],
      key: '',
      secret: '',
    }
  },
  created() {

  },
  methods: {
    login: function() {
      const key = this.key
      const secret = this.secret

      if(key !== ''){
        var coinbase = require('coinbase');
        var client   = new coinbase.Client({'apiKey': key, 'apiSecret': secret});

        client.getCurrentUser(function(err, data) {
          const user = data
          document.getElementById("usename").textContent = (user.name);
        });
      }else{
        console.log("Hello")
      }
    }
  },
}

</script>
<style scoped>
    .centralizado {
        text-align: center;
    }
    *{
      font-family: "Roboto", sans-serif;
    }
</style>
