<template>
    <div>
        <div class="img">
            <slot></slot>
        </div>
        <div class="ii">
            <i class="iconfont" @click="qq">&#xe63c;</i>
            <i class="iconfont" @click="wx">&#xe514;</i>
            <i class="iconfont" @click="xh">&#xe501;</i>
            <i class="iconfont" @click="sc">&#xe661;</i>
        </div>
        <div class="img">
            <div class="aa" :class="{'show':isActive==1}">
                <img src="../../static/img/xm/qq.png">
            </div>
            <div class="aa" :class="{'show':isActive==2}">
                <img src="../../static/img/xm/wx.jpg">
            </div>
            <div class="aa" :class="{'show':isActive==3}">
                <img src="../../static/img/xh.jpg">
                <span class="span1">谢谢你的喜欢！</span>
            </div>
            <div class="aa scs1" :class="{'show':isActive==4}">
                <img src="../../static/img/sc.jpg">
                <div class="scs2" @click="dianj">点我收藏哟</div>
                <div class="scs">收藏成功！</div>
                <span class="span1">一共有{{cou}}人收藏了哟</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { Debounce } from "../../utils/jlfd.js";
    export default {
        name: "qq",
        data() {
            return {
                isActive: 1,
                cou: 1

            };
        },
        components: {},
        mounted() { },
        methods: {
            qq() {
                this.isActive = 1

            },
            wx() {
                this.isActive = 2

            },
            xh() {
                this.isActive = 3

            },
            sc() {
                this.isActive = 4

            },
            //   dianj(){
            //     $('.scs').fadeToggle('slow')
            //     $('.scs2').fadeToggle('slow')
            //     setTimeout(()=>{
            //         $('.scs').fadeToggle('slow')
            //         $('.scs2').fadeToggle('slow')
            //     },1500)
            //   },
            dianj: Debounce(function () 
            {
                $('.scs').fadeToggle('slow')
                $('.scs2').fadeToggle('slow')
                setTimeout(()=>{
                    $('.scs').fadeToggle('slow')
                    $('.scs2').fadeToggle('slow')
                },1000)
            }, 500),

        }
    }
</script>
<style scoped>
    @import '../../assets/font_p6npre34eo/iconfont.css';

    .span1 {
        display: inline-block;
        width: 100%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: royalblue;
    }

    .img img {
        width: 100%;
    }

    .img {
        width: 100%;
        height: 100%;
    }

    .ii {
        margin-top: 12px;
        display: flex;
        text-align: center;


    }

    .aa {
        display: none;
    }

    .ii i {
        flex: 1;
    }

    .iconfont {
        font-size: 28px !important;
        color: turquoise
    }

    .iconfont:hover {
        color: red
    }

    .scs2 {
        white-space: nowrap;
        font-size: 24px;
        color: seashell;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

    .scs {
        white-space: nowrap;
        font-size: 24px;
        color: seashell;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    .scs1 {
        position: relative;
    }

    .show {
        display: block;
    }
</style>