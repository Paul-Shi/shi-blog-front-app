<template>
  <div class="timeline-header">
    <section-title :main-title="'存档时光'" :subtitle="'Articles'">
    </section-title>
  </div>
</template>

<script type="text/ecmascript-6">
import SectionTitle from '@/components/views/SectionTitle/SectionTitle'
import TitleMenuTimeLine from '@/components/views/SectionTitle/TitleMenuTimeLine'
import ClassifyMenu from '@/components/views/Classify/ClassifyMenu'

export default {
  components: {
    'section-title': SectionTitle,
    'title-menu-timeline': TitleMenuTimeLine,
    'classify-menu': ClassifyMenu
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
