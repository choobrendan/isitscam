<template>
  <div class="drawer right" ref="drawerRef">
    <div class="drag" @mousedown="startDrag"></div>
  </div>
</template>

<script>
export default {
  methods: {
    startDrag(event) {
      // Store the initial mouse position
      const startX = event.clientX;
      
      // Calculate the minimum and maximum positions for dragging
      const minPosition = this.$refs.drawerRef.classList.contains('left') ? -360 : window.innerWidth - 400;
      const maxPosition = this.$refs.drawerRef.classList.contains('left') ? 0 : window.innerWidth - 40;
      
      const onMouseMove = (event) => {
        // Calculate the distance moved by the mouse
        const deltaX = event.clientX - startX;
        
        // Calculate the new position of the drawer
        let newPosition = this.$refs.drawerRef.offsetLeft + deltaX;
        
        // Ensure the new position stays within the bounds
        newPosition = Math.max(minPosition, Math.min(maxPosition, newPosition));
        
        // Update the position of the drawer
        this.$refs.drawerRef.style.left = newPosition + 'px';
        
        // Update the initial mouse position for the next movement
        startX = event.clientX;
      };
      
      const onMouseUp = () => {
        // Remove the event listeners when dragging stops
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
      
      // Add event listeners for mousemove and mouseup events
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  }
};
</script>

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
