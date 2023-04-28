<template>
    <router-view /> <!-- router.js 맵핑된 view 적용 코드 추가 -->
  </template>
  
  <script>
  //import HelloWorld from './components/HelloWorld.vue' <-- Vue 프로젝트 생성 시 존재하는 기본 코드 제거
  
  export default {
    name: 'App'
    /* <-- Vue 프로젝트 생성 시 존재하는 기본 코드 제거
    components: {
      HelloWorld,
    }
    */
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
  