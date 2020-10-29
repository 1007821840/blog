<template>
    <div class="mac">
        <wbc-nav></wbc-nav>
        <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
            <div class="ssj">
                <div class="container">
                    <div class="headdd">
                        <div @click="tx"></div>
                        <div class="elm">
                            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false" :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                        <div class="iddd">个人ID: {{id}}</div>
                        <div class="bianj" @click="bj">编辑</div>
                        <div class="bianc" @click="bc">保存</div>
                    </div>
                    <!-- Example row of columns -->
                    <div class="row">
                        <div class="col-md-3 lis">
                            <li @click='jbzl'>基本资料</li>
                            <li  @click='dd1'>待定</li>
                            <li  @click='dd2'>待定</li>
                            <li  @click='dd3'>待定</li>
                            <li  @click='dd4'>待定</li>
                          
                        </div>
                        <div class="col-md-6 pt">
                            <div class="zl">
                                <div>
                                    基本信息
                                </div>
                                <div>我的昵称
                                    <input class="myinput" type="text" placeholder="昵称" v-model="Admin.name"
                                        disabled="disabled" />
                                </div>
                                <div>我的性别
                                    <input class="myinput" type="text" placeholder="我的性别" v-model=" Admin.sex"
                                        disabled="disabled" />
                                </div>
                                <div>我的兴趣
                                    <input class="myinput" type="text" placeholder="我的兴趣" v-model=" Admin.love"
                                        disabled="disabled" />
                                </div>
                                <div>我的电话
                                    <input class="myinput" type="text" placeholder="我的兴趣" v-model=" Admin.phone"
                                        disabled="disabled" />
                                </div>
                                <div>身份认证
                                    <input class="myinput" type="text" placeholder="身份证号" v-model=" Admin.idcd"
                                        disabled="disabled" />
                                </div>

                                <div>我的居住地
                                    <input class="myinput4" type="text" placeholder="居住地" v-model="Admin.address"
                                        disabled="disabled" />
                                </div>
                                <div>我的现在
                                    <input class="myinput" type="text" placeholder="从事" v-model="Admin.now"
                                        disabled="disabled" />
                                </div>
                                <div>毕业年份
                                    <input class="myinput" type="text" placeholder="年份" v-model="Admin.yeas"
                                        disabled="disabled" />
                                </div>
                                <div>我的学历
                                    <input class="myinput" type="text" placeholder="学历" v-model="Admin.class"
                                        disabled="disabled" />
                                </div>
                                <div>我从事的工作
                                    <input class="myinput8" type="text" placeholder="工作" v-model="Admin.work"
                                        disabled="disabled" />
                                </div>
                                <div>
                                    <div class="click2">{{xg}}</div>
                                    <div class="click1 notclick" @click="comit">确认</div>
                                </div>

                            </div>
                            <div class="dd11">待定1。。。</div>
                            <div class="dd22">待定2。。。</div>
                            <div class="dd33">待定3。。。</div>
                            <div class="dd44">待定4。。。</div>
                        </div>
                        <div class="col-md-3">
                            <qq-nav>
                                <img src="../../static/img/fd89dedd37de61ace12d360dd39e2a72.jpg">
                               </qq-nav>
                        </div>
                    </div>
                </div>
            </div>
        </scroll>


    </div>
</template>

