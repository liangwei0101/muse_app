<template>
  <div>
    <mu-appbar class="top" color="primary">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      添加想看图书
      <mu-button flat slot="right"></mu-button>
    </mu-appbar>

    <mu-container>

      <div>
        <mu-row gutter class="content">
          <mu-col span="12" lg="4" sm="6">
            <mu-text-field v-model="bookName" label="请输入想看的图书名称" full-width></mu-text-field>
          </mu-col>

        </mu-row>
        <br>
        <mu-button class="button" color="primary" @click="reqWantReadBookAction()">下一步</mu-button>

      </div>

    </mu-container>
  </div>
</template>

<script>
import { getNextMonth } from "@/utils/time";
import { reqWantReadBook } from "@/api/book";

export default {
    data() {
        return {
            bookName: ""
        };
    },
    mounted() {},
    methods: {
        goBack() {
            this.$router.back(-1);
        },
        goHome() {
            this.$router.push({
                name: "Home"
            });
        },
        goMyZone() {
            this.$router.push({
                name: "MyZone"
            });
        },
        reqWantReadBookAction() {
            reqWantReadBook(this.bookName)
                .then(response => {
                  console.log(response.data)
                    this.likeBookList = response.data;
                    if (this.likeBookList.length == 0) {
                        this.$router.push({ name: "WantReadDetail", params:{"bookName": this.bookName}});
                    }else{
                        this.$router.push({ name: "WantReadDetail",params:{"bookName": this.bookName}});
                    }
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
    padding-top: 78px;
    margin-left: 5px;
    margin-right: 5px;
}
.top {
    position: fixed;
    z-index: 40;
    width: 100%;
    max-width: 100%;
    top: 0px;
}
.button {
    margin-top: 40px;
    width: 200px;
    margin-bottom: 30px;
}
</style>

