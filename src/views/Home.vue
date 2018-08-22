<template>
  <div class="home">

    <mu-paper :z-depth="1" class="demo-list-wrap">
      <mu-appbar color="primary">
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

      <mu-list textline="three-line">
        <mu-sub-header>今天</mu-sub-header>

        <mu-list-item-action v-for="(book,index) in booDatakList" :key="index">
          <mu-list-item avatar="" :ripple="false" button>
            <mu-list-item-action>
              <mu-avatar>
                <img src="http://101.132.124.171:8000/book.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{book.name}}</mu-list-item-title>
              <mu-list-item-sub-title>
                <span style="color: rgba(0, 0, 0, .87)">{{book.author}}</span>
                <br> {{book.introduce}}
              </mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-divider/>
        </mu-list-item-action>

      </mu-list>

    </mu-paper>
  </div>
</template>

<script>
// @ is an alias to /src
import { bookList } from "@/api/book";

export default {
  data() {
    return {
      booDatakList: [],
      images: [
        "http://101.132.124.171:8000/1.jpg",
        "http://101.132.124.171:8000/2.jpg",
        "http://101.132.124.171:8000/3.jpg"
      ]
    };
  },
  mounted() {
    bookList()
      .then(response => {
        this.booDatakList = response.data;
        console.log(this.booDatakList);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.appbar {
  height: 200px;
}
.swipper {
  margin-left: 1px;
  margin-right: 1px;
  margin-top: -5px;
}

.demo-list-wrap {
  height: 100%;
}
</style>