<template>
  <div flex flex-col justify-center items-center>
    <h1>어떤 게시글 목록</h1>
    <UInput v-model="q" placeholder="Filter people..." />
    <UTable
      :rows="filteredRows"
    />
    <div absolute bottom-40>
      <Pagination />
    </div>
  </div>
</template>
<script>
import Pagination from "../../components/pagination/Pagination.vue";
export default {
  setup() {
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
    ];

    return {
      // page,
      // items,
      filteredRows,
      Pagination,
    };
  },
};
</script>