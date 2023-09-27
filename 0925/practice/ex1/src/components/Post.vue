<template>
    <main>
        <h1>게시글 목록</h1>
        <section>
            <table>
                <thead>
                    <th>
                        <td>id</td>
                        <td>제목</td>
                        <td>글쓴이</td>
                        <td>작성 시각</td>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>안녕</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section>

        </section>
    </main>
</template>
<script>
export default {
  name: 'postlist',
  data () {
    return {
      id: '',
      title: '',
      userid: '',
      data: ''
    }
  }
  // methods: {
  //     postlist() {

  // }
//   }
}
</script>
<style lang="">

</style>
