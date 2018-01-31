<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios" title="test"></f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar  暂时不知道有什么作用-->
            <!-- <f7-navbar v-if="$theme.material" title="test"></f7-navbar> -->
            <f7-list v-for="(item,index) in list" :key="item.name">
              <!-- <f7-list-item :title=item.name @click="songClick(index)"></f7-list-item> -->
              <f7-list-button @click="songClick(index)">{{item.name}}

              </f7-list-button>
            </f7-list>

            <div class="playBtns">
              <f7-button class="iconfont normal click icon-shangyishoushangyige" @click="preClick"></f7-button>
              <f7-button :class="'iconfont large click ' + playPause" @click="playPauseClick"></f7-button>
              <f7-button class="iconfont normal click icon-xiayigexiayishou" @click="nextClick"></f7-button>
            </div>

            <audio id="audio">
              <source title="你在终点等我" data-img="http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg" url="http://link.hhtjim.com/163/431357712.mp3">
              <source title="白昼之夜（纯音乐）" data-img="http://p1.music.126.net/he7P6CYpQmz8KqYSdULuOQ==/94557999994394.jpg" url="http://oc1475jft.bkt.clouddn.com/baizhouzhiye.mp3">
              <source title="告白气球" data-img="http://p1.music.126.net/tlp3VWVQVe0Je1r-oHn91g==/17666952835430891.jpg" url="http://oc1475jft.bkt.clouddn.com/gaobaiqiqiu.mp3">
              <source title="那就这样吧" data-img="http://p1.music.126.net/fYNa5MMN0KTIYP2KMpYObQ==/17923139044585525.jpg" url="http://link.hhtjim.com/163/28949843.mp3">
              <source title="骄傲的少年" data-img="http://p1.music.126.net/Brn39jwEDNPVV6pNWcv_rA==/1391981724588577.jpg" url="http://link.hhtjim.com/163/408332757.mp3">
              <source title="岁月神偷" data-img="http://p1.music.126.net/54wdQi_3rpjreY2oo2jb7w==/5998935441219557.jpg" url="http://link.hhtjim.com/163/28285910.mp3">
            </audio>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<style>
.normal {
  font-size: 44px;
  width: 44px;
  height: 44px;
  line-height: 44px;
  padding: 0px;
  margin-left: 55px;
  margin-right: 55px;
  min-width: 44px;
  display: inline-block;
}
.playBtns {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.large {
  font-size: 64px;
  width: 64px;
  height: 64px;
  line-height: 64px;
  padding: 0px;
  min-width: 64px;
  display: inline-block;
}
.large:active {
  background-color: #ffffff;
}
.normal:active {
  background-color: #ffffff;
  /* background: skyblue; */
}
</style>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '1',
          url: 'http://link.hhtjim.com/163/431357712.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        },
        {
          name: '2',
          url: 'http://link.hhtjim.com/163/431357712.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        },
        {
          name: '3',
          url: 'http://link.hhtjim.com/163/431357712.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        },
        {
          name: '4',
          url: 'http://link.hhtjim.com/163/431357712.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        }
      ],
      playPause: 'icon-bofang'
    }
  },
  methods: {
    songClick(index) {
      console.log(index)
      let audio = document.getElementById('audio')
      audio.play()
    },

    // note:播放，上一首，下一首的方法
    playPauseClick() {
      this.playPause =
        this.playPause === 'icon-weibiaoti519'
          ? 'icon-bofang'
          : 'icon-weibiaoti519'
    },
    preClick() {
      console.log('pre')
    },
    nextClick() {
      console.log('next')
    }
  }
}
</script>