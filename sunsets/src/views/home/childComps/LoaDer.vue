<template>
    <div class="loader">
        <div>S</div>
        <div>U</div>
        <div>N</div>
        <div>S</div>
        <div>E</div>
        <div>T</div>
        <div>!</div>
      </div>
</template>

<script>
export default {
  name:"LoaDer",
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>
<style scoped>
   @media screen and (max-width: 768px) {
   .loader{
	   display: none;
   }
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
	position: relative;
	top: -35px;
  width:80%;
  height:30px;
  overflow:visible;
}

.loader div {
  position:absolute;
  width:25px;
  height:30px;
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
  font-size:2em;
}
/* .loader div:nth-child(8):before{
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
} */
.right{
  height: 300px;
  width: 100%;
  background-color: red;
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
	bottom:-20px;
	left:0px;
	width:24px;
	height:5px;
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
font-size:1em;
float:left;
text-decoration:none;
font-size:18px;
color:white
}

</style>