<template>
  <div>
    <wbc-nav></wbc-nav>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
    <main role="main" class="main">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, Sunset!</h1>
          <div class="loader">
            <div>S</div>
            <div>U</div>
            <div>N</div>
            <div>S</div>
            <div>E</div>
            <div>T</div>
            <div>!</div>
          </div>
        </div>
      </div>
      <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-md-8">
            <h2>内容</h2>
            <div>content</div>
          </div>
          <div class="col-md-4">
            <h2>欢迎大家来到sun的blog!</h2>
            <div>
              11
            </div>
          </div>
        </div>
      </div> 
      <div class="container cook">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-md-8">
            <h2>内容</h2>
            <div>content</div>
          </div>
          <div class="col-md-4">
            <h2>这是我</h2>
          </div>
        </div>
      </div> 
    </main>
    <footer class="container">
      <p>&copy; Company 2017-2020</p>
    </footer>
    </scroll>
  </div>
</template>

<script>
   import Scroll from '@/components/common/scroll/Scroll'
   import header from '@/components/content/header.vue'
export default {
  name:"Home",
  data () {
    return {
      
    };
  },
  components: {
    Scroll,
    'wbc-nav':header,
  },
  updated() {
      this.loadMore()
    },
  mounted () {},
  methods: {
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
  .jumbotron{
    background-image: url(../../static/img/home1.jpg);
    background-size:100% 100%;
    height: 768px;
  }
  @media screen and (max-width: 768px) {
    .jumbotron{
    height: 444px;
  }
  .loader{
    display: none;
  }
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

  
body {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	background-color: #403833;
	font-size: 100%;
	font-family: 'Open Sans';
	font-weight: 100;
	height:100%;
}
.loader {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-mos-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	text-align:center;
	-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	cursor:default;
}


.loader {
  width:80%;
  height:36px;
  overflow:visible;
}

.loader div {
  position:absolute;
  width:30px;
  height:36px;
  margin:10px 15px;
  opacity:0;
  animation:move 4s linear infinite;
  -o-animation:move 4s linear infinite;
  -moz-animation:move 4s linear infinite;
  -webkit-animation:move 4s linear infinite;
  transform:rotate(180deg);
  -o-transform:rotate(180deg);
  -moz-transform:rotate(180deg);
  -webkit-transform:rotate(180deg);
  color:#fff;
  font-size:3em;
}
.loader div:nth-child(8):before{
	content:'';
	position:absolute;
	bottom:-15px;
	left:0px;
	width:30px;
	height:30px;
	background:#DB2F00;
	-webkit-border-radius: 100%;
	-moz-border-radius: 100%;
	border-radius: 100%;
}
.loader div:nth-child(9):before{
	content:'';
	position:absolute;
	bottom:-15px;
	left:0px;
	width:30px;
	height:30px;
	background:#f2f2f2;
	-webkit-border-radius: 100%;
	-moz-border-radius: 100%;
	border-radius: 100%;
}
.loader div:nth-child(10):before{
	content:'';
	position:absolute;
	bottom:-15px;
	left:0px;
	width:30px;
	height:30px;
	background:#13A3A5;
	-webkit-border-radius: 100%;
	-moz-border-radius: 100%;
	border-radius: 100%;
}
.jumbotron{
  position: relative;
}
.cook{
  height: 1500px;
}
.loader div:after{
	content:'';
	position:absolute;
	bottom:-40px;
	left:0px;
	width:30px;
	height:5px;
	background:#39312d;
	-webkit-border-radius: 100%;
	-moz-border-radius: 100%;
	border-radius: 100%;
}

.loader div:nth-child(2) {
  animation-delay:0.2s;
  -o-animation-delay:0.2s;
  -moz-animation-delay:0.2s;
  -webkit-animation-delay:0.2s;
}
.loader div:nth-child(3) {
  animation-delay:0.4s;
  -o-animation-delay:0.4s;
  -webkit-animation-delay:0.4s;
  -webkit-animation-delay:0.4s;
}
.loader div:nth-child(4) {
  animation-delay:0.6s;
  -o-animation-delay:0.6s;
  -moz-animation-delay:0.6s;
  -webkit-animation-delay:0.6s;
}
.loader div:nth-child(5) {
  animation-delay:0.8s;
  -o-animation-delay:0.8s;
  -moz-animation-delay:0.8s;
  -webkit-animation-delay:0.8s;
}
.loader div:nth-child(6) {
  animation-delay:1s;
  -o-animation-delay:1s;
  -moz-animation-delay:1s;
  -webkit-animation-delay:1s;
}
.loader div:nth-child(7) {
  animation-delay:1.2s;
  -o-animation-delay:1.2s;
  -moz-animation-delay:1.2s;
  -webkit-animation-delay:1.2s;
}
.loader div:nth-child(8) {
  animation-delay:1.4s;
  -o-animation-delay:1.4s;
  -moz-animation-delay:1.4s;
  -webkit-animation-delay:1.4s;
}
.loader div:nth-child(9) {
  animation-delay:1.6s;
  -o-animation-delay:1.6s;
  -moz-animation-delay:1.6s;
  -webkit-animation-delay:1.6s;
}
.loader div:nth-child(10) {
  animation-delay:1.8s;
  -o-animation-delay:1.8s;
  -moz-animation-delay:1.8s;
  -webkit-animation-delay:1.8s;
}

@keyframes move {
  0% {
    right:0;
    opacity:0;
  }
	35% {
		right: 41%; 
		-moz-transform:rotate(0deg);
		-webkit-transform:rotate(0deg);
		-o-transform:rotate(0deg);
		transform:rotate(0deg);
		opacity:1;
	}
	65% {
		right:59%; 
		-moz-transform:rotate(0deg); 
		-webkit-transform:rotate(0deg); 
		-o-transform:rotate(0deg);
		transform:rotate(0deg); 
		opacity:1;
	}
	100% {
		right:100%; 
		-moz-transform:rotate(-180deg); 
		-webkit-transform:rotate(-180deg); 
		-o-transform:rotate(-180deg); 
		transform:rotate(-180deg);
		opacity:0;
	}
}

@-moz-keyframes move {
	0% {
		right:0; 
		opacity:0;
	}
	35% {
		right:41%; 
		-moz-transform:rotate(0deg); 
		transform:rotate(0deg);
		opacity:1;
	}
	65% {
		right:59%; 
		-moz-transform:rotate(0deg); 
		transform:rotate(0deg);
		opacity:1;
	}
	100% {
		right:100%; 
		-moz-transform:rotate(-180deg); 
		transform:rotate(-180deg);
		opacity:0;
	}
}

@-webkit-keyframes move {
	0% {
		right:0; 
		opacity:0;
	}
	35% {
		right:41%; 
		-webkit-transform:rotate(0deg); 
		transform:rotate(0deg); 
		opacity:1;
	}
	75% {
		right:59%; 
		-webkit-transform:rotate(0deg); 
		transform:rotate(0deg); 
		opacity:1;
	}
	100% {
		right:100%;
		-webkit-transform:rotate(-180deg); 
		transform:rotate(-180deg); 
		opacity:0;
	}
}

@-o-keyframes move {
	0% {
		right:0; 
		opacity:0;
	}
	35% {
		right:41%; 
		-o-transform:rotate(0deg); 
		transform:rotate(0deg); 
		opacity:1;
	}
	65% {
		right:59%; 
		-o-transform:rotate(0deg); 
		transform:rotate(0deg); 
		opacity:1;
	}
	100% {
		right:100%; 
		-o-transform:rotate(-180deg); 
		transform:rotate(-180deg); 
		opacity:0;
	}
}

a{
background: #13A3A5;
padding:5px;
margin:10px;
display:block;
font-weight:100;
cursor:pointer;
font-size:1.5em;
float:left;
text-decoration:none;
font-size:18px;
color:white
}

</style>