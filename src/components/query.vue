<template>
  <div class="query-wrap">
    <el-card shadow="never">
      <div style="margin-top: 15px"></div>
      <el-form
        inline
        size="mini"
        label-position="right"
        label-width="140px"
        :model="formlist"
        :rules="rules"
      >
        <el-row>
          <el-form-item
            label="员工编号："
            prop="number"
            required
            inline-message
          >
            <el-input
              v-model="formlist.number"
              value=""
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="员工姓名："
            prop="username"
            required
            inline-message
          >
            <el-input v-model="formlist.username"></el-input>
          </el-form-item>
          <el-form-item label="身份证号：" prop="id" required inline-message>
            <el-input v-model="formlist.id"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="组织名称：">
            <el-select v-model="formlist.organization">
              <el-option value="请选择"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职级：">
            <el-select v-model="formlist.rank">
              <el-option value="请选择"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="人员类型：">
            <el-select v-model="formlist.type">
              <el-option value="请选择"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <div class="search">
            <el-button
              type="primary"
              size="mini"
              class="el-icon-search"
              style="margin: auto !important"
              @click="queryClick"
              >查询</el-button
            >
          </div>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formlist: {
        number: "",
        username: "",
        id: "",
        organization: "",
        rank: "",
        type: "",
      },
      rules: {
        number: [{ required: true, message: "这是必填项" }],
        username: [{ required: true, message: "这是必填项" }],
        id: [{ required: true, message: "这是必填项" }],
      },
    };
  },
  methods: {
    queryClick() {
      if (
        this.formlist.number == "" &&
        this.formlist.username == "" &&
        this.formlist.id == ""
      ) {
        this.$alert("你还没有输入必填项", {
          confirmButtonText: "确定",
          callback() {
            console.log('点击了确定')
          },
        });
      } else {
        console.log(this.formlist);
      }
    },
  },
};
</script>

<style lang="less" scope>
.query-wrap {
  width: 100%;
  height: 100%;
  .el-card {
    width: 100%;
    height: 100%;
    .el-card__body {
      padding: 20px !important;
    }
  }
}
.el-input {
  width: 172px;
}
.el-select {
  width: 172px;
}
.search .el-icon-search {
  display: block;
  margin: 0 auto !important;
}
</style>