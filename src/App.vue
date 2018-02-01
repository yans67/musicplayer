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
              <!-- <f7-list-item :title=item.name @click= "songClick(index)"></f7-list-item> -->
              <f7-list-button @click="listPlay(index)">{{item.name}}

              </f7-list-button>
            </f7-list>

            <div class="playBtns">
              <f7-button class="iconfont normal click icon-shangyishoushangyige" @click="prePlay()"></f7-button>
              <f7-button :class="'iconfont large click ' + playPause" @click="pausePlay"></f7-button>
              <f7-button class="iconfont normal click icon-xiayigexiayishou" @click="nextPlay()"></f7-button>
            </div>

            <audio :src="currentPlay" controls="" autoplay="" :ref="player" preload="true"></audio>

          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPlay: '', // 当前正在播放
      player: '', // audio dom
      playIndex:0,
      list: [
        {
          name: '你在终点等我',
          url: 'http://oc1475jft.bkt.clouddn.com/baizhouzhiye.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        },
        {
          name: '白昼之夜',
          url: 'http://oc1475jft.bkt.clouddn.com/baizhouzhiye.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        },
        {
          name: '告白气球',
          url: 'http://oc1475jft.bkt.clouddn.com/gaobaiqiqiu.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        },
        {
          name: '那就这样吧',
          url: 'http://link.hhtjim.com/163/28949843.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        },
         {
          name: '骄傲的少年',
          url: 'http://link.hhtjim.com/163/408332757.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        }
      ],
      playPause: 'icon-bofang'
    }
  },
  methods: {
    listPlay(index) {
      this.currentPlay = this.list[index].url
      console.log(this.currentPlay)
      // debugger
      // this.player.play()
    },

    // note:播放，上一首，下一首的方法
    // 播放暂停按钮
    pausePlay() {
      this.playPause =
        this.playPause === 'icon-weibiaoti519'
          ? 'icon-bofang'
          : 'icon-weibiaoti519'
      console.log(this.player.playing)
    },
    prePlay(index) {
      console.log('pre')
      this.currentPlay = this.list[--playIndex].url
      
    },
    nextPlay(index) {
      console.log('next')
      this.currentPlay = this.list[++playIndex].url
      
    }
  },
  mounted(){
    this.currentPlay = this.list[playIndex].url;
  }
}
</script>


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
  /* background-color: rgba(101,0,0,1); */
  /* box-shadow: 1px 1px 2px #888888; */
  background-color: rgba(0, 0, 0, 0 0);
  /* background: #203;  */
  /* color: blue; */
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
  background-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
.normal:active {
  background-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
</style>
