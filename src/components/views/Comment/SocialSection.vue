<template>
  <div class="social-section">
    <div id="gitalk-container" v-if="show"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import BrowseMore from '@/components/views/BrowseMore'

export default {
  props: {
    type: String,
    postId: Number
  },
  data () {
    return {
      show: null
    }
  },
  components: {
    'browse-more': BrowseMore
  },
  watch: {
    postId (value) {
      this.show = value
      this.$nextTick(() => {
        // eslint-disable-next-line no-undef
        var gitalk = new Gitalk({
          clientID: '99f1f6c035e5cae0df50',
          clientSecret: 'f0e76c80642d88e283e0dc00f9a6c013c2068310',
          repo: 'dbblog_comment',
          owner: 'llldddbbb',
          labels: [this.type],
          admin: ['llldddbbb'],
          id: location.href, // Ensure uniqueness and length less than 50
          distractionFreeMode: false // Facebook-like distraction free mode
        })
        gitalk.render('gitalk-container')
      })
    }
  }
}
</script>
