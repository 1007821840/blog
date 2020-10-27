<template>
    <div>
        <wbc-nav></wbc-nav>
        <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
            <div class="container">
                <!-- Example row of columns -->
                <div class="row">
                    <div class="col-md-8">
                        <h2>博客</h2>
                        <div class="head2">
                            <div>发表博客</div>
                            <div>
                                <div class="sous">
                                    <textarea rows="1" cols="8" value="" placeholder="请输入标题" wrap="no/off"
                                        v-model="messages" class="inp0">
                                    </textarea>
                                    <textarea rows="7" cols="8" value="" placeholder="请输入内容" wrap="no/off"
                                        v-model="message" class="inp">
                                    </textarea>
                                    <div @click="mess" class="mess">发送</div>
                                    <!-- <input type="text" value="" placeholder=""  /> -->
                                </div>


                                <div class="flx">
                                    <div @click="getAdminList">查看</div>
                                    <div class="flx1">
                                        <div @click="ad"><i class="iconfont ic">&#xe502;</i></div>
                                        <div @click="su"><i class="iconfont ic">&#xe50b;</i></div>
                                    </div>
                                </div>
                                <div>
                                    <div v-for="item in listData">
                                        <div class="bao">
                                            <div class="ite1">
                                                标题 : {{item.messages}}
                                            </div>
                                            <div class="ite">
                                                内容 : {{item.message}}
                                            </div>
                                            <div class="detel">
                                                <div>
                                                    {{item.newtime}}
                                                </div>
                                                <div @click="deleted(item)" class="detelf">
                                                    删除
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h2>欢迎大家来到sun的blog!</h2>
                        <qq-nav>
                            <img src="../../static/img/294dc5756d860cfc6d6c6c050d667e42.jpg">
                        </qq-nav>
                    </div>
                </div>
            </div>
        </scroll>
    </div>
</template>
<script>
    import qq from '@/components/content/qq.vue'
    import Scroll from '@/components/common/scroll/Scroll'
    import header from '@/components/content/header.vue'
    export default {
        name: "Message",
        data() {
            return {
                listData: [],
                message: '',
                messages: '',
                cot: 1
            };
        },
        computed: {
            newtime() {
            }
        },
        components: {
            'qq-nav': qq,
            'wbc-nav': header,
            Scroll
        },
        mounted() {
            this.getAdminList(this.cot);
        },
        updated() {
            this.loadMore()
            // this.getAdminList(this.cot);
        },
        methods: {
            deleted(item) {
                this.$reqs.post('/users/deletebloks', item)
                    .then((result) => {
                        this.getAdminList(this.cot);
                        //成功
                        // this.gopage(this.pageInfo.current);

                    }).catch(function (error) {
                        //失败
                    });
            },
            su() {
                this.cot++,
                    this.getAdminList(this.cot);
            },
            ad() {
                if (this.cot > 0) {
                    this.cot--,
                        this.getAdminList(this.cot);
                } else {
                    this.cot = 1
                }
            },
            getAdminList(page) {
                var _this = this;
                this.$reqs.post('/users/bloks', {
                    page: page
                }).then(function (result) {
                    //成功
                    console.log(result.data.data);
                    _this.listData = result.data.data;
                }).catch(function (error) {
                    //失败
                });
            },
            mess() {
                var newtime = new Date();
                if (this.message == '' || this.messages == '') {
                    alert('发布不能为空')
                }
                else {
                    var _this = this;
                    this.$reqs.post("/users/adds", { message: this.message, messages: this.messages, newtime: newtime })
                        .then(function (result) {
                            //成功
                            if (result.data.err) {
                                alert(result.data.err);
                            } else {
                                _this.message = '';
                                _this.messages = '';
                                _this.getAdminList(_this.cot);
                            }
                        }).catch(function (error) {
                            //失败
                        });
                }
                // this.getAdminList(this.cot);
            },
            contentScroll(position) {
            },
            loadMore() {
                this.$refs.scroll.scroll.refresh()
            },
        }
    }
</script>
<style scoped>
    @import "../../assets/font_p6npre34eo/iconfont.css";

    .wrapper {
        background-color: #F3F5F7;
        position: absolute;
        width: 100%;
        top: 56px;
        bottom: 0px;
        left: 0;
        right: 0;
        overflow: hidden;
    }

    .ite,
    .ite1 {
        margin: 5px;
    }

    .ite {
        margin-top: 14px;
    }


    .ite1 {
        font-size: 22px;
        font-weight: 600;
    }

    .detel {
        margin-top: 10px;
        width: 100%;


        display: flex;
    }

    .detelf {
        position: absolute;
        right: 8px;
    }

    .detel>div {
        margin: 0 5px;
    }

    .inp0 {
        position: absolute;
        top: 0;
        height: 34px;
        width: 94%;
        top: 10px;
        left: 0;
        right: 0;
        margin-left: 15px;
        flex: 8;
        background-color: #F3F5F7;
        outline: none;
        border: 0px;
        border-bottom: 1px solid #cccc;

    }

    .inp {
        position: absolute;
        top: 50px;
        bottom: 0px;
        width: 94%;
        left: 0;
        right: 0;
        margin-left: 15px;
        flex: 8;
        background-color: #F3F5F7;
        outline: none;
        border: 0px;

    }

    .sous>div {
        text-align: center;
        line-height: 50px;
        flex: 1;
    }

    .flx {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        height: 30px;
        line-height: 30px;
    }

    .flx1 {
        display: flex;
    }

    .flx1>div {
        margin: 0 5px;
    }

    .ic {
        font-size: 25px !important;
    }

    .sous {
        position: relative;
        border: 1px solid;
        width: 100%;
        border-radius: 10px;
        height: 200px;
        display: flex;
    }

    .mess {
        position: absolute;
        bottom: 0;
        right: 30px;
    }

    .bao {
        position: relative;
        width: 100%;
        /* height: 100px; */
        border: 1px solid;
        border-radius: 10px;
        margin-top: 15px;
        letter-spacing: 2px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }

    .head1 {
        height: 300px;
        border: 1px solid;
    }
</style>