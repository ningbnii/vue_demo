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
					main()
				},0)
			});

			function main() {
				LGlobal.preventDefault = false;
				var ball = new LSprite();
				addChild(ball);
				ball.graphics.drawArc(0, '', [0, 0, 20, 0, 2 * Math.PI], true, "#ff0000");

				ball.addEventListener(LEvent.ENTER_FRAME,function () {
					ball.x +=10;
				})
			}

        },
		methods:{
			main(){
				let s = this;
				LGlobal.preventDefault = false;
				s.initBackgroundLayer();
                // s.ball = new Ball(20);
				// s.backgroundLayer.addChild(s.ball);
				// s.ball.setX(s.w/2);
				// s.ball.setY(s.h/2);
                s.ball = new LSprite();
                s.backgroundLayer.addChild(s.ball);
                s.ball.graphics.drawArc(0, '', [0, 0, 20, 0, 2 * Math.PI], true, "#ff0000");
				// s.backgroundLayer.addEventListener(LEvent.ENTER_FRAME,s.onframe);
            },
            initBackgroundLayer(){
				let s = this;
				s.backgroundLayer = new LSprite();
				addChild(s.backgroundLayer);
            },
            onframe(){
				let s = this;
				s.ball.x += 10;
            }
        },
        destroyed() {

        }
	}
</script>

<style scoped>

</style>
