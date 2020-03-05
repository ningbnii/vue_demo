<template>
    <div>
        {{id}}
    </div>
</template>

<script>
	export default {
		name: "produceDetail",
        data(){
			return {
				id:123
            }
        },
        created() {
			this.id = this.$route.params.id
        }
	}
</script>

<style scoped>

</style>
