<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'Scroll',
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null
            };
        },
        components: {
            BScroll
        },
        mounted() {
            // console.log(document.querySelector('.wrapper'));
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad,
                mouseWheel: true
            })
            this.scroll.on('scroll', (position) => {
                //   console.log(position);
                this.$emit('scroll', position)
            })

            this.scroll.on('pullingUp', () => {
                //   console.log('ddd');
                this.$emit('pullingUp')
            })

            // let ssj=document.querySelector('.content');

            // this.scroll.on('scroll',function(){
            //     console.log(ssj.pageYOffset);
            // })
              
           
        },
        
        methods: {
            scrollTo(x, y, time = 300) {
                this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            },
        }
    }
</script>
<style>

</style>