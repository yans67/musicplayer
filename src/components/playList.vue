<template>
  <!-- <f7-views> -->
    <f7-page>
     
      <f7-list v-for="(item,index) in list" :key="item.name">
                <f7-list-button @click="manualPlay(index)">{{item.name}}</f7-list-button>
              </f7-list>
              <div class="playPanel">
                <f7-button class="iconfont normal click icon-shangyishoushangyige" @click="prePlay()"></f7-button>
                <f7-button :class="'iconfont large click ' + playStyle" @click="pausePlay"></f7-button>
                <f7-button class="iconfont normal click icon-xiayigexiayishou" @click="nextPlay()"></f7-button>
                <f7-button class="iconfont normal click icon-xiayigexiayishou" @click="loopPlay()"></f7-button>
              </div>
              <audio :src="url" v-model="url" :loop="loop" autoplay controls ref="player" preload></audio>

    </f7-page>
    <!-- <f7-views> -->
</template>

<script>
export default {}
</script>