<template>

<div class="drawer right"></div>
  
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

</script>