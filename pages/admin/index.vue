<template>
  <div>
    <h1>Аналитика о постам</h1>
    <app-analytics-chart
      title="Количество просмотров"
      :labels="views.labels"
      :data="views.data"
    />
    <app-analytics-chart
      title="Количество комментариев"
      :labels="comment.labels"
      :data="comment.data"
    />
  </div>
</template>

<script>
  import AppAnalyticsChart from '@/components/admin/AnalyticsChart'

  export default {
    name: 'index',
    layout: 'admin',
    middleware: ['admin-auth'],
    head: {
      title: `Аналитика | ${process.env.appName}`
    },
    async asyncData({store}) {
      const {views, comment} = await store.dispatch('post/getAnalytics')
      return {views, comment}
    },
    components: {AppAnalyticsChart}
  }
</script>

<style lang="scss" scoped>

</style>
