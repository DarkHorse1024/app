<template>
  <div class="Personnel">
    我是人员档案管理
    <button @click="clickList">跳转</button>
  </div>
</template>

<script>
export default {
  name: "Personnel",
  methods:{
    clickList(){
      this.$router.push({path:'/files'})
    }
  }
};
</script>
