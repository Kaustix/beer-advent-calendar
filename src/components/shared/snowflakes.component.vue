<template>
    <div id="snow"></div>
</template>

<script>
    export default {
        name: 'SnowFlakes',
        mounted() {
            const flakes = [];
            const types = ['❄','❅','❆'];
            for(var i = 0, len = 80; i < len; i++) {
                flakes.push('<i>' + types[i%3]  + '</i>');
            }  
            document.getElementById('snow').innerHTML = flakes.join('');
        }
    }
</script>

<style lang="css">
#snow {
  position: fixed;
  top: -160px;
  left: 0;
  right: 0;
  z-index: 1;
}

#snow i {
  -webkit-animation: falling 20s 1s linear;
  animation: falling 8s linear 2s 20;
  animation-iteration-count :infinite;
  -webkit-animation-iteration-count :infinite;
  border-radius: 50%;
  cursor: default;
  display: inline-block;
  font-style: normal;
  height: 16px;
  user-select: none; 
  -webkit-user-select: none; 
  width: 16px;
  color: white;
}  
   
/* animation */
@-webkit-keyframes falling {
  0% {-webkit-transform: translate3d(0,0,0) rotate(0deg);}
  100% {-webkit-transform: translate3d(30px,1000px,0) rotate(360deg);}   
}

@keyframes falling {
  0% {transform: translate3d(0,0,0) rotate(0deg);}
  100% {transform: translate(30px,1000px) rotate(360deg);}   
}
   
/* Sizes */
#snow i:nth-of-type(4n) {
  height:30px;
  width:30px;
}

#snow i:nth-of-type(4n+1) {
  height:24px;
  width:24px;
}

#snow i:nth-of-type(4n+2){
  height:10px;
  width:10px;
}

/* Speeds */
#snow i:nth-of-type(4n) {
    animation-duration: 16.3s;
    -webkit-animation-duration: 16.3s;
    -moz-animation-duration: 16.3s;
}

#snow i:nth-of-type(4n+1){
    animation-duration: 16.1s;
    -webkit-animation-duration: 16.1s;
    -moz-animation-duration: 16.1s;
}

#snow i:nth-of-type(4n+2) {
    animation-duration: 12.7s;
    -webkit-animation-duration: 12.7s;
    -moz-animation-duration: 12.7s;
}

/* Delays */
#snow i:nth-of-type(3n) {
  -webkit-animation-delay: 2.3s;
  animation-delay: 2.3s;
}

#snow i:nth-of-type(3n+1) {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

#snow i:nth-of-type(3n+2) {
  -webkit-animation-delay: 3.4s;
  animation-delay: 3.4s;
}

/* Timing functions */
#snow i:nth-of-type(5n) {
  -webkit-animation-timing-function:ease-in-out;
  animation-timing-function:ease-in-out;
}

#snow i:nth-of-type(5n+1) {
  -webkit-animation-timing-function:ease-out;
  animation-timing-function:ease-out;
}

#snow i:nth-of-type(5n+2) {
  -webkit-animation-timing-function:ease;
  animation-timing-function:ease;
}

#snow i:nth-of-type(5n+3) {
  -webkit-animation-timing-function:ease-in;
  animation-timing-function:ease-in;
}

#snow i:nth-of-type(5n+4) {
  -webkit-animation-timing-function:linear;
  animation-timing-function:linear;
}

#snow i:nth-of-type(11n)  {
  -webkit-animation-timing-function:cubic-bezier(0.2, 0.3, 0.8, 0.9);
  animation-timing-function:cubic-bezier(0.2, 0.3, 0.8, 0.9);
}

/* Opacity */
#snow i:nth-of-type(7n){
  opacity: 0.5;
}

#snow i:nth-of-type(7n+2) {
  opacity: 0.3;
}

#snow i:nth-of-type(7n+4) {
  opacity: 0.7;
}

#snow i:nth-of-type(7n+6){
  opacity: 0.6;
  -webkit-animation-timing-function:ease-in;
  animation-timing-function:ease-in;
}

#snow i:nth-of-type(7n+1){
  opacity: 0.8;
}
</style>