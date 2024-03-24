<template>
    <navbar />
    <div class="flex align-middle justify-center">
  <div class="container mt-8">
    <!-- <router-link to="/home" class="border-none font-medium text-sm ml-0.5 mb-2 rounded">
      << Back
    </router-link> -->
    <h1>isitScam Discovery</h1>
    <p>
      Be informed. Share your experience. Help others avoid scams like
      <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </p>

    <!-- Search Bar -->
    <form class="w-full mx-auto my-4">
      <div class="flex gap-2">
        <div class="relative ml-2">
          <button
            class="block px-8 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>Filter</span>
          </button>
          <!-- <div class="absolute left-0 w-64 mt-2 py-2 bg-white border rounded shadow-xl">
            <a href="#"
              class="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Option
              1</a>
            <a href="#"
              class="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Option
              2</a>
            <a href="#"
              class="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Option
              3</a>
          </div> -->
        </div>
        <div class="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search for scams by keyword, phone numbers, and more ..."
            required
          />
          <button
            type="submit"
            class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>

    <div
      class="grid grid-col lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4"
    >
      <div class="grid gap-4">
        <scam-card
          v-for="(item, index) in scamData.filter((_, i) => i % 3 === 0)"
          :key="index"
          :count="item.count"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :chips="item.chips"
          @update:count="count = $event"
          @whatsappClicked="handleWhatsappClick"
          @emailClicked="handleEmailClick"
        />
      </div>
      <div class="grid gap-4">
        <scam-card
          v-for="(item, index) in scamData.filter((_, i) => i % 3 === 1)"
          :key="index"
          :count="item.count"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :chips="item.chips"
          @update:count="count = $event"
          @whatsappClicked="handleWhatsappClick"
          @emailClicked="handleEmailClick"
        />
      </div>
      <div class="grid gap-4">
        <scam-card
          v-for="(item, index) in scamData.filter((_, i) => i % 3 === 2)"
          :key="index"
          :count="item.count"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :chips="item.chips"
          @update:count="count = $event"
          @whatsappClicked="handleWhatsappClick"
          @emailClicked="handleEmailClick"
        />
      </div>
    </div>

    <!-- <fwb-tabs v-model="activeTab" variant="pills" class="p-2">
      <fwb-tab name="all" title="All">
        <div class="grid grid-col lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
          <scam-card v-for="i in 7" :key="i" />
        </div>
      </fwb-tab>
      <fwb-tab name="second" title="Second">
        <div class="min-h-screen">
          Lorem ipsum second...
        </div>
      </fwb-tab>
      <fwb-tab name="third" title="Third">
        <div class="min-h-screen">
          Lorem ipsum second...
        </div>
      </fwb-tab>
      <fwb-tab name="fourth" title="Fourth">
        <div class="min-h-screen">
          Lorem ipsum second...
        </div>
      </fwb-tab>
    </fwb-tabs> -->
    <fwb-button @click="toggleComponent" class="fixed right-6 bottom-6 z-2">
      Add a post
    </fwb-button>
    <ScamForm />
  </div>
  </div>
  <div
    class="flex h-full w-full top-0 left-0 absolute justify-center align-middle"
    v-if="whatsappClicked"
  >
    <div
      class="flex flex-row h-[90%] w-[840px] justify-center align-middle items-center translate-y-[6%] flex-wrap z-20 rounded-3xl"
      style="background-color: #eae6df"
      v-if="whatsappClicked"
    >
      <whatsapp-game @whatsappClicked="handleWhatsappClick" />
    </div>
  </div>
  <div
    class="flex h-full w-full top-0 left-0 absolute justify-center align-middle"
    v-if="emailClicked"
  >
    <div
      class="flex flex-col h-4/5 w-3/5 justify-center align-middle items-center translate-y-[14%] flex-wrap z-20 rounded-3xl"
      style="background-color: #eae6df"
      v-if="emailClicked"
    >
      <email-game @emailClicked="handleEmailClick" />
    </div>
  </div>
  <ScamForm :showForm="showForm" :toggleComponent="toggleComponent" />
</template>
<script setup>
import { ref } from "vue";
import { FwbButton } from "flowbite-vue";
import { FwbTab, FwbTabs } from "flowbite-vue";

const activeTab = ref("first");

const isShowModal = ref(false);

function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}
</script>

<script>
import ScamForm from "../components/ScamForm.vue";
import scamData from "../provider/ScamReportData.json";
import EmailGame from "../components/EmailGame.vue";
import WhatsAppGame from "../components/WhatsAppGame.vue";
export default {
  name: "Report",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "Phishing Scams",
        "Identity Theft",
        "Investment Scams",
        "Romance Scams",
        "Employment Scams",
        "Prize Scams",
      ],
      typingSpeed: 120,
      erasingSpeed: 40,
      newTextDelay: 2800,
      displayTextArrayIndex: 0,
      charIndex: 0,
      showForm: false,
      whatsappClicked: false,
      emailClicked: false,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  components: {
    WhatsAppGame,
    ScamForm,
    EmailGame,
  },
  methods: {
    handleWhatsappClick(value) {
      console.log(this.whatsappClicked);
      this.whatsappClicked = value;
      console.log(this.whatsappClicked);
    },
    handleEmailClick(value) {
      this.emailClicked = value;
      console.log(this.emailClicked);
    },
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    toggleComponent() {
      this.showForm = !this.showForm;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

h1 {
  font-size: 3rem;
  color: #000000;
  margin-bottom: 8px;
}

p {
  font-size: 1rem;
  font-weight: normal;

  span.typed-text {
    color: #530000;
    font-weight: bold;
  }
}

.blinking-cursor {
  font-size: 1rem;
  color: #002b56;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #002b56;
  }
}

@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #002b56;
  }
}

@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #002b56;
  }
}

@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #002b56;
  }
}

@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #002b56;
  }
}

/* TODO */
/* Initially hide the dropdown */
#dropdown {
  display: none;
}

/* Position the dropdown button relative to its normal position */
#dropdown-button {
  position: relative;
}

/* Show the dropdown when the button is hovered over */
#dropdown-button:hover + #dropdown {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
}
</style>
