<template>
  <div class="bookNote-cell">
    <iv-row type="flex">
      <iv-col :xs="24" :sm="24" :md="textSpan" :lg="textSpan" :order="textOrderType"
              style="padding-left: 0;padding-right: 0;">
        <div class="text-wrapper">
          <h4 class="title">
            <a :href="'/bookNote/' + bookNote.id">{{bookNote.title}}</a>
            <span class="special" v-if="bookNote.top>0" title="置顶">置顶</span>
          </h4>
          <p class="book-info">
            <iv-icon type="ios-book"></iv-icon>
            {{bookNote.book.title}}
            <iv-icon type="paintbrush"></iv-icon>
            {{bookNote.book.author}}
          </p>
          <p class="bookk-info">
            <iv-icon type="document-text"></iv-icon>
            Chapter: {{bookNote.chapter | textLineBreak(70) }}
          </p>
          <div class="tags">
            <iv-tag :color="tag.id | mapTagColor" :key="tag.id" type="border" v-for="(tag) in bookNote.tagList">
              {{tag.name}}
            </iv-tag>
          </div>
          <p class="desc">
            {{bookNote.description | filterHtnl | textLineBreak(70)}}<a :href="'/bookNote/' + bookNote.id">查看更多
            <iv-icon type="arrow-right-b"></iv-icon>
          </a>
          </p>
          <p class="operate_info">
            <span class="publish-time">At time / <a>{{bookNote.createTime | socialDate}}</a></span>
            <span class="readings"><a><iv-icon type="eye"></iv-icon>{{bookNote.readNum}} 阅读</a></span>
            <span class="likes"><a @click="likePost(bookNote)"><iv-icon type="heart"></iv-icon>{{bookNote.likeNum}} 喜欢 </a> </span>
          </p>
        </div>
      </iv-col>
      <iv-col :xs="0" :sm="0" :md="imgSpan" :order="imgOrderType" style="padding-left: 0px;padding-right: 0px">
        <div class="img-wrapper" :class="themeClass">
          <img :src="bookNote.cover" alt="">
        </div>
      </iv-col>
    </iv-row>
    <a class="toggle-arrow" @click="toggleBookInfo" :class="{show: showBookInfo}">
      {{ this.showBookInfo ? '隐藏《' + bookNote.book.title + '》':'查看《' + bookNote.book.title + '》'}}
      <iv-icon type="chevron-up" :class="{show: showBookInfo}"></iv-icon>
    </a>
    <a :href="'/book/' + bookNote.book.id">
      <div class="book-infos" :class="{show: showBookInfo}">
        <div class="book-infos-wrapper">
          <div class="img">
            <div class="container">
              <div class="bracket"></div>
              <div class="target">
                <img :src="bookNote.book.cover" alt="">
              </div>
            </div>
          </div>
          <div class="book-info"
        </div>
      </div>
    </a>
  </div>
</template>
