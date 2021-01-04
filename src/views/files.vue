<template>
  <div class="files">
    <div class="left"></div>
    <div class="right">
      <div class="query-wrap">
        <query></query>
      </div>
      <div class="tab-wrap"></div>
    </div>
  </div>
</template>

<script>
import query from '@/components/query.vue';
export default {
  name: "files",
  components:{
    query
  }
};
</script>

<style lang="less" scope>
.files {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    flex: 1;
    background-color: red;
  }
  .right {
    flex: 3;
    margin-left: 15px;
    display: flex;
    flex-flow: column;
    .query-wrap {
      width: 100%;
      height: 180px;
      background-color: #fff;
    }
    .tab-wrap {
      width: 100%;
      margin-top: 15px;
      flex: 1;
      background-color: blue;
    }
  }
}
</style>
