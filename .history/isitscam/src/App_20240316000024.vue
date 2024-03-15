<template>

<div class="drawer right"><div class="drag"></div></div>
  
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
	right: 0px;
  bottom:0px;
}
.drawer.left {
	left: 0;
}
.drag {
	position: absolute;
	border: 1px solid #888;
	top: 50%;
	left: 0;
	width: 5px;
	height: 100px;
	background: #aaa;
}
.drawer.left .drag {
	left: unset;
	right: 0;
}


</style>

<template>

<div class="drawer right"><div class="drag"></div></div>
  
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
	right: 0px;
  bottom:0px;
}
.drawer.left {
	left: 0;
}
.drag {
	position: absolute;
	border: 1px solid #888;
	top: 50%;
	left: 0;
	width: 5px;
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
  mounted() {
    const drawer = this.$refs.drawer;
    const drag = this.$refs.drag;
    
    let isDragging = false;
    let startX;
    let startWidth;

    drag.addEventListener('mousedown', (event) => {
      isDragging = true;
      startX = event.clientX;
      startWidth = parseInt(
        document.defaultView.getComputedStyle(drawer).width,
        10
      );
    });

    document.addEventListener('mousemove', (event) => {
      if (!isDragging) return;
      const width = startWidth + event.clientX - startX;
      drawer.style.width = `${width}px`;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }
};
</script>