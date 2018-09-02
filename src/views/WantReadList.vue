<template>
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
                <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
                <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
                <p>“那么就去地狱找到你，我绝对不逃！”</p>
                <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
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
.tab{
    width: 100%;
}
</style>