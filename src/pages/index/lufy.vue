<template>
    <div>
        <div id="myCanvas"></div>
    </div>
</template>

<script>
    import Ball from "../../assets/js/ball";
	export default {
		name: "lufy",
        data(){
			return {
				backgroundLayer:null,
                w:document.body.clientWidth,
                h:document.body.clientHeight,
                ball:null,
            }
        },
        mounted() {
			let s = this;
			LInit(20,'myCanvas',s.w,s.h,function () {
				setTimeout(function () {
					s.main()
				},0)
			});

        },
		methods:{
			main(){
				let s = this;
				LGlobal.preventDefault = false;
				s.initBackgroundLayer();
                s.ball = new Ball(20);
				s.backgroundLayer.addChild(s.ball);
				s.ball.x = 100;
				s.ball.y = 100;
				// s.backgroundLayer.addEventListener(LEvent.ENTER_FRAME,s.onframe);
            },
            initBackgroundLayer(){
				let s = this;
				s.backgroundLayer = new LSprite();
				addChild(s.backgroundLayer);
            },
            onframe(){
				let s = this;
            }
        },
        destroyed() {

        }
	}
</script>

<style scoped>

</style>
