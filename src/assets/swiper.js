/**
 * 获得当前状态
 * @param obj
 * @param attr
 * @returns {string}
 */
function getCurrentStyle(obj, attr) {
    let res
    if (obj.currentStyle)
        // IE 兼容写法 只有IE Opera 使用currentStyle
        res = obj.currentStyle[attr]
    else
        res = window.getComputedStyle(obj, null)[attr]
    return res
}

/**
 * 动画
 * @param obj
 * @param json
 * @param callback
 */
function animation(obj, json, callback) {
    let now
    let step
    let direction
    let current
    let isStop = true
    obj.t1 = setInterval(function () {
        for (let attr in json) {
            if (attr === 'opacity') {
                now = parseInt(getCurrentStyle(obj, attr) * 100)
                direction = json[attr] * 100 - now
                step = direction > 0 ? Math.ceil(direction / 10) : Math.floor((direction) / 10)
                current = now + step
                obj.style[attr] = current / 100
            } else {
                now = parseInt(getCurrentStyle(obj, attr))
                direction = json[attr] - now
                step = direction > 0 ? Math.ceil(direction / 10) : Math.floor((direction) / 10)
                current = now + step
                obj.style[attr] = current + 'px'
            }
            isStop = now === current;
        }

        if (isStop) {
            clearInterval(obj.t1)
            callback('动画执行结束！')
        }
    }, 30)
}


class Swiper {
    constructor() {
        // 获取dom
        this.btnleft = document.getElementById('btnleft')
        this.btnright = document.getElementById('btnright')
        this.slider = document.getElementById('slider')
        this.slices = this.slider.children
        this.pointer = document.getElementById('pointer')
        // 动态创建小圆点
        this.createPointers();
        this.pointers = document.getElementById('pointer').children
        // 为了无缝衔接进行轮播 需要将头滑片复制一个加到尾部  将尾部滑片复制一个添加到头部
        this.setSeamlessSlices();
        // 获取单个滑片的宽度
        this.sliceWidth = parseInt(getCurrentStyle(this.slices[0], 'width'))
        // 获取滑片个数
        this.sliceCount = this.slices.length
        // 初始轮播位置
        this.currentIndex = 1
        // 自动播放定时器
        this.autoPlayTimer = null
        // 是否正在移动
        this.isMoving = false
        // 监听事件
        this.eventHandlers();
    }

    /**
     * 注册监听事件
     */
    eventHandlers() {
        // 监听左按钮
        this.btnleft.addEventListener('click', () => {
            if (this.isMoving)
                return

            clearInterval(this.autoPlayTimer)
            this.goLeft()
            this.autoPlay()
        })
        // 监听右按钮
        this.btnright.addEventListener('click', () => {
            if (this.isMoving)
                return

            clearInterval(this.autoPlayTimer)
            this.goRight()
            this.autoPlay()
        })
    }

    /**
     * 为了无缝衔接进行轮播 需要将头滑片复制一个加到尾部  将尾部滑片复制一个添加到头部
     */
    setSeamlessSlices() {
        this.firstNode = this.slices[this.slices.length - 1].cloneNode(true)
        this.lastNode = this.slices[0].cloneNode(true)
        this.slider.appendChild(this.lastNode)
        this.slider.insertBefore(this.firstNode, this.slices[0])
    }

    /**
     * 动态创建小圆点
     */
    createPointers() {
        // 记录无缝处理前真实的滑片数 用来动态创建小圆点
        this.realSliceCount = this.slices.length
        for (let i = 0; i < this.realSliceCount; i++) {
            // 创建li
            const li = document.createElement('li')
            // 给li设置className
            li.classList.add('po')
            if (i === 0) {
                li.classList.add('active')
            }
            // 给li设置内容
            li.innerText = String(i + 1)
            // 给li注册点击事件监听
            li.onclick = (e) => {

                if (this.isMoving)
                    return
                this.isMoving = true
                clearInterval(this.autoPlayTimer)

                this.isLeftBtnClick = false
                this.isRightBtnClick = false
                animation(this.slider, {left: -this.sliceWidth * (i + 1)}, (res) => {
                    // console.log(res);
                    // 将当前显示的滑片索引+1
                    this.currentIndex = i + 1
                    // 移动完成
                    this.isMoving = false
                    // 防止越界
                    if (this.currentIndex === (this.sliceCount - 1)) {
                        this.slider.style.left = '-' + this.sliceWidth + 'px'
                        this.currentIndex = 1
                    }
                })
                // 为小圆点设置活动样式
                for (let pointer of this.pointers) {
                    pointer.classList.remove('active')
                }
                this.pointers[i].classList.add('active')
                // 点击小圆点之后恢复自动播放
                this.autoPlay()

            }
            // 将li追加到pointer里面
            this.pointer.appendChild(li)
        }
    }

    /**
     * 向右播放
     */
    goRight() {
        if (this.isMoving)
            return
        this.isMoving = true
        animation(this.slider, {left: -this.sliceWidth * (this.currentIndex + 1)}, (res) => {
            // console.log(res);
            // 将当前显示的滑片索引+1
            this.currentIndex++
            // 移动完成
            this.isMoving = false
            // 防止越界
            if (this.currentIndex === (this.sliceCount - 1)) {
                this.slider.style.left = '-' + this.sliceWidth + 'px'
                this.currentIndex = 1
            }
        })
        // 为小圆点设置活动样式
        for (let pointer of this.pointers) {
            pointer.classList.remove('active')
        }
        if (this.currentIndex < (this.sliceCount - 2))
            this.pointers[this.currentIndex].classList.add('active')
        else
            this.pointers[0].classList.add('active')
    }

    /**
     * 向坐播放
     */
    goLeft() {
        if (this.isMoving)
            return
        this.isMoving = true
        animation(this.slider, {left: -this.sliceWidth * (this.currentIndex - 1)}, (res) => {
            // console.log(res);
            // 将当前显示的滑片索引+1
            this.currentIndex--
            // 移动完成
            this.isMoving = false
            // 防止越界
            if (this.currentIndex === 0) {
                this.slider.style.left = -(this.sliceWidth * (this.sliceCount - 2)) + 'px'
                this.currentIndex = this.sliceCount - 2
            }
        })
        // 为小圆点设置活动样式
        for (let pointer of this.pointers) {
            pointer.classList.remove('active')
        }
        if (this.currentIndex > 1)
            this.pointers[this.currentIndex - 2].classList.add('active')
        else
            this.pointers[this.pointers.length - 1].classList.add('active')
    }

    /**
     * 自动播放
     */
    autoPlay() {
        this.autoPlayTimer = setInterval(() => {
            this.goRight()
        }, 3000)
    }
}


export default Swiper

// const swiper = new Swiper()
// swiper.autoPlay()