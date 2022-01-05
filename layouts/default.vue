<template>
  <el-container>
    <el-header>
      <AppNavigation/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>

<script>
  import AppNavigation from '@/components/main/Navigation'

  export default {
    name: 'default',
    components: {AppNavigation}
  }
</script>

<style scoped>

</style>
