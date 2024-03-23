<template>
  <div>
    <h1 class="title" :style="{ fontSize: fontSize + 'px' }">isit<span class="bold-title">scam</span></h1>
  </div>
</template>

<script>
export default {
  props: {
    fontSize: {
      type: Number,
      default: 32
    }
  }
}
</script>

<style>
.title{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: gray;
  font-weight: 300;
}
.bold-title{
  color:black;
  font-weight: bolder;
}
</style>