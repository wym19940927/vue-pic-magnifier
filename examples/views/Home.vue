<template>
  <div id="pic_page">
    <div class="pic_wrapper">
        <vue-pic-magnifier
          :url="imgUrl"   
          :scale="3"
          :selectorCustomStyle="{borderRadius: '50%', width: '100px', height: '100px'}"></vue-pic-magnifier>
    </div>
  </div>
</template>

<script>


export default {
    name: "home",
    data () {
      return {
          imgUrl: 'http://img95.699pic.com/photo/40019/8797.jpg_wh300.jpg'
      };
    },
};
</script>
<style lang="scss">
    #pic_page {
        .pic_wrapper {
            width: 550px;
            // height: 261px;
            padding: 20px;
            border: 1px solid #000;
        }
    }
</style>