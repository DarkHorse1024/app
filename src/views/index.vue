<template>
  <!-- 我是首页的页面 -->
  <div class="index-wrap">
    <div class="top">
      <div class="data-wrap">
        <img src="@/assets/img/img01.png" alt="" />
      </div>
      <div class="data-wrap">
        <img src="@/assets/img/img02.png" alt="" />
      </div>
      <div class="data-wrap">
        <img src="@/assets/img/img03.png" alt="" />
      </div>
      <div class="data-wrap">
        <img src="@/assets/img/img04.png" alt="" />
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <img src="@/assets/img/biao.png" alt="" />
      </div>
      <div class="right">
        <div class="agency" @mouseenter="agencyEnter" @mouseleave="agencyLeave">
          <cardList
            :title="'代办事项'"
            :datalist="agencylist"
            ref="daiban"
          ></cardList>
        </div>
        <div
          class="dynamic"
          @mouseenter="dynamicEnter"
          @mouseleave="dynamicLeave"
        >
          <cardList
            :title="'最新动态'"
            :datalist="dynamiclist"
            ref="dongtai"
          ></cardList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardList from "@/components/card.vue";
export default {
  name: "index",
  data() {
    return {
      agencylist: [
        {
          title: "请完成柯南的档案数字化录入",
        },
        {
          title: "请完成柯南的档案数字化录入",
        },
        {
          title: "请完成柯南的档案数字化录入",
        },
        {
          title: "请完成柯南的档案数字化录入",
        },
      ],
      dynamiclist: [
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
        {
          title: "2020-12-1-12:12 柯南登陆了系统",
        },
      ],
      agencyFlag: false,
      dynamicFlag:false,
      agencytimer: "",
      dynamictimer: "",
    };
  },
  components: {
    cardList,
  },
  methods: {
    setheight(obj, data) {
      var wrap = document.querySelector(obj);
      var num = data.length * 30 + 40;
      wrap.style.height = num + "px";
    },
    agencyEnter() {
      if (this.agencyFlag == true) {
        clearInterval(this.agencytimer);
        this.agencyFlag = false;
      }
    },
    agencyLeave() {
      if (this.agencyFlag == false && this.agencylist.length > 9) {
        this.agencytimer = setInterval(this.$refs.daiban.scroll, 2000);
        this.agencyFlag = true;
      }
    },
    dynamicEnter() {
      if (this.dynamicFlag == true) {
        clearInterval(this.dynamictimer);
        this.dynamicFlag = false;
      }
    },
    dynamicLeave() {
      if (this.dynamicFlag == false && this.dynamiclist.length > 9) {
        this.dynamictimer = setInterval(this.$refs.dongtai.scroll, 2000);
        this.dynamicFlag = true;
      }
    },
  },
  mounted() {
    this.setheight(".agency", this.agencylist);
    this.setheight(".dynamic", this.dynamiclist);
    if (this.agencylist.length > 9) {
      this.agencyFlag = true;
      this.agencytimer = setInterval(this.$refs.daiban.scroll, 2000);
    }
    if (this.dynamiclist.length > 9) {
      this.dynamicFlag=true;
      this.dynamictimer=setInterval(this.$refs.dongtai.scroll, 2000);
    }
  },
};
</script>

<style lang="less" scope>
.index-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  .top {
    width: 100%;
    max-height: 169px;
    display: flex;
    .data-wrap:last-child {
      margin-right: 0px;
    }
    .data-wrap {
      flex: 1;
      margin-right: 15px;
      img {
        width: 100%;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 80%;
    margin-top: 15px;
    display: flex;
    .left {
      flex: 2;
      img {
        width: 100%;
      }
    }
    .right {
      flex: 1;
      margin-left: 15px;
      display: flex;
      flex-flow: column;
    }
    .agency {
      margin-bottom: 15px;
      max-height: 32.6vh !important;
    }
    .dynamic {
      max-height: 32.6vh !important;
    }
  }
}
</style>
