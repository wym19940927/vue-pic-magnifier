<!-- 放大镜组件 -->
<template>
  <div id="pic_magnifier" @mousemove="mouseMove($event)" @mouseleave="mouseLeave()" ref="piZoom">
      <img :src="url" class="origin_img" />
      <div 
      class="pic_selector" 
      ref="picSelector" 
      :style="[selectorCustomStyle, selectorLoctionStyle]"
      v-if="showZoom">
        <div class="big_img_wrapper" :style="[bigImgWrapperStyle]"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'VuePicMagnifier',
    props: {
        url: {
            type: String,
            required: true
        },
        selectorCustomStyle: {
            type: Object
        },
        scale: {
            default: 2
        }
    },
    data () {
        return {
            selectorLoctionStyle: {
                top: '-1000px',
                left: '-1000px'
            },
            bigImgWrapperStyle: {
                width: '',
                height: '',
                backgroundImage: '',
                backgroundPosition: '0px, 0px'
            },
            width: 0,   // 容器宽度
            height: 0,  // 容器高度
            showZoom: true
        };
    },
    methods: {
        // 鼠标移动事件
        mouseMove (event) {
            this.showZoom = true;
            this.$nextTick(() => {
                let picSelectorWidth = this.$refs.picSelector.clientWidth;
                let picSelectorHeight = this.$refs.picSelector.clientHeight;
                // 移动放大镜容器
                this.showZoom = true;
                let startX = event.clientX - this.left;
                let startY = event.clientY - this.top;
                let top, left;
                top = startY - picSelectorHeight / 2;
                left = startX - picSelectorWidth / 2;
                if (top <= 0) {
                    top = 0;
                } else if (top >= this.height - picSelectorHeight) {
                    top = this.height - picSelectorHeight;
                }
                if (left <= 0) {
                    left = 0;
                } else if (left >= this.width - picSelectorWidth) {
                    left = this.width - picSelectorWidth;
                }
                this.initSelectorLoction(top, left);
                // 移动放大的背景图片
                let bigImgPositionX = 0;
                let bigImgPositionY = 0;
                bigImgPositionX = (0 - startX + picSelectorWidth / 2 > 0 ? 0 : 0 - startX + picSelectorWidth / 2) * this.scale;
                bigImgPositionY = (0 - startY + picSelectorHeight / 2 > 0 ? 0 : 0 - startY + picSelectorHeight / 2) * this.scale;
                this.$set(this.bigImgWrapperStyle, 'backgroundPosition', `${bigImgPositionX}px ${bigImgPositionY}px`);
            })
        },
        mouseLeave () {
            this.showZoom = false;
        },
        // 获取容器定位，样式
        getWrapperLoction () {
            let boundingClientRect = this.$refs.piZoom.getBoundingClientRect();
            this.width = boundingClientRect.width;
            this.height = boundingClientRect.height;
            this.top = boundingClientRect.top;
            this.left = boundingClientRect.left;
        },
        // 初始化放大镜位置
        initSelectorLoction (top, left) {
            this.$set(this.selectorLoctionStyle, 'top', top + 'px');
            this.$set(this.selectorLoctionStyle, 'left', left + 'px');
        },
        // 初始化大图容器
        initBigImgStyle () {
            this.$set(this.bigImgWrapperStyle, 'width', this.scale * this.width + 'px');
            this.$set(this.bigImgWrapperStyle, 'height', this.scale * this.height + 'px');
            this.$set(this.bigImgWrapperStyle, 'backgroundImage', `url(${this.url})`);
        }
    },
    mounted () {
        // 获取容器样式
        this.getWrapperLoction();
        // 初始化大图容器
        this.initBigImgStyle();
    }
}

</script>
<style lang="scss">
    #pic_magnifier {
        position: relative;
        height: 100%;
        overflow: hidden;
        .origin_img {
            width: 100%;
        }
        .pic_selector {
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            width: 100px;
            height: 100px;
            overflow: hidden;
            background-color: transparent;
            box-shadow: 0 0 5px rgba(0, 0, 0, .3);
            cursor: crosshair;
            .big_img_wrapper {
                background-size: cover;
                background-repeat: no-repeat;
            }
        }
    }
</style>