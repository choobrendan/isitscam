<template>
  <!-- Form dialog -->
  <div class="flex h-full w-full absolute top-0 left-0 justify-center items-center  z-20"v-if="showForm">
    <ScamForm class="absolute z-20"/>
    <div class=" relative w-4/5 h-4/5">
      <div class="  absolute z-50 bottom-4 right-4">
      <button type="button" @click="toggleComponent" class=" m-4  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button></div>
    </div>
  </div>
  <div class="flex flex-row">
    <div class="flex flex-row items-center justify-center">
      <!-- Click to Upload -->
      <div class="flex items-center justify-center w-full ">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-80 h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-200 dark:bg-gray-50 hover:bg-gray-100 dark:border-gray-200 dark:hover:border-gray-100 dark:hover:bg-gray-100">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div> 
      <div >
        <p class="text-gray-500 text-2xl mx-4">or</p>
      </div>
      <!-- Write thoughts here -->
      <div class="flex items-center justify-center w-full h-full">
        <textarea id="message" rows="4" class="resize-none block p-2.5 w-80 h-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
      </div>
    </div>
    
    <!-- Drawer -->
    <div class="drawer right" ref="drawer">
      <router-link to="/report" class="border-none absolute top-0 left-3 py-4 px-4 rounded">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/>
        </svg>
      </router-link>
      <h1 class="mx-12 mt-8">Report</h1>
      <!-- Data populate -->
      <!-- lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 -->
      <div class="grid grid-col ">
        <scam-card v-for="i in 7" :key="i" />
      </div>  
      <div class="wrap">
          <div class="drag" ref="drag">
            <svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(90)" stroke="#000000" stroke-width="0.034">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M17 6v1h-17v-1h17zM0 10h17v-1h-17v1z" fill="#000000"></path> 
              </g>
            </svg>
          </div>
        </div>
        <!-- Add button -->
  <div class="button-add">
    <button @click="toggleComponent" type="button" class=" fixed bottom-6 z-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-4 text-center  items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M5 12h14m-7 7V5"/>
      </svg>
      <span class="sr-only">Icon description</span>
    </button>
  </div>
    </div>
  </div>

  <div>
    <button type="button" class="  m-4 w-4/6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600   dark:focus:ring-gray-700">Submit</button>
  </div>
  <div class="text-left"> 
    <p class="text-gray-900  text-lg" >Result</p>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div class="bg-blue-600 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 69%"> 69%</div>
    </div>
    <p class="text-gray-900">Sounds like the stealing boyfriend scam</p>
    <p class="text-gray-900  text-lg" >Analytics</p>
  </div>
  
  <div class="">

<img  class=" arrow h-16 absolute right-10"src="../assets/arrow.png">
<div class=" arrow-text right-28 text-gray-900">
<p class="">  Open here for</p><p> more stuff!</p></div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.drawer {
  position: fixed;
  z-index: 10;
  min-width: 36px;
  width: 36px;
  height: 100%;
  background: lightgray;
  resize: horizontal;
  overflow: auto;
  box-shadow: 0px 0px 50px grey;
}
.wrap{
  position: fixed;
  height: 100%;
  bottom: 0.0%;

 
}
.drawer.right {
  right: 0px;
  bottom: 0px;
  min-width: 20px;
  width: 36px;
  max-width: 560px;
  overflow-x: hidden;

}
.drag {
  position: sticky;
  border: 1px solid #888;
  left: 0;
  top:0;
  width: 20px;
  height: 100%;
  background: #aaa;
  cursor: ew-resize; 
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.drawer.left .drag {
  left: unset;
  right: 0;
}
.button-add{
position: fixed;

margin: 400px;
}
.arrow{

position: absolute;
  top:calc(50% - 65px)
}
.arrow-text{

position: absolute;
  top:calc(50% - 32px)
}
</style>

<script>
import ScamForm from '../components/ScamForm.vue'

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
  mounted() {
    document.addEventListener('mousedown', this.startDrag);
    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.endDrag);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.startDrag);
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.endDrag);
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
