<template>
<div class="bg-gray-50 rounded-xl h-4/5 w-4/5 shadow-xl">
<p class="text-gray-900">Fill up your scam here!!!!!!!!</p>
<div class="absolute bottom-4 right-4">

<button type="button" @click="toggleComponent" class="  m-4  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>

</div>
</div>


</template>


<script>

export default {
  data() {
    return {
      showForm=this.showForm,
    };
  },
  methods: {
    
    toggleComponent() {
      
      this.showForm = !this.showForm;
      console.log(this.showForm);
    }
  }

};


</script>