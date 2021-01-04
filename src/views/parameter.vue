<template>
  <div class="parameter">
    我是系统参数
    <button @click="clickList">跳转</button>
  </div>
</template>

<script>
export default {
  name: "parameter",
  methods:{
    clickList(){
      this.$router.push({path:'/files'})
    }
  }
};
</script>
