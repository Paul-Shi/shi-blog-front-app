<template>
  <div class="recommend">
    <panel :title="'推荐阅读'">
      <div slot="content" class="content">
        <div class="top" v-if="topRecommend">
          <a :href="'/' + topRecommond.urlType + '/' + topRecommond.linkId">
            <p class="title">{{topRecommend.totle}}</p>
            <div class="tags">
              <iv-tag :color="tag.id | mapTagColor" v-for="(tag) in topRecommend.tagList" :key="tag.id">{{tag.name}}</iv-tag>
            </div>
          </a>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
    export default {
        name: "Recommend"
    }
</script>

<style scoped>

</style>
