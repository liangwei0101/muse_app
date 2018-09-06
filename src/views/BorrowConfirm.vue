<template>
  <div>

    <mu-appbar class="top" color="cyan">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      图书借阅
      <mu-button flat slot="right"></mu-button>
    </mu-appbar>

    <div class="content">
      <mu-list style="width:100%">
        <mu-list-item button :ripple="false">
          <mu-list-item-title>书名：</mu-list-item-title>
          <mu-list-item-title>{{bookDetail.name}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>编号：</mu-list-item-title>
          <mu-list-item-title>{{bookDetail.id}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>起始日期：</mu-list-item-title>
          <mu-list-item-title>{{beginDate}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>还书日期：</mu-list-item-title>
          <mu-list-item-title>{{endDate}}</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>支付押金：</mu-list-item-title>
          <mu-list-item-title>{{bookDetail.bookCost}}分</mu-list-item-title>
        </mu-list-item>
      </mu-list>
      <mu-divider></mu-divider>
      <mu-button class="button" color="cyan" @click="borrowBookAction">确认借书</mu-button>
      <br>
      <br>
      <a>对借书有疑问？去问问牛牛小助手</a>

    </div>

  </div>

</template>

<script>
import Cookies from "js-cookie";
import { getNextMonth } from "@/utils/time";
import { reqBookDetail, borrowBook } from "@/api/book";
import "muse-ui-message/dist/muse-ui-message.css";
import Vue from "vue";
import Message from "muse-ui-message";
Vue.use(Message);

export default {
  data() {
    return {
      bookNo: "图书评论（0）",
      bookDetail: {},
      beginDate: "",
      endDate: "",
      bookNo: ""
    };
  },
  mounted() {
    let myDate = new Date();
    let year = myDate.getFullYear(); //得到年份
	  let month = myDate.getMonth() + 1;//得到月份
	  let date = myDate.getDate();//得到日期
    this.beginDate = year + "-" + month + "-" + date;
    console.log(this.beginDate);
    this.bookNo = Cookies.get("storeMsg");
    this.endDate = getNextMonth(this.beginDate);
    this.reqBookDetailAction();
  },
  methods: {
    goBack() {
      this.$router.back(-1);
    },
    reqBookDetailAction() {
      reqBookDetail(this.bookNo)
        .then(response => {
          this.bookDetail = response.data;
          console.log(this.bookDetail);
        })
        .catch(err => {
          console.log(err);
        });
    },
    borrowBookAction() {
      let info = {
        bookNo: this.bookNo,
        userNo: "19145",
        beginDate: this.beginDate,
        endDate: this.endDate
      };
      console.log(info);
      borrowBook(info)
        .then(response => {
          if (response.data > 0) {
            this.$router.push({ name: "BorrowSuccess" });
          } else {
            this.alert();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    alert() {
      this.$alert("此书您已经借阅过一本,不能贪杯哦！", "提示", {
        okLabel: "借阅失败"
      }).then(() => {});
    }
  }
};
</script>

<style>
.content {
  margin-top: 58px;
  margin-left: 8px;
  margin-right: 8px;
}
.top {
  position: fixed;
  z-index: 40;
  width: 100%;
  max-width: 100%;
  top: 0px;
}
.button {
  margin-top: 60px;
  width: 200px;
}
.list-wrap {
  width: inherit;
  overflow: hidden;
  height: inherit !important;
  background: white;
}
</style>
