<template>
  <!-- App -->
  <div id="app">
    <!-- Views -->
    <div class="views">
      <div class="view view-main">

        <div class="navbar">
          <div style="height:0px" class="navbar-inner">
            <!-- Sub navbar -->
            <div style="height:64px" class="subnavbar">
              <div class="buttons-row">
                <a href="#tab1" class="button tab-link active">歌手</a>
                <a href="#tab2" class="button tab-link">歌曲</a>
                <a href="#tab3" class="button tab-link">收藏</a>
              </div>
            </div>
          </div>
        </div>

    

        <div class="pages navbar-through">
           
          <div data-page="home" class="page with-subnavbar" style="height:500px">
          
            <div class="page-content hide-bars-on-scroll">
              <div class="tabs">
                <div id="tab1" class="tab active">
                  <div class="content-block">
                    <p>Lorem ipsum dolor ...</p>
                    <p>In sed augue non ...</p>
                  </div>
                </div>
                <div id="tab2" class="tab">
                  <div class="content-block">
                    <p>Donec iaculis ...</p>
                    <p>Curabitur egestas, mi ...</p>
                    <p>Donec iaculis posuere ...</p>
                  </div>
                </div>
                <div id="tab3" class="tab">
                  <div class="content-block">
                    <p>Etiam non interdum erat...</p>
                    <p>Duis ac semper risus. Suspendisse...</p>
                    <p>Etiam non interdum erat...</p>
                    <p>Duis ac semper risus. Suspendisse...</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="playPanel">
          </div>
          </div>
        </div>

       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '', // 当前正在播放的资源，修改该资源即可播放，因为加了 autoplay 属性
      player: '', // audio Dom
      playIndex: 0, // 播放歌曲下标
      loop: false, // 默认不循环
      playStyle: 'icon-bofang', // 播放暂停的样式
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
      ]
    }
  },
  methods: {
    // note:点击列表播放，播放暂停，上一首，下一首
    manualPlay(index) {
      this.url = this.list[index].url
      this.playStyle = 'icon-weibiaoti519'
    },
    onRefresh() {
      console.log('onRefresh')
    },
    pausePlay() {
      this.url = this.list[this.playIndex].url
      // 安卓状态为4
      // console.log(this.player.readyState)
      if (this.player.paused && this.player.readyState === 4) {
        this.player
          .play()
          .then(() => {
            this.playStyle = 'icon-weibiaoti519'
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.player.pause()
        this.playStyle = 'icon-bofang'
      }
    },
    prePlay() {
      this.playIndex =
        this.playIndex === 0 ? this.list.length - 1 : this.playIndex - 1
      this.manualPlay(this.playIndex)
    },
    nextPlay() {
      this.playIndex =
        this.playIndex === this.list.length - 1 ? 0 : this.playIndex + 1
      this.manualPlay(this.playIndex)
    },

    loopPlay() {
      this.loop = !this.loop
    }
  },
  mounted() {
    this.player = this.$refs.player
  }
}
</script>


<style>
/* .tabbar a.link, .tabbar a.tab-link {
  color: black;
  font: 1.2em sans-serif;
} */

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
.playPanel {
  height: 119px;
  width: 100%;
  background: blue;
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
