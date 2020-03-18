<template>
    <div id="app">
        <vue-page-stack>
            <router-view/>
        </vue-page-stack>
    </div>
</template>

<script>

	export default {
		name: 'App',
		components: {},
	}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100vw;
        height: 100vh;
    }
    canvas{
        width: 100vw;
        height: 100vh;
        flex: 1;
        position: absolute;
    }

</style>
