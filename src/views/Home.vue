<template>
  <mu-paper :z-depth="1" class="demo-list-wrap">

    <mu-appbar class="top" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      图书借阅
      <mu-button flat slot="right">想看</mu-button>
    </mu-appbar>

    <mu-divider></mu-divider>

    <div class="swipper">
      <mu-carousel hide-indicators style="height:200px" class="appbar">
        <mu-carousel-item v-for="(image,index) in images" :key="index">
          <img :src="image">
        </mu-carousel-item>
      </mu-carousel>
    </div>

    <mu-list textline="two-line" v-show="newBookListIsShow">
      <mu-sub-header>新书上架</mu-sub-header>
      <mu-divider/>

      <div v-for="(item,index) in newBookList" :key="index">
        <mu-list-item avatar :ripple="false" button @click="goToBookDetail(item.no)">
          <mu-list-item-action>
            <mu-avatar>
              <img :src=item.url>
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：{{item.author}}</mu-list-item-sub-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
              架上剩余：{{item.bookCount}}本
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-list-item-after-text>{{item.bookAverageScore}}分</mu-list-item-after-text>
            <div>
              <mu-icon size='12' left value="favorite_border"></mu-icon>
              {{item.bookThumbsCount}}
              <mu-icon size='12' left value="mode_comment"></mu-icon>
              {{item.bookCommentCount}}
            </div>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider/>
      </div>
    </mu-list>

    <mu-list textline="two-line">
      <mu-sub-header>全部图书</mu-sub-header>
      <mu-divider/>

      <div v-for="(item,index) in bookList" :key="index">
        <mu-list-item avatar :ripple="false" button @click="goToBookDetail(item.no)">
          <mu-list-item-action>
            <mu-avatar>
              <img :src=item.url>
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：{{item.author}}</mu-list-item-sub-title>
            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
              架上剩余：{{item.bookCount}}本
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-list-item-after-text>{{item.bookAverageScore}}分</mu-list-item-after-text>
            <div>
              <mu-icon size='12' left value="favorite_border"></mu-icon>
              {{item.bookThumbsCount}}
              <mu-icon size='12' left value="mode_comment"></mu-icon>
              {{item.bookCommentCount}}
            </div>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider/>
      </div>
    </mu-list>

    <!-- <mu-container class="bottom">
      <mu-bottom-nav :value.sync="shift" shift>
        <mu-bottom-nav-item value="index" title="首页" icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="music" title="商城 " icon="local_grocery_store"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="books" title="联系人" icon="account_box"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="pictures" title="我的" icon="perm_identity"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container> -->

  </mu-paper>
</template>

<script>
import { reqBookCountList } from "@/api/book";

export default {
  data() {
    return {
      newBookList: [],
      bookList: [],
      images: [
        "http://101.132.124.171:8000/1.jpg",
        "http://101.132.124.171:8000/2.jpg",
        "http://101.132.124.171:8000/3.jpg"
      ],
      shift: "index",
      newBookListIsShow: false
    };
  },
  mounted() {
    console.log(this.$store.state.storeMsg);
    this.reqBookCountListAction();
  },
  methods: {
    goToBookDetail(arg) {
      this.$store.commit('setStoreMsg',arg);
      this.$router.push({ name: "HomeDetail", params: { bookNo: arg } });
    },
    reqBookCountListAction() {
      reqBookCountList()
        .then(response => {
          this.bookList = response.data;
          this.newBookList = this.bookList.slice(0, 2);
          if(this.newBookList.length > 0){
            this.newBookListIsShow = true;
          }
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.swipper {
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 48px;
}

.demo-list-wrap {
  height: 100%;
  margin-bottom: 45px;
}
.top {
  position: fixed;
  z-index: 40;
  width: 100%;
  max-width: 100%;
  top: 0px;
}
.bottom {
  position: fixed;
  z-index: 40;
  width: 100%;
  max-width: 100%;
  background-color: #2196f3;
  bottom: 0px;
}
.mu-list {
}
</style>