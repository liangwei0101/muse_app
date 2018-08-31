<template>
  <div>
    <mu-appbar class="top" color="primary">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      图书借阅
      <mu-button flat slot="right">想看</mu-button>
    </mu-appbar>

    <mu-container>
      <div>

      </div>

      <div class="content">
        <mu-list>
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

        <mu-button class="button" color="primary" @click="borrowBookAction">确认借书</mu-button>

        <br>
        <a>对借书有疑问？去问问牛牛小助手</a>

      </div>

    </mu-container>
  </div>
</template>

<script>
import { getNextMonth } from "@/utils/time";
import { reqBookDetail, borrowBook } from "@/api/book";

export default {
  data() {
    return {
      bookNo: "图书评论（0）",
      bookDetail: {},
      beginDate: "",
      endDate: ""
    };
  },
  mounted() {
    let myDate = new Date();
    this.beginDate = myDate
      .toLocaleDateString()
      .split("/")
      .join("-");
    this.endDate = getNextMonth(this.beginDate);
    this.reqBookDetailAction();
  },
  methods: {
    goBack() {
      this.$router.back(-1);
    },
    reqBookDetailAction() {
      reqBookDetail(this.$store.state.storeMsg)
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
        bookNo: this.$store.state.storeMsg,
        userNo: '19145',
        beginDate: this.beginDate,
        endDate: this.endDate
      }
      console.log(info)
      borrowBook(info)
        .then(response => {
          this.$router.push({ name: "BorrowSuccess" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.content {
  margin-top: 58px;
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
  margin-bottom: 30px;
}
</style>
