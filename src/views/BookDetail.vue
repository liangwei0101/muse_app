<template>
    <div>
        <mu-appbar class="top" color="primary">
            <mu-button icon slot="left" @click="goBack">
                <mu-icon value="chevron_left"></mu-icon>
            </mu-button>
            图书详情
            <mu-button flat slot="right">
                <mu-icon value="blur_circular"></mu-icon>
            </mu-button>
        </mu-appbar>
        <br>

        <!-- <mu-container class="mu-container">
            <mu-card-media title="Image Title" sub-title="Image Sub Title"> -->
        <!-- <img class="card" src="http://101.132.124.171:8000/bookInfo.jpg"> -->
        <div class="images">
            <mu-flex justify-content="center">
                <mu-paper>
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
                </mu-paper>
            </mu-flex>
        </div>

        <!-- <mu-grid-list class="gridlist-inline-demo" :cols="1">
            <mu-grid-tile>
                <img :src="bookInfo.url">
                <span slot="title">{{bookInfo.name}}</span>
                <span slot="subTitle">by
                    <b>{{bookInfo.author}}</b>
                </span>
                <mu-button slot="action" icon>
                    <mu-icon value="star_border"></mu-icon>
                </mu-button>
            </mu-grid-tile>
        </mu-grid-list> -->
        <div class="love">
            <mu-paper :z-depth="1">
                <mu-list>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-title>{{bookDetail.bookAverageScore}}分</mu-list-item-title>
                        <mu-list-item-sub-title>
                            已有{{bookDetail.bookThumbsCount}}人喜欢
                        </mu-list-item-sub-title>
                    </mu-list-item>
                </mu-list>
            </mu-paper>
        </div>

        <div class="tab">
            <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)">
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
                                <mu-list-item-title>{{item.userName}}</mu-list-item-title>
                                <mu-list-item-sub-title>
                                    <span style="color: rgba(0, 0, 0, .87)">{{item.commentContent}}</span>
                                </mu-list-item-sub-title>
                                <mu-list-item-sub-title>
                                    <span>{{item.commentTime}}</span>
                                </mu-list-item-sub-title>
                            </mu-list-item-content>
                        </mu-list-item>
                        <mu-divider></mu-divider>
                    </div>
                </mu-list>
            </div>
        </div>

        <mu-container class="bottom">
            <mu-bottom-nav>
                <mu-bottom-nav-item title="喜欢" icon="favorite"></mu-bottom-nav-item>
                <button title="立即订阅" icon="local_grocery_store" @click="goBorrowBook">立即订阅</button>
            </mu-bottom-nav>
        </mu-container>
    </div>

    <!-- <mu-grid-list class="card-image">
            <mu-grid-tile class="card-image" title-position="top" action-position="left" :rows="bookInfo.featured ? 2 : 1" :cols="bookInfo.featured ? 2 : 1">
                <span slot="title">{{bookInfo.name}}</span>
                <span slot="subTitle">by
                    <b>{{bookInfo.author}}</b>
                </span>
                <mu-button slot="action" icon>
                    <mu-icon value="star_border"></mu-icon>
                </mu-button>
                <img class="images" :src="bookInfo.url" />
            </mu-grid-tile>
        </mu-grid-list>

        <mu-list>
            <mu-list-item button :ripple="false">
                <mu-list-item-title>All mail</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
            </mu-list-item>

        </mu-list>

        <mu-container class="bottom">
            <mu-bottom-nav :value.sync="shift" shift>
                <mu-bottom-nav-item value="index" title="首页" icon="home"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="music" title="商城 " icon="local_grocery_store"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="books" title="联系人" icon="account_box"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="pictures" title="我的" icon="perm_identity"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container> -->

</template>

<script>
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
      active1: 0
    };
  },
  mounted() {
    this.reqBookDetailAction();
  },
  methods: {
    reqBookDetailAction() {  
      reqBookDetail(this.$store.state.storeMsg)
        .then(response => {
          this.bookDetail = response.data;
          this.commentCount = "图书评论（" + this.bookDetail.bookCommentList.length + "）";
        })
        .catch(err => {
          console.log(err);
        });
    },
    goBack() {
      this.$router.back(-1);
    },
    goBorrowBook () {
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
  background-color: #fff;
  bottom: 0px;
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
  background: #fff;
  text-align: left;
}
.tab {
  padding-bottom: 53px;
}
.images {
  margin-top: 38px;
}
</style>