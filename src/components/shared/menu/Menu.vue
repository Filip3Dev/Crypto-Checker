<template>
    <nav>
      <ul>
          <li v-for="rota in rotas" class="lista">
            <router-link :to="rota.path ? rota.path : '/'">{{rota.titulo}}</router-link>
          </li>
      </ul>
    </nav>

</template>
<script>
export default {

    props: {
        rotas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
  ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  .lista a{
    text-decoration: none;
    background: #94cdff;
    color: #424242;
    border-bottom: 4px #94cdff solid;
    border-radius: 5px;
    font-size: 1.25em;
    cursor: pointer;
    padding: 0.4em 1em;
    transition: border-bottom .2s, box-shadow .8s ease;
  }
  .lista a:hover{
    border-radius: 5px;
    color: #424242;
    border-bottom: 4px #4090f3 solid;
    box-shadow: 1px 1px 3px grey;
  }
</style>
