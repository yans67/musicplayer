<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main Views -->
    <f7-views>
      <!-- <f7-view id="main-view" navbar-through :dynamic-navbar="true" main> -->
        <!-- iOS Theme Navbar -->
        <!-- <f7-navbar v-if="$theme.ios" title="苹果样式 title"></f7-navbar> -->
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar  暂时不知道有什么作用-->
            <!-- <f7-navbar v-if="$theme.material" title="安卓样式 title"></f7-navbar> -->
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

            <!-- <audio :src="currentPlay" controls="" autoplay="" :ref="player" preload="true"></audio> -->
            <audio :src="currentPlay" :loop="loop" autoplay controls ref="player" preload="false"></audio>

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
      currentPlay: '', // 当前正在播放的资源，修改该资源即可播放，因为加了 autoplay 属性
      player: '', // audio Dom
      playIndex:0, // 播放歌曲下标
      loop:false, // 默认不循环
      playPause: 'icon-bofang', // 播放暂停的样式
      list: [
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
          url: 'http://oc1475jft.bkt.clouddn.com/baizhouzhiye.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        },
         {
          name: '骄傲的少年',
          url: 'http://oc1475jft.bkt.clouddn.com/gaobaiqiqiu.mp3',
          image:
            'http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg'
        }
      ],
    }
  },
  methods: {
    // note:点击列表播放，播放暂停，上一首，下一首
    listPlay(index) {
      this.currentPlay = this.list[index].url
    },
    pausePlay() {
      this.playPause =
        this.playPause === 'icon-weibiaoti519'
          ? 'icon-bofang'
          : 'icon-weibiaoti519';
      console.log(this.player.pause);
      this.player.paused ? this.player.play() : this.player.pause();
    },
    prePlay(index) {
      this.currentPlay = this.list[--this.playIndex].url    
    },
    nextPlay(index) {
      this.currentPlay = this.list[++this.playIndex].url
    }
  },
  mounted(){ 
    this.player=this.$refs.player;
    // 装载 vue 实例后自动播放
    // this.currentPlay = this.list[this.playIndex].url;
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
