<template>
    <div>
        <mu-appbar class="top" color="cyan">
            <mu-button icon slot="left" @click="goBack">
                <mu-icon value="chevron_left"></mu-icon>
            </mu-button>
            图书详情
            <mu-button flat slot="right">
            </mu-button>
        </mu-appbar>
        <br>

        <div class="images">
            <mu-flex justify-content="center">
                <mu-grid-list class="gridlist-demo">
                    <mu-grid-tile :cols="2">
                        <img :src="bookDetail.url" />
                        <span slot="title">{{bookDetail.name}}</span>
                        <span slot="subTitle">by
                            <b>{{bookDetail.author}}</b>
                        </span>
                        <mu-button slot="action" icon>
                            <mu-icon color="pink" value="star_border"></mu-icon>
                        </mu-button>
                    </mu-grid-tile>
                </mu-grid-list>
            </mu-flex>
        </div>

        <div class="love">
            <mu-list>
                <mu-list-item button :ripple="false">
                    <mu-list-item-title>{{bookDetail.bookAverageScore}}分</mu-list-item-title>
                    <mu-list-item-sub-title>
                        已有{{bookDetail.bookLoveCount}}人喜欢
                    </mu-list-item-sub-title>
                </mu-list-item>
            </mu-list>
            <mu-divider/>
        </div>

        <div class="tab">
            <mu-tabs :value.sync="active1" inverse>
                <mu-tab>图书介绍</mu-tab>
                <mu-tab>{{commentCount}}</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active1 === 0">
                <p>{{bookDetail.introduce}}</p>
            </div>
            <div v-if="active1 === 1">
                <mu-list textline="three-line">
                    <div v-for="(item) in bookDetail.bookCommentList" :key="item.comment_id">
                        <mu-list-item :avatar="false" :ripple="false" button>
                            <mu-list-item-action>
                                <mu-avatar>
                                    <img src="http://101.132.124.171:8000/bookInfo.jpg">
                                </mu-avatar>
                            </mu-list-item-action>
                            <mu-list-item-content>
                                <mu-list-item-title>{{item.userId}}</mu-list-item-title>
                                <mu-list-item-sub-title>
                                    <span style="color: rgba(0, 0, 0, .87)">{{item.commentContent}}</span>
                                </mu-list-item-sub-title>
                                <mu-list-item-sub-title>
                                    <span>{{item.commentTime}}</span>
                                </mu-list-item-sub-title>
                            </mu-list-item-content>
                            <mu-list-item-action>
                                <mu-list-item-after-text>{{item.bookScore}}分</mu-list-item-after-text>
                            </mu-list-item-action>
                        </mu-list-item>
                        <mu-divider></mu-divider>
                    </div>
                </mu-list>
            </div>
        </div>

        <mu-flex class="bottom" align-items="center">
            <mu-flex justify-content="center" fill>
                <mu-button large flat>
                    <mu-icon size="20" color="yellow700" value="star"></mu-icon>
                    喜欢
                </mu-button>
            </mu-flex>
            <mu-flex justify-content="center" fill>
                <mu-button @click="goBorrowBook" large flat color="cyan">立即借阅</mu-button>
            </mu-flex>
        </mu-flex>

        <!-- <mu-container class="bottom">
            <mu-bottom-nav>
                <mu-bottom-nav-item title="喜欢" icon="favorite"></mu-bottom-nav-item>
                <button title="立即订阅" icon="local_grocery_store" @click="goBorrowBook">立即订阅</button>
            </mu-bottom-nav>
        </mu-container> -->
    </div>

</template>

<script>
import Cookies from "js-cookie";
import { reqBookDetail } from "@/api/book";

export default {
  data() {
    return {
      bookNo: "图书评论（0）",
      commentCount: "0",
      bookDetail: {},
      booDatakList: [],
      bookInfo: {
        url: "http://101.132.124.171:8000/2.jpg",
        name: "晴天",
        author: "周杰伦",
        featured: true
      },
      shift: "index",
      active1: 0,
      bookNo: ""
    };
  },
  mounted() {
    this.bookNo = Cookies.get("storeMsg");
    this.reqBookDetailAction();
  },
  methods: {
    reqBookDetailAction() {
      reqBookDetail(this.bookNo)
        .then(response => {
          console.log(response.data);
          this.bookDetail = response.data;
          this.commentCount =
            "图书评论（" + this.bookDetail.bookCommentList.length + "）";
        })
        .catch(err => {
          console.log(err);
        });
    },
    goBack() {
      this.$router.back(-1);
    },
    goBorrowBook() {
      this.$router.push({ name: "BorrowConfirm" });
    }
  }
};
</script>

<style>
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  max-width: 100%;
}
.mu-container {
  margin-top: 28px;
  width: 100% !important;
}
.card {
  margin-top: 36px;
  width: 100%;
  padding-left: 2px;
  padding-right: 2px;
}
.bottom {
  position: fixed;
  z-index: 40;
  width: 100%;
  max-width: 100%;
  bottom: 0px;
  background-color: transparent;
}
.love {
  width: 100%;
  max-width: 100%;
}
.chip {
  z-index: 20;
}
.demo-text {
  padding: 16px;
  background: transparent;
  text-align: left;
}
.tab {
  padding-bottom: 53px;
}
.images {
  margin-top: 38px;
}
</style>