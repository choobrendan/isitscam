<template>
  <div class="flex flex-row">


 
<div class="flex flex-row items-center justify-center">
  <router-link to-main></router-link>
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
<div class="flex items-center justify-center w-full h-full">
<textarea id="message" rows="4" class="resize-none block p-2.5 w-80 h-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
</div>
</div>

<div class="drawer right" ref="drawer">
  <div style="width: 100%;"><a href="#" class=" mx-12 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a></div>

    <div class="drag" ref="drag"></div>
  </div>

</div>

  
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.drawer {
  position: fixed;
  width: 400px;
  height: 100%;
  background: lightgray;
  resize: horizontal;
  overflow: auto;
  box-shadow: 0px 0px 50px grey;
  
}
.drawer.right {
  right: -380px;
  bottom: 0px;
  max-width: 854px;
  min-width: 400px;
}
.drag {
  position: sticky;
  border: 1px solid #888;
  top: 50%;
  left: 0;
  width: 20px;
  height: 100px;
  background: #aaa;
  cursor: ew-resize; 
  
}
.drawer.left .drag {
  left: unset;
  right: 0;
}
</style>

<script>
export default {
  data() {
    return {
      isDragging: false,
      startX: 0,
      startWidth: 0
    };
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
    }
  }
};
</script>
