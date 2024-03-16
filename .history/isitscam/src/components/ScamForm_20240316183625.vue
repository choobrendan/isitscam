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
      isDragging: false,
      startX: 0,
      startWidth: 0,
      showForm: false,
    };
  },
  components: {
    ScamForm // Register your component
  },
  methods: {
    startDrag(event) {
      if (event.target === this.$refs.drag || event.target.parentNode === this.$refs.drag) {
        this.isDragging = true;
        this.startX = event.clientX;
        this.startWidth = this.$refs.drawer.offsetWidth;
      }
    },
    drag(event) {
      if (this.isDragging) {
        const newWidth = this.startWidth - (event.clientX - this.startX);
        this.$refs.drawer.style.width = newWidth + 'px';
      }
    },
    endDrag() {
      this.isDragging = false;
    },



    toggleComponent() {
      console.log("sjdohsjdg")
      this.showForm = !this.showForm;
    }
  }
};


</script>