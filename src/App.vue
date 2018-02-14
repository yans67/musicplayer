<template>
  <!-- App -->
  <div id="app">
    <!-- Views -->
    <div class="views">
      <div class="view view-main">
        <!-- navbar -->
        <div class="navbar">
          <div style="height:0px" class="navbar-inner">
            <div class="subnavbar music-nav">
              <div class="buttons-row">
                <a href="#tab1" class="button tab-link active">歌曲</a>
                <a href="#tab2" class="button tab-link">歌手</a>
                <a href="#tab3" class="button tab-link">收藏</a>
              </div>
            </div>
          </div>
          <!-- navbar end -->
        </div>
        <!-- pages -->
        <div class="pages">
          <div data-page="home" class="page pad-top-nav" :style="playPanelHeight">
            <div class="page-content">
              <!-- tabs -->
              <div class="tabs">
                <div id="tab1" class="tab active">
                  <div class="list-block contacts-block">
                    <ul>
                      <a @click.stop="executePlay(index)" class="item-link item-content" v-for="(item,index) in list" :key="index">
                        <div class="item-media">
                          <img class="music-singer-icon" :src="item.image">
                          </img>
                        </div>
                        <div class="item-inner">
                          <div class="item-title">{{item.name}}</div>
                          <div class="item-after">
                            <a @click.stop="deleteItem(index)" class="iconfont icon-delete small confirm-ok"></a>
                          </div>
                        </div>
                      </a>
                    </ul>
                  </div>
                </div>

                <div id="tab2" class="tab">
                  <div class="page-content">
                    <div class="block">
                      <p>
                        <a ref="ac" class="ac-1" href="#">One group, three buttons</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div id="tab3" class="tab">
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                  <p>Etiam non interdum erat...</p>
                  <p>Duis ac semper risus. Suspendisse...</p>
                </div>
                <!-- tabs end-->
              </div>
            </div>

            <audio :src="url" ref="player" v-model="url" :loop="loop" controls></audio>
            <div class="playPanel">
              <a @click="loopPlay()" :class="'iconfont ' + icon_loop_state + ' small'"></a>
              <a @click="prePlay()" class="iconfont icon-pre normal"></a>
              <a @click="pausePlay()" :class="'iconfont ' + play_state + ' large'"></a>
              <a @click="nextPlay()" class="iconfont icon-next normal"></a>
              <a @click="mark()" :class="'iconfont ' + icon_mark_state + ' small'"></a>
            </div>
            <!-- <audio :src="url" ref="player" v-model="url" :loop="loop" :ended="test('ended')" autoplay controls></audio> -->
            <!-- pages end -->
          </div>
        </div>
        <!-- view end -->
      </div>
      <!-- Views end -->
    </div>
    <!-- App end -->
  </div>
</template>

