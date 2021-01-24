<template>
  <div style="display: inline-block;">
    <van-loading
      v-if="loading"
      class="van-qrcode__wrap"
      :style="wrapStyle"
    />
    <div
      v-show="!loading"
      class="van-qrcode__wrap"
      :style="wrapStyle"
    >
      <component :is="tag" ref="wrapRef" @click="clickCode" />
      <div v-if="disabled" class="van-disabled__wrap" @click="disabledClick">
        <div>
          <van-icon name="replay" />
          <div>{{ disabledText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import { deepClone } from '@/utils'
const { toCanvas, toDataURL } = QRCode
export default {
  name: 'Qrcode',
  props: {
    // img 或者 canvas,img不支持logo嵌套
    tag: {
      type: String,
      default: 'canvas',
      validator: v => ['canvas', 'img'].includes(v)
    },
    // qrcode.js配置项
    options: {
      type: Object,
      default: null
    },
    // 二维码内容
    text: {
      type: [String, Array],
      default: null
    },
    // 宽度
    width: {
      type: Number,
      default: 200
    },
    // 中间logo图标
    logo: {
      type: [String, Object],
      default: ''
    },
    // 是否过期
    disabled: {
      type: Boolean,
      default: false
    },
    // 过期提示内容
    disabledText: {
      type: String,
      default: '二维码已失效'
    }
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    renderText() {
      return String(this.text)
    },
    wrapStyle() {
      return {
        width: this.width + 'px',
        height: this.width + 'px'
      }
    }
  },
  watch: {
    renderText: {
      handler: function(val) {
        if (!val) return
        this.initQrcode()
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 初始化
    initQrcode() {
      this.$nextTick(async() => {
        const options = deepClone(this.options || {})
        if (this.tag === 'canvas') {
          // 容错率，默认对内容少的二维码采用高容错率，内容多的二维码采用低容错率
          options.errorCorrectionLevel = options.errorCorrectionLevel || this.getErrorCorrectionLevel(this.renderText)
          this.getOriginWidth(this.renderText, options).then(async(_width) => {
            options.scale = this.width === 0 ? undefined : (this.width / _width) * 4
            const canvasRef = await toCanvas(this.$refs.wrapRef, this.renderText, options)
            if (this.logo) {
              const url = await this.createLogoCode(canvasRef)
              this.$emit('done', url)
              this.loading = false
            } else {
              console.log(canvasRef.toDataURL())
              this.$emit('done', canvasRef.toDataURL())
              this.loading = false
            }
          })
        } else {
          const url = await toDataURL(this.renderText, {
            errorCorrectionLevel: 'H',
            width: this.width,
            ...options
          })
          this.$refs.wrapRef.src = url
          this.$emit('done', url)
          this.loading = false
        }
      })
    },
    // 生成logo
    createLogoCode(canvasRef) {
      const canvasWidth = canvasRef.width
      const logoOptions = Object.assign({
        logoSize: 0.15,
        bgColor: '#ffffff',
        borderSize: 0.05,
        crossOrigin: 'anonymous',
        borderRadius: 8,
        logoRadius: 0
      }, typeof this.logo === 'string' ? {} : this.logo)

      const logoSrc = typeof this.logo === 'string' ? this.logo : this.logo.src
      const logoWidth = canvasWidth * logoOptions.logoSize
      const logoXY = (canvasWidth * (1 - logoOptions.logoSize)) / 2
      const logoBgWidth = canvasWidth * (logoOptions.logoSize + logoOptions.borderSize)
      const logoBgXY = (canvasWidth * (1 - logoOptions.logoSize - logoOptions.borderSize)) / 2

      const ctx = canvasRef.getContext('2d')
      if (!ctx) return

      // logo 底色
      this.canvasRoundRect(ctx)(logoBgXY, logoBgXY, logoBgWidth, logoBgWidth, logoOptions.borderRadius)
      ctx.fillStyle = logoOptions.bgColor
      ctx.fill()

      // logo
      const image = new Image()
      if (logoOptions.crossOrigin || logoOptions.logoRadius) {
        image.setAttribute('crossOrigin', logoOptions.crossOrigin)
      }
      image.src = logoSrc

      // 使用image绘制可以避免某些跨域情况
      const drawLogoWithImage = (image) => {
        ctx.drawImage(image, logoXY, logoXY, logoWidth, logoWidth)
      }

      // 使用canvas绘制以获得更多的功能
      const drawLogoWithCanvas = (image) => {
        const canvasImage = document.createElement('canvas')
        canvasImage.width = logoXY + logoWidth
        canvasImage.height = logoXY + logoWidth
        const imageCanvas = canvasImage.getContext('2d')
        if (!imageCanvas || !ctx) return
        imageCanvas.drawImage(image, logoXY, logoXY, logoWidth, logoWidth)

        this.canvasRoundRect(ctx)(logoXY, logoXY, logoWidth, logoWidth, logoOptions.logoRadius)
        if (!ctx) return
        const fillStyle = ctx.createPattern(canvasImage, 'no-repeat')
        if (fillStyle) {
          ctx.fillStyle = fillStyle
          ctx.fill()
        }
      }

      // 将 logo绘制到 canvas上
      return new Promise((resolve) => {
        image.onload = () => {
          logoOptions.logoRadius ? drawLogoWithCanvas(image) : drawLogoWithImage(image)
          resolve(canvasRef.toDataURL())
        }
      })
    },
    // 得到原QrCode的大小，以便缩放得到正确的QrCode大小
    getOriginWidth(content, options) {
      const _canvas = document.createElement('canvas')
      return toCanvas(_canvas, content, options).then(() => _canvas.width)
    },
    // 对于内容少的QrCode，增大容错率
    getErrorCorrectionLevel(content) {
      if (content.length > 36) {
        return 'M'
      } else if (content.length > 16) {
        return 'Q'
      } else {
        return 'H'
      }
    },
    // 点击二维码
    clickCode() {
      this.$emit('click')
    },
    // 失效点击事件
    disabledClick() {
      this.$emit('disabled-click')
    },
    // copy来的方法，用于绘制圆角
    canvasRoundRect(ctx) {
      return (x, y, w, h, r) => {
        const minSize = Math.min(w, h)
        if (r > minSize / 2) {
          r = minSize / 2
        }
        ctx.beginPath()
        ctx.moveTo(x + r, y)
        ctx.arcTo(x + w, y, x + w, y + h, r)
        ctx.arcTo(x + w, y + h, x, y + h, r)
        ctx.arcTo(x, y + h, x, y, r)
        ctx.arcTo(x, y, x + w, y, r)
        ctx.closePath()
        return ctx
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-loading {
  display: flex !important;
  background: rgba(255,255,255,0.98);
  justify-content: center;
  align-items: center;
}
.van-qrcode__wrap {
  display: inline-block;
  position: relative;
  .van-disabled__wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.95);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &>div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      i {
        font-size: 30px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
