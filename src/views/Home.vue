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

    <mu-list textline="two-line">
      <mu-sub-header>新书上架</mu-sub-header>
      <mu-divider/>
      <mu-list-item avatar :ripple="false" button @click="goToBookDetail">
        <mu-list-item-action>
          <mu-avatar>
            <img src="http://101.132.124.171:8000/bookInfo.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>java数据库系统开发实例导航</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：王小明</mu-list-item-sub-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
            架上剩余：2本
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>8.0分</mu-list-item-after-text>
          <div>
            <mu-icon size='12' left value="favorite_border"></mu-icon>
            12
            <mu-icon size='12' left value="mode_comment"></mu-icon>
            14
          </div>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="http://101.132.124.171:8000/bookInfo.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>java数据库系统开发实例导航</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：王小明</mu-list-item-sub-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
            架上剩余：2本
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>8.0分</mu-list-item-after-text>
          <div>
            <mu-icon size='12' left value="favorite_border"></mu-icon>
            12
            <mu-icon size='12' left value="mode_comment"></mu-icon>
            14
          </div>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="http://101.132.124.171:8000/bookInfo.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>java数据库系统开发实例导航</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：王小明</mu-list-item-sub-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
            架上剩余：2本
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>8.0分</mu-list-item-after-text>
          <div>
            <mu-icon size='12' left value="favorite_border"></mu-icon>
            12
            <mu-icon size='12' left value="mode_comment"></mu-icon>
            14
          </div>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
    </mu-list>

    <mu-list textline="two-line">
      <mu-sub-header>全部图书</mu-sub-header>
      <mu-divider/>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="http://101.132.124.171:8000/bookInfo.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>java数据库系统开发实例导航</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：王小明</mu-list-item-sub-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
            架上剩余：2本
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>8.0分</mu-list-item-after-text>
          <div>
            <mu-icon size='12' left value="favorite_border"></mu-icon>
            12
            <mu-icon size='12' left value="mode_comment"></mu-icon>
            14
          </div>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="http://101.132.124.171:8000/bookInfo.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>java数据库系统开发实例导航</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：王小明</mu-list-item-sub-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
            架上剩余：2本
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>8.0分</mu-list-item-after-text>
          <div>
            <mu-icon size='12' left value="favorite_border"></mu-icon>
            12
            <mu-icon size='12' left value="mode_comment"></mu-icon>
            14
          </div>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="http://101.132.124.171:8000/bookInfo.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>java数据库系统开发实例导航</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：王小明</mu-list-item-sub-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
            架上剩余：2本
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>8.0分</mu-list-item-after-text>
          <div>
            <mu-icon size='12' left value="favorite_border"></mu-icon>
            12
            <mu-icon size='12' left value="mode_comment"></mu-icon>
            14
          </div>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="http://101.132.124.171:8000/bookInfo.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>java数据库系统开发实例导航</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：王小明</mu-list-item-sub-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
            架上剩余：2本
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>8.0分</mu-list-item-after-text>
          <div>
            <mu-icon size='12' left value="favorite_border"></mu-icon>
            12
            <mu-icon size='12' left value="mode_comment"></mu-icon>
            14
          </div>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="http://101.132.124.171:8000/bookInfo.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>java数据库系统开发实例导航</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：王小明</mu-list-item-sub-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
            架上剩余：2本
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>8.0分</mu-list-item-after-text>
          <div>
            <mu-icon size='12' left value="favorite_border"></mu-icon>
            12
            <mu-icon size='12' left value="mode_comment"></mu-icon>
            14
          </div>
        </mu-list-item-action>
      </mu-list-item>
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
import { reqBookList } from "@/api/book";

export default {
    data() {
        return {
            booDatakList: [],
            images: [
                "http://101.132.124.171:8000/1.jpg",
                "http://101.132.124.171:8000/2.jpg",
                "http://101.132.124.171:8000/3.jpg"
            ],
            shift: "index"
        };
    },
    mounted() {
        reqBookList()
            .then(response => {
                this.booDatakList = response.data;
                console.log(this.booDatakList);
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
      goToBookDetail () {
        this.$router.push({ name: 'HomeDetail', params: { userId: '111' }})
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