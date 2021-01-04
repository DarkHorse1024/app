<template>
  <div class="card-wrap">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="title">
        <span>{{ title }}</span>
        <el-button style="float: right" type="text" class="more"
          >更多</el-button
        >
      </div>
      <ul class="ul-list" :class="{ anim: animate == true }">
        <li v-for="(item, index) in datalist" :key="index" class="text item">
          {{ item.title }}
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: false,
    };
  },
  props: {
    title: {
      type: String,
    },
    datalist: {
      type: Array,
    },
  },
  methods: {
    scroll() {
      this.animate = true;
      setTimeout(() => {
        this.datalist.push(this.datalist[0]);
        this.datalist.shift();
        this.animate = false;
      }, 500);
    },
  }
};
</script>

<style lang="less" scope>
.card-wrap {
  max-height: 32.6vh !important;
  overflow: hidden;
}
.el-card__header {
  height: 40px;
  line-height: 40px;
  padding: 0;
  font-size: 14px;
  color: #000;
  border-bottom: 2px solid #f0f0f0;
  box-sizing: border-box;
  .title {
    padding-left: 10px;
  }
  .el-button {
    padding: 0;
  }
  .more {
    font-size: 14px;
    line-height: 40px;
    padding-right: 10px !important;
  }
}
.el-card__body {
  padding: 0;
  overflow: hidden;
  li {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px #f0f0f0 solid;
    font-size: 14px;
    padding-left: 15px;
  }
}
.anim {
  transition: all 0.5s;
  margin-top: -30px;
}
</style>