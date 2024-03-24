<script setup>

</script>

<template>
  <div >
<div>

</div>
<div>
  <h1 class="title">isit<span class="bold-title">scam</span></h1>
  <p>Peepeepoopoo</p>
  <p>Poopoopeeoee</p>

</div>
<h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
</div>
<div>
  <fwb-textarea
    v-model="message"
    :rows="4"
    label="Your message"
    placeholder="Write your message..."
  />
</div>
</template>

<style scoped>
.title{


font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 84px;
color: gray;
font-weight: 300;
}
.bold-title{

  color:black;
  font-weight: bolder;
}
p{

  color:black;
}
fwb-file-input{

min-height: 300px;
min-width: 300px;

}
</style>

<script>
import { ref } from 'vue'
import { FwbTextarea } from 'flowbite-vue'

const message = ref('aaaaaaaa')
</script>