<template>
  <div class="article-list-content">
    <iv-row>
      <iv-col :xs="24":sm="24" :md="24" :lg="17">
        <div class="layout-left">
          <article-list-header v-if="categoryList.length>0" @filterByMenu="filterByMenu"
                               @filterByCategory="filterByCategory"
                               :categorys="categoryList"
                               :defaultCategory="selected_category"
                               :mainTitle="文章列表" :sub-title="'Articles'"></article-list-header>
          <article-list-cell v-for="article in articleList" :article="article" :key="article.id"></article-list-cell>
          <browse-more @browseMore="browseMore" :noMoreData="noMoreData" ref="browseMore"></browse-more>
        </div>
      </iv-col>
      <iv-col :xs="0" :sm="0" :md="0" :lg="7">
        <div class="layout-right">
          <recommend></recommend>
          <tag-wall style="margin-top: 15px;"></tag-wall>
        </div>
      </iv-col>
    </iv-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import ArticleListHeader from '@/components/views/Article/ArticleListHeader'
  import ArticlePageContent from '@/components/views/Article/ArticlePageContent'
  import ArticlePageFooter from '@/components/views/Article/ArticlePageFooter'
  import ArticleListCell from '@/components/views/Article/ArticleListCell'
  import Recommend from '@/components/views/Recommend'
  import TagWall from '@/components/views/TagWall'
  import BrowseMore from '@/components/views/BrowseMore'
  import merge from 'lodash/merge'
  import {treeDataTranslate} from '@/utils'

  export default {
    data () {
      return {
        articleList: [],
        categoryList: [],
        selected_category: this.$route.query.categoryId,
        currentPage: 1,
        pageSize: 15,
        categoryId: this.$route.query.categoryId,
        menuParams: {
          latest: true
        },
        noMoreData: false
      }
    },
    methods: {
      listArticle () {
        let params = {
          categoryId: this.categoryId,
          limit: this.pageSize,
          page: this.currentPage
        }
        params = merge(params, this.menuParams)
        this.$http({
          url: this.$http.adornUrl('/articles'),
          params: this.$http.adornParams(params),
          method: 'get'
        }).then(({data}) => {
          if (data && data.code === 200) {
            if (data.page.totalPage <= data.page.currentPage) {
              this.noMoreData = true
            } else {
              this.noMoreData = false
            }
            this.articleList = data.page.list
          }
        })
      },
      listCategory () {
        let params = {}
        params.type = 0
        this.$http({
          url: this.$http.adornUrl('/operation/categories'),
          method: 'get',
          params: this.$http.adornParams(params)
        }).then(({data}) => {
          if (data && data.code === 200) {
            this.categoryList = treeDataTranslate(data.categoryList)
          }
        })
      },
      filterByMenu (params) {
        this.resetCurrentPage()
        this.menuParams = params
        this.listArticle()
      },
      filterByCategory (params) {
        this.resetCurrentPage()
        this.categoryId = params
        this.listArticle()
      },
      resetLCurrentPage () {
        this.currentPage = 1
      },
      browseMore () {
        this.currentPage++
        let params = {
          categoryId: this.categoryId,
          limit: this.pageSize,
          page: this.currentPage
        }
        params = merge(params, this.menuParams)
        this.$http({
          url: this.$http.adornUrl('/articles'),
          params: this.$http.adornParams(params),
        })
      }
    }
  }
</script>
