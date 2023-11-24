<template>
  <div id="slide" animated h-full w-60 pl-5 flex-column bg-neutral>
    <button bg-neutral pt-1 pl-58 pr-3 pb-2 @click="handleClick" hover:bg-light>
      x
    </button>
    <div color-dark pt-2>Project Progress Manage</div>
    <UVerticalNavigation :links="progress">
      <template #default="{ link }">
        <div color-dark class="relative text-left w-full">
          <div class="mb-2">
            {{ link.label }}
          </div>
          <UVerticalNavigation v-if="link.children" :links="link.children" />
        </div>
      </template>
    </UVerticalNavigation>
    <button cursor hover:bg-light relative text-left pa-1 w-full rd color-dark font-100> + Add Project</button>
    <div color-dark font-100>Completed Project</div>
    <div color-dark pt-5>Weekly Project</div>
    <UVerticalNavigation :links="weekly">
      <template #default="{ link }">
        <div color-dark class="relative text-left w-full">
          <div class="mb-2">
            {{ link.label }}
          </div>
          <UVerticalNavigation v-if="link.children" :links="link.children" />
        </div>
      </template>
    </UVerticalNavigation>
  </div>
</template>

<script setup lang='ts'>
import { useBooleanStore } from "../../stores/bool";
const progress = [
  {
    label: "ProjectA",
    children: [
      {
        label: "월별 진행 현황",
        to: "/navigation/vertical-navigation",
      },
      {
        label: "경비 현황",
        to: "/navigation/command-palette",
      },
    ],
  },
  {
    label: "ProjectB",
    children: [
      {
        label: "월별 진행 현황",
        to: "/navigation/vertical-navigation",
      },
      {
        label: "경비 현황",
        to: "/navigation/command-palette",
      },
    ],
  },
  {
    label: "ProjectC",
    children: [
      {
        label: "월별 진행 현황",
        to: "/navigation/vertical-navigation",
      },
      {
        label: "경비 현황",
        to: "/navigation/command-palette",
      },
    ],
  },
];
const weekly = [{
  label: "not yet",
}]
const booleanStore = useBooleanStore();
const handleClick = () => {
  booleanStore.setType();
  console.log(booleanStore.isType);

  const slide = document.getElementById("slide") as HTMLDivElement;
  if (slide) {
    if (booleanStore.isType === true) {
      slide.classList.add("animated-slide-in-left");
      slide.classList.remove("animated-slide-out-right");
    } else {
      slide.classList.remove("animated-slide-in-left");
      slide.classList.add("animated-slide-out-right");
    }
  }
};
</script>

<style scoped>
.animated-slide-in-left {
  animation-name: uneSlideInLeft;
}
.animated-slide-out-right {
  animation-name: uneSlideOutRight;
}

@keyframes uneSlideOutRight {
  0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
}

@keyframes uneSlideInLeft {
  0% {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
}
</style>