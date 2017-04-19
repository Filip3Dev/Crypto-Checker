<template>
<div class="">

  <select class="select form-control" v-model="chosen"  @change="loadList(chosen)">
    <option disabled value="">Please select one</option>
    <option v-for="i in list.categories" :value="i.category">
      {{ i.category }}
    </option>
  </select>
  <div class="row" v-if="newlist != ''">
    <div class="col-md-12" v-for="x in newlist.videos">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="x.video.embed_url"></iframe>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
    data (){
      return{
        list: [],
        chosen: '',
        newlist: [],
      }
    },
    created() {
      this.$http.get('https://api.redtube.com/?data=redtube.Categories.getCategoriesList&output=json')
      .then(res => res.json())
      .then(list => this.list = list, err => console.log(err));
    },
    methods: {
      loadList: function() {
        var url = "https://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search=hard&category="
        // var end = "&thumbsize=all"
        console.log(url + this.chosen);
        this.$http.get(url + this.chosen)
        .then(res => res.json())
        .then(newlist => this.newlist = newlist, err => console.log(err));
      },
    }
}

</script>

<style scoped>
    .embed-responsive{
      width: auto;
      margin: 3%;
      box-sizing: border-box;
    }
</style>
