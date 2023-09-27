<template>
  <div flex flex-col justify-center items-center>
    <h1>어떤 게시글 목록</h1>
    <table>
      <thead bg-purple-5>
        <th rd w-30 text-center v-for="(key, index) in Object.keys(postdata[0])" :key="index">
          {{ key }}
        </th>
      </thead>
      <tbody bg-purple-2>
        <tr text-center v-for="(post, index) in postdata" :key="index">
          <td>{{ post.num }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.author }}</td>
          <td>{{ post.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
const postdata = [
  {
    num: 1,
    title: "제목입니다.",
    author: "김김김",
    date: "2023.09.27",
  },
  {
    num: 2,
    title: "안녕하세요.",
    author: "박박박",
    date: "2023.09.27",
  },
  {
    num: 3,
    title: "굿애프터눈.",
    author: "이이이",
    date: "2023.09.27",
  },
  {
    num: 4,
    title: "코카콜라맛있다.",
    author: "김이박",
    date: "2023.09.27",
  },
];

export default {
  data() {
    return {
      postdata: postdata,
    };
  },};
</script>