<script>
     import qq from '@/components/content/qq.vue'
    import header from '@/components/content/header.vue'
    import Scroll from '@/components/common/scroll/Scroll'
    export default {
        name: "WanJi",
        data() {
            return {
                imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603947503834&di=738c557310333f58d36fb0e4c4f6a471&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F053141588.jpg',
                xg: '',
                ssj: '',
                id:'',
                Admin: {
                    imageUrl: '',
                    name: "",
                    sex: "",
                    phone: "",
                    password: "",
                    idcd: "",
                    love: "",
                    work: '',
                    class: '',
                    yeas: '',
                    now: '',
                    address: ''
                }
            };
        },
        components: {
            'qq-nav':qq,
            Scroll,
            'wbc-nav': header,
        },
        created() {
            this.ssj = sessionStorage.getItem("username");
            this.getAdminList()
            this.Admin.name = this.ssj
            // this.Admin.imageUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603944002526&di=c279940fa2ce7734eb337a4e1899f44d&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F053141588.jpg'
            if(this.Admin.imageUrl==''){
                this.Admin.imageUrl=this.imageUrl

            }
           

        },
        updated() {
            this.loadMore()
            this.jbzl()
            
          
            
        },
        mounted() {
            if(this.Admin.imageUrl=!''){
                $(".el-upload__input").addClass("not");

            }
            this.Admin.imageUrl=this.imageUrl
            // this.comit()
          
            // this.Admin.imageUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603944002526&di=c279940fa2ce7734eb337a4e1899f44d&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F053141588.jpg'
         },
        methods: {
            handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
            tx() {

            },
            getAdminList(page) {
                var _this = this;
                this.$reqs.post('/users/user', {
                    page: page
                }).then(function (result) {
                    //成功
                    // console.log(result.data.data);
                    result.data.data.forEach(it => {
                        if (it.name == _this.ssj) {
                            // console.log(it);
                            _this.id=it._id
                            _this.Admin = JSON.parse(JSON.stringify(it));
                            if(_this.Admin.imageUrl){
                               _this.imageUrl=_this.Admin.imageUrl
                            }
                            else{
                            }
                        //     if(_this.Admin)
                        //     _this.imageUrl=_this.Admin.imageUrl
                          
                        }

                    });

                }).catch(function (error) {
                    //失败
                });
            },
            saveEditAdmin() {
                this.$reqs.post('/users/update', this.Admin)
                    .then((result) => {
                        //成功

                    }).catch(function (error) {
                        //失败
                        console.log(error)
                    });
            },
            jbzl(){
                $(".pt>div").addClass("not");
                $(".zl").removeClass("not")
            },
            dd1(){
                $(".pt>div").addClass("not");
                $(".dd11").removeClass("not")

            },
            dd2(){
                $(".pt>div").addClass("not");
                $(".dd22").removeClass("not")

            },
            dd3(){
                $(".pt>div").addClass("not");
                $(".dd33").removeClass("not")

            },
            bc(){
                this.comit()

            },
            dd4(){
                $(".pt>div").addClass("not");
                $(".dd44").removeClass("not")
            },
            bj() {
                $('.zl>div>input').removeAttr("disabled");
                $(".click1").removeClass("notclick");//移除不可点击
                // console.log(this.Admin);

            },
            comit() {

                if (this.Admin.name == '') {
                    alert('用户名不能为空')
                } else {
                    this.Admin.imageUrl=this.imageUrl
                    this.xg = "nice 修改成功"
                    setTimeout(() => {
                        this.xg = ""
                    }, 1000)
                    $('.zl>div>input').attr("disabled", "disabled");
                    this.saveEditAdmin()
                    $(".click1").addClass("notclick");//设为不可点击
                }



            },
            contentScroll(position) {
                // console.log( this.currentIndex);
            },
            loadMore() {
                this.$refs.scroll.scroll.refresh()
            },
        }
    }
</script>
<style scoped>
    @media screen and (max-width: 768px) {
    .lis{
        display: flex;
    }
    .bianj{
        position: absolute;
        width: 80px!important;
        height: 40px!important;
        line-height: 40px!important;
        right: 100px!important;
    }
    .bianc{
         width: 80px!important;
        height: 40px!important;
        line-height: 40px!important;
        position: absolute!important;
        right: 10px!important;
    }
  
    .lis>li{
        flex: 1;
    }
    .iddd{
        display: none;
    }
    }
    .click1 {
        width: 70px;
        text-align: center;
        line-height: 40px;
        height: 40px !important;
        border: 1px solid;
        border-radius: 30px;
        margin-left: 240px;
        background-color: #25BB9B;
    }

    .myinput8 {
        margin-left: 34px !important;

    }

    .myinput {
        margin-left: 65px !important;
    }
.bianj{
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid;
    /* background-color: black; */
    position: absolute;
    right: 170px;
    top: 40px;
}
.bianc{
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid;
    /* background-color: black; */
    position: absolute;
    right: 50px;
    top: 40px;
}

    .mac {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
        height: 100vh;
    }

    .zl>div>input {
        margin-left: 50px;
    }
.avatar-uploader>input{
    position: absolute;
    top: 0;
}

    .ssj {
        height: 1500px;
    }

    .click2 {
        width: 240px;
        font-size: 30px;
        text-align: center;
        line-height: 40px;
        height: 40px !important;
        float: left;
        color: chartreuse;
    }

    .notclick {
        background-color: #bbbbbb;
        pointer-events: none;
    }
.iddd{
   height: 110px;
   line-height: 70px;
    position: absolute;
    left: 180px;
    top: 0;
}
    .headdd {
        position: relative;
        top: 20px;
        height: 120px;
        border-radius: 5px;
        border: 1px solid;
        /* background-color: blue; */
    }

    .row {
        margin-top: 40px;
    }

    .zl>div {
        height: 60px;

    }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 110px;
    height: 110px;
    line-height: 110px;
    text-align: center;
  }
  .avatar {
      position: absolute;
      top: 10px;
      left: 50px;
    width:100%;
    height: 100%;
    display: block;
  }
  .elm{
      position: relative;
      width: 100px;
      height: 100px;
  }

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

    .lis>li {

        height: 60px;
    }
</style>
<style>
    .el-upload__input{
    position: absolute;
    bottom: -10px;
    left: 50px;

}
.not{
    display: none;
}
.ssjshow{
    display: block;
}
</style>