<script>
import Utils from './utils/index.js'
export default {
  data() {
    return {
      app: null,
      url: '', // 当前正在播放的资源，修改该资源即可播放，因为加了 autoplay 属性
      player: '', // audio Dom
      playIndex: -1, // 播放歌曲下标
      loop: false, // 默认不循环
      play_state: 'icon-play', // 播放暂停的样式，默认播放状态
      icon_mark_state: 'icon-mark', // 收藏样式，默认不收藏
      icon_loop_state: 'icon-order', // 是否循环，默认顺序
      playPanelHeight: {
        // 音乐播放面板的高度
        height: window.innerHeight - 119 + 'px'
      },
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
        }
      ]
    }
  },
  methods: {
    executePlay(index) {
      this.url = this.list[index].url
      // 切换歌曲重新加载资源
      if (this.playIndex != index) {
        this.player.load()
        // 加载资源后，判断状态是否可以播放
        this.player.addEventListener('canplay', () => {
          if (this.player.readyState > 2) {
            this.player.play()
            this.playIndex = index
            this.play_state = 'icon-pause'
          }
        })
      } else {
        if (this.player.paused) {
          this.player.play()
          this.play_state = 'icon-pause'

          // 暂停歌曲
        } else {
          this.player.pause()
          this.play_state = 'icon-play'
          console.log('播放，删除，暂停')
        }
      }
    },
    onRefresh() {
      console.log('onRefresh')
    },
    pausePlay() {
      // 默认播放第一首
      this.playIndex === -1
        ? this.executePlay(0)
        : this.executePlay(this.playIndex)
    },
    prePlay() {
      if (this.icon_loop_state === 'icon-random') {
        this.randomPlay()
      } else {
        let preIndex =
          this.playIndex === 0 ? this.list.length - 1 : this.playIndex - 1
        this.executePlay(preIndex)
      }
    },
    nextPlay() {
      if (this.icon_loop_state === 'icon-random') {
        this.randomPlay()
      } else {
        let nextIndex =
          this.playIndex === this.list.length - 1 ? 0 : this.playIndex + 1
        this.executePlay(nextIndex)
      }
    },
    // 播放控制，监听随机、顺序、重复的播放顺序
    playControl() {
      this.player.addEventListener(
        'ended',
        () => {
          if (this.icon_loop_state === 'icon-order') {
            this.nextPlay()
          } else if (this.icon_loop_state === 'icon-random') {
            this.randomPlay()
          } else {
            this.loop = true
          }
        },
        false
      )
    },
    loopPlay() {
      this.loop = false
      if (this.icon_loop_state === 'icon-order') {
        this.icon_loop_state = 'icon-loop'
        this.loop = true
      } else if (this.icon_loop_state === 'icon-loop') {
        this.icon_loop_state = 'icon-random'
      } else {
        this.icon_loop_state = 'icon-order'
      }
      this.playControl()
    },
    // 收藏
    mark() {
      console.log('mark')
      this.icon_mark_state =
        this.icon_mark_state === 'icon-mark' ? 'icon-marked' : 'icon-mark'
    },

    randomPlay() {
      let random = Utils.randomNum(0, this.list.length)
      this.executePlay(random)
    },

    deleteItem(index) {
      let self = this
      var buttons = [
        {
          label: true,
          text: "<p style='font-size:20px'>确定删除该首歌曲<p>",
          color: 'black'
        },
        {
          text: '确定',
          onClick: () => {
            self.list.splice(index, 1)
            if (!this.player.paused) {
              self.executePlay(index)
            }
          }
        },
        {
          text: '取消',
          color: 'red'
        }
      ]
      self.app.actions(buttons)
    }
  },
  mounted() {
    this.player = this.$refs.player
    this.app = new Framework7()
    this.playControl()
  }
}
</script>


<style>
/* .tabbar a.link, .tabbar a.tab-link {
  color: black;
  font: 1.2em sans-serif;
} */

.small {
  font-size: 24px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  padding: 0px;
  min-width: 24px;
  display: inline-block;
  margin-left: 25px;
  margin-right: 25px;
}
.normal {
  font-size: 38px;
  width: 38px;
  height: 38px;
  line-height: 38px;
  padding: 0px;
  margin-left: 28px;
  margin-right: 28px;
  min-width: 38px;
  display: inline-block;
  /* background-color: rgba(101,0,0,1); */
  /* box-shadow: 1px 1px 2px #888888; */
  /* background-color: rgba(0, 0, 0, 0 0); */
  /* background: #203;  */
  /* color: blue; */
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

.pad-top-zero {
  padding-top: 0px;
}

.pad-top-nav {
  padding-top: 62px;
}

.playPanel {
  height: 119px;
  width: 100%;
  background: #f0f4f9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.music-nav {
  height: 64px;
  background: #f0f4f9;
}

.music-singer-icon {
  height: 35px;
  width: 35px;
}
/* 注意，当“item-inner”在“item-link”中时，会有额外的右内边距（right padding）和chevron icon */
/* 屏蔽 （right padding）和chevron icon */
.list-block .item-link .item-inner {
  background: none;
  padding-right: 0px;
}
</style>
