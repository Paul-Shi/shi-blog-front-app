<template>
  <div class="article-list-header">
    <classify-menu @filterByCategory="filterByCategory" :categorys="categorys" :defaultCategory="defaultCategory"></classify-menu>
    <section-title :main-title="mainTitle" :subtitle="subTitle">
      <title-menu-filter @filterByMenu="filterByMenu" slot="menu" :menu-filter-list="defaultFilterList"></title-menu-filter>
    </section-title>
  </div>
</template>

<script type="text/ecmascript-6">
  import SectionTitle from '@/components/SectionTitle/SectionTitle'
  import ClassifyMenu from '@/components/views/Classify/ClassifyMenu'
  import TitleMenuFilter from '@/components/SectionTitle/TitleMenuFilter'
  import {DefaultFilterList} from '@/common/js/const'

  export default {
    data () {
      return {
        defaultFilterList: DefaultFilterList,
        categoryParam: {}
      }
    },
    
  }
</script>
