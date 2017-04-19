<template>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="url"></iframe>
    </div>
</template>

<script>

export default {
    props: ['url']
}

</script>

<style scoped>
    .embed-responsive{
      width: auto;
      margin: 3%;
      box-sizing: border-box;
    }
</style>
