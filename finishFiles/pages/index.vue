<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <AppPost
        v-for="post of posts"
        :key="post._id"
        :post="post"
      />
    </el-col>
  </el-row>
</template>

<script>
  import AppPost from '@/components/main/Post'

  export default {
    name: 'index',
    head: {
      title: `Главная | ${process.env.appName}`
    },
    async asyncData({store}) {
      const posts = await store.dispatch('post/fetch')
      return {posts}
    },
    components: {AppPost}
  }
</script>

<style scoped>

</style>
