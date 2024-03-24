<template>

<div class="m-2">
    <div class="flex flex-row">
    <p class="text-gray-900 ">Too Good to Be True:</p><div class="tooltip">More info
  <span class="tooltiptext">Tooltip text</span>
</div></div>
    <div class="w-80 bg-gray-200 rounded-full dark:bg-gray-700">
      <div class="bg-blue-600 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 69%"> 69%</div>
    </div>
  </div>

</template>

<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; 
  color:#949494;
  width: 100%;
  text-align: right;
  
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>