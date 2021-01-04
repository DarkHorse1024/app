<template>
  <div>
    <el-container>
      <el-aside width="210px">
        <sidebar
          :list="indexList"
          @change1="change1"
          @change2="change2"
        ></sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-top">
            <div class="left">
              <i class="el-icon-s-unfold"></i>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item
                  v-for="(item, index) in textArr"
                  :key="index"
                >
                  {{ item }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="right"></div>
          </div>
          <div class="header-bottom">
            <div class="box">
              <el-tag :color="color" type="info">首页</el-tag>
              <el-tag
                closable
                color="#F0F0F0"
                type="info"
                v-show="textArr.length > 0"
                @close="closableClick"
                >{{ text2 }}</el-tag
              >
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="35px">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sidebar from "@/components/Sidebar.vue";
export default {
  data() {
    return {
      //首页的数据
      indexList: [
        {
          name: "档案管理",
          id: "1",
          icon:"iconfont icon-danganguanli",
          list: [
            {
              name: "人员管理",
              id: "1-0",
              path: "/files",
              icon:"iconfont icon-renyuanguanli",
            },
            {
              name: "人员档案管理",
              id: "1-1",
              path: "/PersonnelFiles",
              icon:"iconfont icon-renyuandanganguanli",
            },
            {
              name: "查阅管理",
              id: "1-2",
              path: "/consult",
              icon:"iconfont icon-chayue",
            },
            {
              name: "档案转出",
              id: "1-3",
              path: "/transferOut",
              icon:"iconfont icon-fenxiangzidongzhuanchu",
            },
            {
              name: "数据导出",
              id: "1-4",
              path: "/dataExport",
              icon:"iconfont icon-daochu",
            },
            {
              name: "打印",
              id: "1-5",
              path: "/printing",
              icon:"iconfont icon-dayin",
            },
            {
              name: "案例统计",
              id: "1-6",
              path: "/statistics",
              icon:"iconfont icon-tongji",
            },
            {
              name: "系统日志",
              id: "1-7",
              path: "/journal",
              icon:"iconfont icon-rizhi",
            },
          ],
        },
        {
          name: "系统设置",
          id: "2",
          icon:"iconfont icon-shezhi",
          list: [
            {
              name: "组织架构管理",
              id: "2-1",
              path: "/structure",
              icon:"iconfont icon-jurassic_project",
            },
            {
              name: "系统参数",
              id: "2-2",
              path: "/parameter",
              icon:"iconfont icon-xitongcanshu-05",
            },
          ],
        },
      ],
      text1: "",  //点击的一维数组的那个
      text2: "", //具体侧面栏点击的那个
      sidebarIndex: "", //一维数组的下标
      textArr: [], //面包屑数组的获取
      color: "#F0F0F0", 
    };
  },
  components: {
    sidebar,
  },
  methods: {
    //获取点击具体哪个页面
    change1(index) {
      for (var i = 0; i < this.indexList.length; i++) {
        for (var j = 0; j < this.indexList[i].list.length; j++) {
          if (this.indexList[i].list[j].path == index) {
            this.text2 = this.indexList[i].list[j].name;
          }
        }
      }
      this.textArr = [this.text1, this.text2];
      if (index == "/") {
        this.textArr = [];
      }
      if (this.text2 != "") {
        this.color = "#fff";
      }
    },
    //获取侧面栏点击下标
    change2(index) {
      this.text1 = this.indexList[index - 1].name;
      this.sidebarIndex = index - 1;
    },
    // 点击回到首页
    closableClick() {
      this.text2 = "";
      this.textArr = [];
      this.$router.push("/");
    },
    // 界面联动函数
    linkage() {
      this.change1(this.$route.path);
      for (var i = 0; i < this.indexList.length; i++) {
        for (var j = 0; j < this.indexList[i].list.length; j++) {
          if (this.indexList[i].list[j].path == this.$route.path) {
            this.text1 = this.indexList[i].name;
          }
        }
      }
      this.textArr = [this.text1, this.text2];
      if(this.$route.path == '/'){
        this.textArr=[]
      }
    },
  },
  mounted() {
    this.linkage();
  },
  beforeUpdate() {
    this.linkage()
  },
};
</script>

<style lang="less" scope>
.el-container{
   background-color: #f0f0f0;
}
.el-aside {
  height: 100vh;
  background-color: blue;
}
.el-header {
  height: 87px !important ;
  padding: 0;
}
.el-main {
  height: 85vh;
  padding: 15px;
  margin-bottom: 13px;
  overflow: hidden;
}
.el-footer {
  background-color: #e2e2e2;
}

.header-top {
  height: 45px;
  background-color: #fff;
  border-bottom: #f0f0f0 solid 2px;
  .left {
    display: flex;
  }
  .el-breadcrumb__inner {
    line-height: 45px;
    font-size: 16px;
  }
  .el-icon-s-unfold {
    margin: 12px 13px;
    width: 20px;
    height: 20px;
    font-size: 20px;
  }
}
.header-bottom {
  height: 35px;
  padding-top: 5px;
  box-shadow:0px 2px 5px #f0f0f0;
  background-color: #fff;
  .box {
    margin-top: 0;
    margin-left: 15px;
    .el-tag {
      height: 35px;
      margin: 0 5px;
    }
  }
}
</style>