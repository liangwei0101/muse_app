<template>
    <div>
        <div>
            <mu-paper :z-depth="1" class="demo-list-wrap">
                <mu-appbar color="cyan">
                    <mu-button icon slot="left">
                        <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    Inbox
                    <mu-button icon slot="right">
                        <mu-icon value="search"></mu-icon>
                    </mu-button>
                </mu-appbar>
                <mu-list textline="two-line">
                    <mu-list-item avatar :ripple="false" button>
                        <mu-list-item-action>
                            <mu-avatar>
                                <img src="http://101.132.124.171:8000/bookInfo.jpg">
                            </mu-avatar>
                        </mu-list-item-action>
                        <mu-list-item-content>
                            <mu-list-item-title>{{book.bookName}}</mu-list-item-title>
                            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：{{book.author}}</mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-after-text>{{book.endDate}}</mu-list-item-after-text>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider/>
                    <mu-list-item avatar :ripple="false" button>
                        <mu-badge :content="`评分:${book.bookScore}`" color="cyan"></mu-badge>
                        <mu-list-item-content class="slider">
                            <mu-slider v-model="book.bookScore"></mu-slider>
                        </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
                <mu-divider/>
                <div class="inputComment">
                    <mu-text-field multi-line v-model="book.commentContent" :rows="8" placeholder="（选填）请发表你的看法" solo full-width class="demo-divider-form"></mu-text-field>
                </div>
            </mu-paper>
        </div>
        <div class="button">
            <mu-button large color="cyan" @click="addBookCommentAction">提交</mu-button>
            <mu-snackbar position="bottom" :open.sync="normal.open">
                {{normal.message}}
                <mu-button flat slot="action" color="secondary" @click="normal.open = false">关闭</mu-button>
            </mu-snackbar>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
import { addBookComment } from "@/api/book";
import Vue from "vue";
import rate from "vue-rate";
Vue.use(rate);

export default {
  data() {
    return {
      value2: 50,
      shift: "index",
      active2: 0,
      selects: null,
      positions: [
        "top-start",
        "top",
        "top-end",
        "bottom-start",
        "bottom",
        "bottom-end"
      ],
      normal: {
        message: "已退还押金20经验值！",
        open: false,
        timeout: 3000
      },
      book: {
        bookName: "",
        bookNo: "",
        bookScore: 0,
        commentContent: "",
        commentId: "",
        author: "",
        endDate: "",
        userId: ""
      }
    };
  },
  mounted() {
    this.book.userId = Cookies.get("userId");
    this.book.bookName = Cookies.get("bookName");
    this.book.bookNo = Cookies.get("bookNo");
    this.book.author = Cookies.get("author");
    this.book.endDate = Cookies.get("endDate");
    this.book.bookScore = 50;
  },
  methods: {
    openNormalSnackbar() {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
    },
    addBookCommentAction() {
      console.log(this.book);
      this.book.commentId = 0;
      addBookComment(this.book)
        .then(response => {
          this.openNormalSnackbar();
          setTimeout(() => {
            this.$router.back(-1);
          }, 1200);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onAfterRate(rate) {
      alert(rate);
    }
  }
};
</script>

<style>
@import "../styles/global.css";

.inputComment {
  padding-left: 10px;
  padding-right: 10px;
}

.button {
  margin-top: 30px;
  margin-bottom: 30px;
}
.slider {
  padding-top: 20px;
  padding-left: 10px;
}
</style>