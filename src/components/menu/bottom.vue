<template>
  <div class="video-menu__bottom">
    <div class="play-btn">
      <img :src="playBtn"/>
    </div>
    <div class="play-time">13:15/07:20</div>
    <div class="play-speed">倍速</div>
    <div class="play-resolution">1080P</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      playBtn: require('@/assets/img/play.png'),
    }
  }
}
</script>

<style lang="scss" scoped>
.video-menu__bottom{
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  .play-btn{
    img{
      width: 15px;
    }
  }
}
</style>