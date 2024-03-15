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
  const el = document.querySelector(".item");

let isResizing = false;

el.addEventListener("mousedown", mousedown);

function mousedown(e) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let prevX = e.clientX;
  let prevY = e.clientY;

  function mousemove(e) {
    if (!isResizing) {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;

      const rect = el.getBoundingClientRect();

      el.style.left = rect.left - newX + "px";
      el.style.top = rect.top - newY + "px";

      prevX = e.clientX;
      prevY = e.clientY;
    }
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

const resizers = document.querySelectorAll(".drag");
let currentResizer;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
      var rect = el.getBoundingClientRect();

      if (currentResizer.classList.contains("se")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains("sw")) {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      } else if (currentResizer.classList.contains("ne")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
      } else {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}
  }
</script>