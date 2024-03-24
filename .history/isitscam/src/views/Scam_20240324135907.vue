<template>
    <div class="scam-bg absolute top-0 w-full h-full self-center">
      <div class="self-center w-full">
        <p class="text-3xl p-8 font-semibold">Downloading Viruses...</p>
        <div class="counter">{{ counterValue }}%</div>
        <div class="progressbar">
          <span class="progress" :style="{ width: progressBarWidth }"></span>
        </div>
      </div>
      <div class="terminal p-8 ">
        <div ref="terminalContent" class="terminal-content">
          <div v-for="(line, index) in terminalLines" :key="index" class="terminal-line">{{ line }}</div>
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
        counterInterval: null,
        terminalLines: []
      };
    },
    mounted() {
      this.counterInit(0, 100);
      this.startScrolling();
    },
    destroyed() {
      clearInterval(this.counterInterval);
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
      },
      startScrolling() {
        setInterval(() => {
          const randomLine = this.generateRandomLine();
          this.terminalLines.push(randomLine);
          this.$refs.terminalContent.scrollTop = this.$refs.terminalContent.scrollHeight;
        }, 200);
      },
      generateRandomLine() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = Math.floor(Math.random() * 80) + 20;
        let randomLine = '';
        for (let i = 0; i < length; i++) {
          randomLine += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomLine;
      }
    }
  };
  </script>
  
  <style>
  .scam-bg {
    background: #333;
  }
  
  .terminal {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #000;
    color: #fff;
    font-family: monospace;
    font-size: 14px;
  }
  
  .terminal-content {
    padding: 10px;
    overflow-y: auto;
    height: 100%;
  }
  
  .terminal-line {
    white-space: nowrap;
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
  