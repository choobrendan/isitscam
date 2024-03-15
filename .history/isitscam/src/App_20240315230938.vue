<template>

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-swipe" data-drawer-show="drawer-swipe" data-drawer-placement="right" data-drawer-edge="true" data-drawer-edge-offset="right-[60px]" aria-controls="drawer-swipe">
   Show swipeable drawer
   </button>
</div>

<!-- drawer component -->
<div id="drawer-swipe" class="fixed z-40 w-full h-full overflow-y-auto bg-white border-l border-gray-200 rounded-l-lg dark:border-gray-700 dark:bg-gray-800 transition-transform right-full top-0 translate-x-full right-[60px]" tabindex="-1" aria-labelledby="drawer-swipe-label">
   <!-- Drawer content remains the same -->
</div>

</template>