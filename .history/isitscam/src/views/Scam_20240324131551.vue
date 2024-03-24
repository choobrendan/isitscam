<template>
    <div>
      <div class="counter">{{ counterValue }}%</div>
      <div class="progressbar">
        <span class="progress" :style="{ width: progressBarWidth }"></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counterValue: 0,
        progressBarWidth: '0%'
      };
    },
    mounted() {
      this.counterInit(0, 100);
    },
    methods: {
      counterInit(fValue, lValue) {
        if (this.counterValue >= fValue && this.counterValue <= lValue) {
          this.counterValue++;
          this.progressBarWidth = this.counterValue + '%';
          setTimeout(() => {
            this.counterInit(fValue, lValue);
          }, 50);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .counter,
  .progressbar {
    color: #fff;
    font-size: 22px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    line-height: 1.6;
    height: 50px;
  }
  
  .counter {
    margin: 30px auto 0;
  }
  
  .progressbar {
    max-width: 500px;
    width: 100%;
    height: 30px;
    background: #274545;
    overflow: hidden;
  }
  
  .progress {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #326666;
    transition: all 0.3s;
  }
  </style>
  