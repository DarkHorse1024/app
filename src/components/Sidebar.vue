<template>
  <div class="sidebar-wrap">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#447FC1"
      text-color="#fff"
      active-text-color="#fff"
      :default-active="$route.path"
      @select="select"
      unique-opened
      @open="open"
      router
    >
      <div class="header">
        <img src="@/assets/img/logo.png" alt="" />
        <span>人事档案管理</span>
      </div>
      <el-menu-item index="/">
        <i class="iconfont icon-shouye"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu v-for="item in list" :index="item.id" :key="item.id">
        <template slot="title">
          <i :class="item.icon" class=""></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="item.path"
            v-for="item in item.list"
            :key="item.id"
            ><i :class="item.icon"></i>{{ item.name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    select(index) {
      this.$emit("change1", index);
    },
    open(index) {
      this.$emit("change2", index);
    },
  },
};
</script>

<style lang="less" scope>
.sidebar-wrap {
  height: 100%;
  overflow: hidden;
  .is-active {
    background-color: #fff !important;
    color: #447fc1 !important;
  }
  .el-menu{
    height: 100%;
  }
  .iconfont{
    color: #fff;
    margin-right: 10px;
  }
  .header {
    display: flex;
    height: 45px;
    border-bottom: #3d70aa solid 2px;
    margin-bottom: 4px;
    overflow: hidden;
  }
  .header img {
    width: 32px;
    margin: 9px 10px 9px 18px;
    height: 29px;
  }
  .header span {
    display: block;
    line-height: 45px;
    font-size: 22px;
    color: #fff;
  }
}
</style>