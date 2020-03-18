<template>
    <div>
        <div id="myCanvas"></div>
    </div>
</template>

<script>
	export default {
		name: "lufy",
        mounted() {
			let s = this;
			let w = document.body.clientWidth;
			let h = document.body.clientHeight;
			LInit(20,'myCanvas',w,h,function () {
				setTimeout(function () {
					s.main()
				},0)
			});

        },
		methods:{
			main(){
				var s = this;
				var graphics = new LGraphics();
				addChild(graphics);
				graphics.drawRect(1, '#000000', [50, 50, 100, 100]);
            }
        }
	}
</script>

<style scoped>

</style>
