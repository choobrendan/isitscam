<template>
    <div class="scam-bg absolute top-0 w-full h-full self-center">
        <div class=" absolute self-center w-full">
            <p class="text-bold text-3xl p-8">Downloading Viruses...</p>
      <div class="counter">{{ counterValue }}%</div>
      <div class="progressbar">
        <span class="progress" :style="{ width: progressBarWidth }"></span>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counterValue: 0,
        progressBarWidth: '0%',
        counterInterval: null
      };
    },
    mounted() {
      this.counterInit(0, 100);
    },
    methods: {
      counterInit(fValue, lValue) {
        this.counterInterval = setInterval(() => {
          this.counterValue++;
          this.progressBarWidth = `${this.counterValue}%`;
  
          if (this.counterValue >= lValue) {
            clearInterval(this.counterInterval);
          }
        }, 50);
      }
    }
  };
  </script>
  
  <style>
  .scam-bg{

    background: #333;

  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {

    color: #fff;
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .progressbar {
    position: relative;
    max-width: 500px;
    width: 500px;
    margin: 30px auto 0;
    height: 30px;
    background: #274545;
    overflow: hidden;
  }
  
  span.progress {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: #326666;
    transition: all .3s;
  }
  </style>
  