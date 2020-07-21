<template>
  <div class="article-page-footer">
    <license-tag></license-tag>
    <social-section :post-id="postId" :type="BookNote"></social-section>
  </div>
</template>

<script>
import LicenseTag from '@/components/views/LicenseTag'
import SocialSection from '@/components/views/Comment/SocialSection'

export default {
  components: {
    'license-tag': LicenseTag,
    'social-section': SocialSection
  }
}
</script>
