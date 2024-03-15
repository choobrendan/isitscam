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

  let prevX=e.clientX;
  let prevY=e.clientY;
    mousedown(e) {
        window.addEventListener('mousemove',mousemove);
        window.addEventListener('mouseup',mouseup);
    }
    mousemove(e) {
        window.addEventListener('mousemove',mousemove);
        window.addEventListener('mouseup',mouseup);
    }
    mouseup(e) {
        window.addEventListener('mousemove',mousemove);
        window.addEventListener('mouseup',mouseup);
    }
  }
</script>