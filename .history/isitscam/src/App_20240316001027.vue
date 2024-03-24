<template>
  <div class="drawer right" ref="drawer">
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
  max-width: 800px;
}
.drag {
  position: absolute;
  border: 1px solid #888;
  top: 50%;
  left: 0;
  width: 20px;
  height: 100px;
  background: #aaa;
  cursor: ew-resize; /* Change cursor style to indicate draggable */
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
    // Attach event listeners to the entire document
    document.addEventListener('mousedown', this.startDrag);
    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.endDrag);
  },
  beforeDestroy() {
    // Remove event listeners to avoid memory leaks
    document.removeEventListener('mousedown', this.startDrag);
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.endDrag);
  },
  methods: {
    startDrag(event) {
      if (event.target === this.$refs.drag || event.target.parentNode === this.$refs.drag) {
        // Check if the click occurred on the drag div or its child nodes
        this.isDragging = true;
        this.startX = event.clientX;
        this.startWidth = this.$refs.drawer.offsetWidth;
      }
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
