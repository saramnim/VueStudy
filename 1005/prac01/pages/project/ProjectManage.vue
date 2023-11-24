<!-- <template>
  <div flex flex-col justify-center items-center>
    <h1>어떤 게시글 목록</h1>
    <UInput v-model="q" placeholder="Filter people..." />
    <UTable
      :rows="filteredRows"
    />
    <UBadge color="green" variant="outline" label="Badge" />
    <div absolute bottom-40>
      <Pagination />
    </div>
  </div>
</template> -->
<template>
  <div flex flex-col justify-center items-center>
    <UInput v-model="q" placeholder="Filter people..." />
    <UTable v-model="selected" :rows="filteredRows" :columns="columns2">
      <template #name-data="{ row }">
        <span
          :class="[
            selected.find((person) => person.id === row.id) &&
              'text-primary-500 dark:text-primary-400',
          ]"
          >{{ row.name }}</span
        >
      </template>
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
        
    <!-- <UBadge :items="items(row)" color="green" variant="outline" label="Badge" />
    <UBadge :items="items(row)" color="red" variant="solid" label="Delete" />
    <UBadge :items="items(row)" color="yellow" variant="subtle" label="Modi" /> -->
    
      </template>
    </UTable>

    <UPagination
      v-model="page"
      :page-count="pageCount"
      :total="project.length"
    />
  </div>
</template>
<script setup>
// import Pagination from "../../components/pagination/Pagination.vue";

const items = (row) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];
const columns2 = [
  {
    key: "자사구분",
    label: "자사구분",
  },
  {
    key: "담당업무",
    label: "담당업무",
  },
  {
    key: "성명",
    label: "성명",
  },
  {
    key: "직책",
    label: "직책",
  },
  {
    key: "등급",
    label: "등급",
  },
  {
    key: "월단가",
    label: "월단가",
  },
  {
    key: "예상MM",
    label: "예상MM",
  },{
  key: 'actions'
}
];
const project = [
  {
    자사구분: "자사",
    담당업무: "PM",
    성명: "김김김",
    직책: "팀장",
    등급: "고급",
    월단가: 110,
    예상MM: 300,
  },
  {
    자사구분: "자사",
    담당업무: "개발",
    성명: "박박박",
    직책: "프로",
    등급: "중급",
    월단가: 110,
    예상MM: 300,
  },
  {
    자사구분: "자사",
    담당업무: "개발",
    성명: "이이이",
    직책: "프로",
    등급: "초급",
    월단가: 110,
    예상MM: 300,
  },
  {
    자사구분: "자사",
    담당업무: "개발",
    성명: "김이박",
    직책: "프로",
    등급: "초급",
    월단가: 110,
    예상MM: 300,
  },
  {
    자사구분: "자사",
    담당업무: "개발",
    성명: "김이박",
    직책: "프로",
    등급: "초급",
    월단가: 110,
    예상MM: 300,
  },
  {
    자사구분: "자사",
    담당업무: "개발",
    성명: "김이박",
    직책: "프로",
    등급: "초급",
    월단가: 110,
    예상MM: 300,
  },
  {
    자사구분: "자사",
    담당업무: "개발",
    성명: "김이박",
    직책: "프로",
    등급: "초급",
    월단가: 110,
    예상MM: 300,
  },
  {
    자사구분: "자사",
    담당업무: "개발",
    성명: "김이박",
    직책: "프로",
    등급: "초급",
    월단가: 110,
    예상MM: 300,
  },
  {
    자사구분: "자사",
    담당업무: "개발",
    성명: "김이박",
    직책: "프로",
    등급: "초급",
    월단가: 110,
    예상MM: 300,
  },
];
const page = ref(1)
const pageCount = 5
const rows = computed(() => {
  return project.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
const selected = ref([project[1]]);
const q = ref("");
const filteredRows = computed(() => {
  if (!q.value) {
    return project;
  }
  return project.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
});
</script>