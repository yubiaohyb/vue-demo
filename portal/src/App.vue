<template>
  <div id="app" @click="test1" >
    <ul>
      <li v-for="(item, index) of itemIds" :key="index" :item="item" :index="index">{{item}}</li>
    </ul>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="vue门户测试页面" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data:function() {
    return {
      itemIds:[]
    }
  },
  methods:{
    test1(){
      this.$ajax.get("/test1/test1")
              .then(function(res) {
                console.log(res.data)
              })
              .catch(function (res) {
                console.log(res)
              });
    }
  },
  mounted() {
    var that = this;
    this.$ajax.get("/test1/li")
            .then(function(res) {
              that.$data.itemIds = res.data;
              console.log(res.data)
            })
            .catch(function (res) {
              console.log(res)
            });
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
