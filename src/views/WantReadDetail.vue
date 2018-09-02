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

            <div class="content">
                <mu-divider></mu-divider>
                <mu-list>
                    <mu-list-item>
                        <mu-list-item-content>
                            <mu-list-item-title>书名：{{bookName}}</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
                <mu-divider></mu-divider>
                <mu-text-field label="理由" class="input" full-width v-model="reason" placeholder="简单说明想看的理由" multi-line :rows="4" :max-length="40"></mu-text-field><br/>
                <mu-button class="button" color="primary" @click="addWantReadBookAction()">下一步</mu-button>
            </div>
        </mu-container>
    </div>
</template>

<script>
import "muse-ui-message/dist/muse-ui-message.css";
import Vue from "vue";
import Message from "muse-ui-message";
Vue.use(Message);
import { reqWantReadBook, addWantReadBook } from "@/api/book";

export default {
    data() {
        return {
            time: "",
            bookName: "",
            reason: "",
            likeBookList: []
        };
    },
    mounted() {
        let myDate = new Date();
        this.bookName = this.$route.params.bookName;
    },
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
        addWantReadBookAction() {
            let wantBook = {
                bookName: this.bookName,
                reason: this.reason,
                userId: "19145"
            };
            addWantReadBook(wantBook)
                .then(response => {
                    console.log(response.data);
                    this.likeBookList = response.data;
                    this.alert();
                })
                .catch(err => {
                    console.log(err);
                });
        },
        alert() {
            this.$alert("我们会认真考虑您的需求，谢谢啦！", "提示", {
                okLabel: "提交成功"
            }).then(() => {
                
            });
        }
    }
};
</script>

<style>
.content {
    padding-top: 98px;
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
.input {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>

