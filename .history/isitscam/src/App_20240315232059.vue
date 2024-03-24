<template>
  <div class="drawer right" ref="drawer">
    <div class="drag" @mousedown="startDragging"></div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.drawer {
  position: fixed;
  width: 400px;
  height: 100%;
  background: lightgray;
}
.drawer.right {
  right: 0;
}
.drawer.left {
  left: 0;
}
.drag {
  position: absolute;
  border: 1px solid #888;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: lightgreen;
}
.drawer.left .drag {
  left: unset;
  right: 0;
}
</style>

<script>
export default {
  mounted() {
    this.makeDraggable();
  },
  methods: {
    makeDraggable() {
      const drawer = this.$refs.drawer;
      const dragHandle = drawer.querySelector('.drag');
      
      let isDragging = false;
      let offsetX = 0;
      
      dragHandle.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - drawer.getBoundingClientRect().left;
      });
      
      document.addEventListener('mousemove', (event) => {
        if (isDragging) {
          const newX = event.clientX - offsetX;
          drawer.style.left = Math.min(Math.max(newX, 0), window.innerWidth - drawer.offsetWidth) + 'px';
        }
      });
      
      document.addEventListener('mouseup', () => {
        isDragging = false;
      });
    }
  }
};
</script>
