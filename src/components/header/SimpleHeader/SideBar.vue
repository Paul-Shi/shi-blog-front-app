<template>
  <div class="side-bar" @touchmove.stop.prevent :class="{ open: show }">
    <div class="main-area">
      <div class="top-wrapper" @touchmove.stop>
        <div class="top-area">
          <img src="../../../assets/background.jpg" alt="">
          <div class="site-info">
            <h1 class="site-name">Yuan's Blog</h1>
            <h1 class="site-desc">Coding!</h1>
          </div>
        </div>
        <div class="sidebar-menus">
          <div class="site-nav">
            <p>
              <iv-icon type="map"></iv-icon>
              文章导航
            </p>
          </div>
          <ul class="nav-menu">
            <!-- 类别导航 -->
            <li class=""
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

</style>
