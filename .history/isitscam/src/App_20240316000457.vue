<template>
  <div class="drawer right" ref="drawer" @mousedown="startDrag" @mousemove="drag" @mouseup="endDrag">
    <div class="drag" ref="drag"></div>
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
}
.drawer.right {
  right: -380px;
  bottom: 0px;
}
.drag {
  position: absolute;
  border: 1px solid #888;
  top: 50%;
  left: 0;
  width: 30px;
  height: 100px;
  background: #aaa;
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
      startWidth: 400
    };
  },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.clientX;
      this.startWidth = this.$refs.drawer.offsetWidth;
    },
    drag(event) {
      if (this.isDragging) {
        const newWidth = this.startWidth - (event.clientX - this.startX);
        this.$refs.drawer.style.width = newWidth + 'px';
        // If you want to limit the drawer width, you can add conditions here
      }
    },
    endDrag() {
      this.isDragging = false;
    }
  }
};
</script>
