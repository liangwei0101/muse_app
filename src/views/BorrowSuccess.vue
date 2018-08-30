<template>
    <div>
        <mu-appbar class="top" color="primary">
            <mu-button icon slot="left" @click="goBack">
                <mu-icon value="chevron_left"></mu-icon>
            </mu-button>
            图书借阅
            <mu-button flat slot="right">想看</mu-button>
        </mu-appbar>

        <mu-container>
            <div>

            </div>

            <div class="content">
              
                <mu-list>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-title>书名：</mu-list-item-title>
                        <mu-list-item-title>{{bookDetail.name}}</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-title>编号：</mu-list-item-title>
                        <mu-list-item-title>{{bookDetail.id}}</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-title>起始日期：</mu-list-item-title>
                        <mu-list-item-title>{{beginDate}}</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-title>还书日期：</mu-list-item-title>
                        <mu-list-item-title>{{endDate}}</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-title>支付押金：</mu-list-item-title>
                        <mu-list-item-title>{{bookDetail.bookCost}}分</mu-list-item-title>
                    </mu-list-item>

                </mu-list>
                <mu-divider></mu-divider>

                <mu-button class="button" color="primary">去我的借阅看看</mu-button>

                <br>
                <a>对借书有疑问？去问问牛牛小助手</a>

            </div>

        </mu-container>
    </div>
</template>

<script>
import { getNextMonth } from "@/utils/time";
import { reqBookDetail } from "@/api/book";

export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {}
};
</script>

<style>
.content {
    margin-top: 58px;
}
.top {
    position: fixed;
    z-index: 40;
    width: 100%;
    max-width: 100%;
    top: 0px;
}
.button {
    margin-top: 60px;
    width: 200px;
    margin-bottom: 30px;
}
</style>

