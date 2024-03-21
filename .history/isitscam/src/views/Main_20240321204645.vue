<template>
    <a href="/">
  <logo />
</a>
  <div >
<div class="flex flex-row gap-6">


<div>
  <div class="flex flex-col chat-container">
    <div class="flex">
      <div class="px-10 w-full">
        <div class="talk-bubble title tri-right round btm-left">
          <h1 class="title">isit<span class="bold-title">scam</span></h1>
        </div>
        <div class="talk-bubble left tri-right round btm-left">
          <div class="talktext">
            <p>Your IRS tax refund is pending acceptance. Must accept within 24 hours: 
              <a>http://suslink.com</a>
            </p>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <div class="talk-bubble right tri-right round btm-right">
            <div class="talktext">
              <p>This is sus... 🤔</p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <div class="talk-bubble right tri-right round btm-right">
            <div class="talktext">
              <p>🔍 Help me find out if this is a scam</p>
            </div>
          </div>
        </div>
        <a href="/home" class="text-left">
          <button type="button" class="group my-6 w-full text-left text-gray-600 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 ml-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            <div class="flex flex-row justify-between text-middle">
              <div class="flex items-center pl-1">
                Hey isitscam, is it a SCAM ??!?!?
              </div>
              <div>
                <svg class="w-6 h-6 pb-1 text-gray-800 group-hover:text-white dark:text-white rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/>
                </svg>

              </div>
            </div>
          </button>
        </a>
      </div>
    </div>
  </div>
</div>
<div>
  

<div>

<p>or</p>

</div>

<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<a href="/home">
<div class=" ">
      <button type="button" @click="toggleSubmit" class=" w-full my-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
  </div> 
</a>
</div>
</div>
</div>
</template>

<style scoped>
.title{


font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 84px;
color: gray;
font-weight: 300;
}
.bold-title{

  color:black;
  font-weight: bolder;
}
p{
  font-size: small;
  color:black;
}
fwb-file-input{

min-height: 300px;
min-width: 300px;

}

/* talk bubble contents */
.talktext{
  padding: 0.5em;
	text-align: left;
  line-height: 1.5em;
}
.talktext p{
  /* remove webkit p margins */
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
}

.chat-container {
  /* margin: 10px; */
  width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.talk-bubble {
  margin: 8px;
  display: inline-block;
  position: relative;
  max-width: 340px;
  padding: 2px 8px;
}

.talk-bubble.title {
  box-shadow: rgb(32, 156, 218) 0px 2px 10px;
  margin-bottom: 30px;
  padding: 20px;
  max-width: max-content;
  background-color: rgb(255, 255, 255);
  
}

.talk-bubble.left {
  background-color: rgb(255, 255, 255);
}

.talk-bubble.right {
  background-color: rgb(186, 186, 186);
}

.round {
  border-radius: 8px;
}

.tri-right.btm-left:after,
.tri-right.btm-right:after {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  border: 22px solid transparent;
  transform: rotate(270deg);
}

.tri-right.btm-left:after {
  left: -10px;
  border-left-color: rgb(255, 255, 255);
}

.tri-right.btm-right:after {
  right: -10px;
  border-left-color: rgb(186, 186, 186);
}


</style>

<script>
export default {
  data() {
    return {
      fileName: null,
      imageData: null,
      showSubmit:false,
    };
  },
methods: {

  toggleSubmit() {
    console.log(this.showSubmit)
    this.showSubmit = !this.showSubmit;
  },
  handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.fileName = null;
        this.imageData = null;
      }
    }
}
};
</script>
