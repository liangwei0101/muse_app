<template>
  <mu-paper :z-depth="1" class="demo-list-wrap">
    <mu-appbar color="cyan">
      <mu-button icon slot="left" @click="goToBack">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      我的
      <mu-button icon slot="right">
        <mu-icon value="search"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-container class="tab">
      <mu-tabs color="rgba(0, 0, 0, .54)" :value.sync="active2" indicator-color="yellow" full-width>
        <mu-tab>全部</mu-tab>
        <mu-tab>待取书</mu-tab>
        <mu-tab>未还书</mu-tab>
        <mu-tab>待评价</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active2 === 0">
        <mu-list textline="three-line">
          <div v-for="item in BookBorrowList" :key="item.bookName">
            <mu-list-item avatar :ripple="false" button>
              <mu-list-item-action @click="goToBorrowDetail">
                <mu-avatar>
                  <img src="http://101.132.124.171:8000/bookInfo.jpg">
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content @click="goToBorrowDetail">
                <mu-list-item-title>{{item.bookName}}</mu-list-item-title>
                <mu-list-item-sub-title> 作者：{{item.author}} &nbsp; 状态：{{item.bookStatus}}</mu-list-item-sub-title>
                <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87);">
                  {{item.toolTip}}
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-list-item-after-text class="text">{{item.endDate}}</mu-list-item-after-text>
                <mu-button @click="buttonClick(item)" flat color="cyan" v-show="item.isShow">
                  {{item.operation}}
                </mu-button>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
          </div>
        </mu-list>
      </div>
      <div class="demo-text" v-if="active2 === 1">
        <mu-list textline="three-line">
          <div v-for="item in dealWithList" :key="item.bookName">
            <mu-list-item avatar :ripple="false" button>
              <mu-list-item-action @click="goToBorrowDetail">
                <mu-avatar>
                  <img src="http://101.132.124.171:8000/bookInfo.jpg">
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content @click="goToBorrowDetail">
                <mu-list-item-title>{{item.bookName}}</mu-list-item-title>
                <mu-list-item-sub-title> 作者：{{item.author}} &nbsp; 状态：{{item.bookStatus}}</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  {{item.toolTip}}
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-list-item-after-text class="text">{{item.endDate}}</mu-list-item-after-text>
                <mu-button @click="buttonClick(item)" flat color="cyan" v-show="item.isShow">
                  {{item.operation}}
                </mu-button>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
          </div>
        </mu-list>
      </div>
      <div class="demo-text" v-if="active2 === 2">
        <mu-list textline="three-line">
          <div v-for="item in notReturnList" :key="item.bookName">
            <mu-list-item avatar :ripple="false" button>
              <mu-list-item-action @click="goToBorrowDetail">
                <mu-avatar>
                  <img src="http://101.132.124.171:8000/bookInfo.jpg">
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content @click="goToBorrowDetail">
                <mu-list-item-title>{{item.bookName}}</mu-list-item-title>
                <mu-list-item-sub-title> 作者：{{item.author}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 状态：{{item.bookStatus}}</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  {{item.toolTip}}
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-list-item-after-text class="text">{{item.endDate}}</mu-list-item-after-text>
                <mu-button @click="buttonClick(item)" flat color="cyan" v-show="item.isShow">
                  {{item.operation}}
                </mu-button>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
          </div>
        </mu-list>
      </div>
      <div class="demo-text" v-if="active2 === 3">
        <mu-list textline="two-line">
          <div v-for="item in notComment" :key="item.bookName">
            <mu-list-item avatar :ripple="false" button>
              <mu-list-item-action @click="goToBorrowDetail">
                <mu-avatar>
                  <img src="http://101.132.124.171:8000/bookInfo.jpg">
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content @click="goToBorrowDetail">
                <mu-list-item-title>{{item.bookName}}</mu-list-item-title>
                <mu-list-item-sub-title> 作者：{{item.author}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 状态：{{item.bookStatus}}</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  {{item.toolTip}}
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-list-item-after-text class="text">{{item.endDate}}</mu-list-item-after-text>
                <mu-button @click="buttonClick(item)" flat color="cyan" v-show="item.isShow">
                  {{item.operation}}
                </mu-button>
              </mu-list-item-action>
            </mu-list-item>
            <mu-divider></mu-divider>
          </div>
        </mu-list>
      </div>
    </mu-container>
  </mu-paper>
</template>

<script>
import Cookies from "js-cookie";
import { reqBookBorrowList } from "@/api/book";
import "muse-ui-message/dist/muse-ui-message.css";
import Vue from "vue";
import Message from "muse-ui-message";
import Toast from "muse-ui-toast";
Vue.use(Message);
Vue.use(Toast);

export default {
  data() {
    return {
      shift: "index",
      active2: 0,
      selects: null,
      userId: "",
      BookBorrowList: [],
      dealWithList: [],
      notReturnList: [],
      notComment: []
    };
  },
  mounted() {
    this.userId = Cookies.get("userId");
    this.reqBookBorrowListAction();
  },
  methods: {
    reqBookBorrowListAction() {
      reqBookBorrowList(this.userId)
        .then(response => {
          this.BookBorrowList = response.data;
          this.setDataList();
        })
        .catch(err => {
          console.log(err);
        });
    },
    setDataList() {
      console.log(this.BookBorrowList);
      this.BookBorrowList.forEach(element => {
        element.bookStatus = this.setStatus(element.status);
        element.operation = this.setOpertion(element.status);
        element.toolTip = this.setToolTip(element.status, element.days);
        element.isShow = element.status == "5" ? false : true;
        element.endDate = element.endDate.slice(5);
        if (element.status == "1") {
          this.dealWithList.push(element);
        } else if (element.status == "2") {
          this.notReturnList.push(element);
        } else if (element.status == "3") {
          this.notComment.push(element);
        }
      });
    },
    setStatus(status) {
      var str = "";
      if (status == "1") {
        str = "待取书";
      } else if (status == "2") {
        str = "未还书";
      } else if (status == "3") {
        str = "待评价";
      } else if (status == "4") {
        str = "已还书";
      } else if (status == "5") {
        str = "已过期";
      }
      return str;
    },
    setOpertion(status) {
      var str = "";
      if (status == "1") {
        str = "取消";
      } else if (status == "2") {
        str = "续借";
      } else if (status == "3") {
        str = "评价";
      } else if (status == "4") {
        str = "删除记录";
      } else if (status == "5") {
        str = "false";
      }
      return str;
    },
    setToolTip(status, days) {
      var str = "";
      if (status == "2") {
        str = "还有" + days + "天到期";
      } else if (status == "3") {
        str = "过期天数" + days + "，扣除经验值:" + days;
      } else str = "";
      return str;
    },
    buttonClick(item) {
      if (item.status == "1") {
        this.confirm();
      } else if (item.status == "2") {
        this.alert();
      } else if (item.status == "3") {
        this.$store.commit("setAuthor", item.author);
        this.$store.commit("setBookName", item.bookName);
        this.$store.commit("setBookNo", item.bookNo);
        this.$store.commit("setEndDate", item.endDate);
        console.log(item.endDate);
        this.$router.push({ name: "BookComment" });
      } else if (item.status == "4") {
        this.delComfirm();
      }
    },
    confirm() {
      this.$confirm("确定要取消借阅？", "提示", {
        type: "warning"
      }).then(({ result }) => {
        if (result) {
          Toast.message("操作成功！");
          this.$router.push({ name: "BorrowDetail" });
        } else {
        }
      });
    },
    alert() {
      this.$alert(
        "续借成功\n还书日期推迟为：2015／05/03请及时归还书籍，逾期不还，将会扣除你的经验值哦～",
        "提示",
        {
          okLabel: "知道了"
        }
      ).then(() => {
        this.$toast.message("提示信息");
      });
    },
    delComfirm() {
      this.$confirm("确定要删除？", "提示", {
        type: "warning"
      }).then(({ result }) => {
        if (result) {
          Toast.message("操作成功！");
        } else {
        }
      });
    },
    goToBorrowDetail() {
      this.$router.push({ name: "BorrowDetail" });
    },
    goToBack() {
      this.$router.back(-1);
    },
  }
};
</script>

<style>
@import "../styles/global.css";

.demo-list-wrap {
  width: 100%;
  overflow: hidden;
}
.text {
  margin-right: 25px;
}
.tab {
  height: 100%;
  padding-bottom: 0px;
}
</style>