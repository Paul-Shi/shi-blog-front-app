<template>
  <div class="article-content" v-cloak>
    <iv-row>
      <iv-col :xs="24" :sm="24" :md="24" :lg="17">
        <div class="layout-left">
          <article-page-header :article="article"></article-page-header>
          <article-page-content>
            <article id="article-main-page" class="typo container" slot="content" ref="article" v-html="article.contentFormat">
            </article>
          </article-page-content>
          <article-page-footer :postId="article.id"></article-page-footer>
        </div>
      </iv-col>
      <iv-col :xs="0" :sm="0" :md="0" :lg="7">
        <div class="layout-right">
          <recommend></recommend>
          <iv-affix :offset-top="60">
            <side-toc style="margin-top: 15px;"></side-toc>
          </iv-affix>
        </div>
      </iv-col>
    </iv-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import ArticlePageHeader from '@/components/views/Article/ArticlePageHeader'
  import ArticlePageContent from '@/components/views/Article/ArticlePageContent'
  import ArticlePageFooter from '@/components/views/Article/ArticlePageFooter'
  import About from '@/components/views/about'
  import FriendLinks from '@/components/views/FriendLinks'
  import SideToc from '@/components/views/SideToc'
  import Recommond from '@/components/views/Recommond'
  import TOC from '@/common/js/MarkdownToc'
  import TocScrollSpy from '@/common/js/TocScrollSpy'

  export default {
    data() {
      return {
        article: {}
      }
    }
  }
</script>
