<template>
    <mu-paper :z-depth="1" class="demo-list-wrap">
        <mu-appbar color="cyan">
            <mu-button icon slot="left" @click="goBack">
                <mu-icon value="chevron_left"></mu-icon>
            </mu-button>
            Inbox
            <mu-button icon slot="right" @click="goToWantReadAdd">
                <mu-icon value="add"></mu-icon>
            </mu-button>
        </mu-appbar>
        <mu-container class="tab">
            <mu-tabs color="rgba(0, 0, 0, .54)" :value.sync="active2" indicator-color="yellow" full-width>
                <mu-tab>想看图书</mu-tab>
                <mu-tab>我的推荐</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active2 === 0">
                <mu-list textline="three-line" v-for="item in wantReadBookList" :key="item.bookNo">
                    <mu-list-item avatar :ripple="false" button>
                        <mu-list-item-content>
                            <mu-list-item-title>书名：{{item.bookName}}</mu-list-item-title>
                            <mu-list-item-sub-title>
                                <span style="color: rgba(0, 0, 0, .87)">理由：{{item.reason}}</span>
                            </mu-list-item-sub-title>
                            <mu-list-item-sub-title>
                                <span>推荐人：{{item.userId}}</span>
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-after-text></mu-list-item-after-text>
                            <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
                            <mu-list-item-after-text>点赞：15</mu-list-item-after-text>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                </mu-list>
            </div>
            <div class="demo-text" v-if="active2 === 1">
                <mu-list textline="three-line" v-for="item in wantReadBookList" :key="item.bookNo">
                    <mu-list-item avatar :ripple="false" button>
                        <mu-list-item-content>
                            <mu-list-item-title>书名：{{item.bookName}}</mu-list-item-title>
                            <mu-list-item-sub-title>
                                <span style="color: rgba(0, 0, 0, .87)">理由：{{item.reason}}</span>
                            </mu-list-item-sub-title>
                            <mu-list-item-sub-title>
                                <span>推荐人：{{item.userId}}</span>
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-after-text></mu-list-item-after-text>
                            <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
                            <mu-list-item-after-text>点赞：15</mu-list-item-after-text>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                </mu-list>
            </div>
        </mu-container>
    </mu-paper>
</template>

<script>
import { reqWantReadBook } from "@/api/book";
export default {
  data() {
    return {
      shift: "index",
      active2: 0,
      selects: null,
      wantReadBookList: [],
      myRecommendList: []
    };
  },
  mounted() {
    this.reqWantReadBookAction();
  },
  methods: {
    reqWantReadBookAction() {
      reqWantReadBook(this.bookName)
        .then(response => {
          console.log(response.data);
          this.wantReadBookList = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    goToWantReadAdd() {
      this.$router.push({ name: "WantReadBook" });
    },
    goBack() {
      this.$router.back(-1);
    }
  }
};
</script>

<style>
@import "../styles/global.css";

.demo-list-wrap {
  width: 100%;
  overflow: hidden;
}
.tab {
  width: 100%;
}
</style>