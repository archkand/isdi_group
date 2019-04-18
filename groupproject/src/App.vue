<template>
  <div id="app">



    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
  },
    // routes: [
    //     {
    //         path: "/",
    //         redirect: {
    //             name: "Page1"
    //         }
    //     },
    //     {
    //         path: '/page1',
    //         name: 'Page1',
    //         component: Navigation
    //     }
    // ]

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
