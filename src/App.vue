<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-center sliding>音乐播放器</f7-nav-center>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar  暂时不知道有什么作用-->
            <!-- <f7-navbar v-if="$theme.material">
              <f7-nav-center sliding>音乐播放器</f7-nav-center>
            </f7-navbar> -->

        

          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
export default {}
</script>