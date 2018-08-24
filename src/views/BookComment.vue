<template>
    <div>
        <div>
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

                <mu-list textline="two-line">
                    <mu-list-item avatar :ripple="false" button>
                        <mu-list-item-action>
                            <mu-avatar>
                                <img src="http://101.132.124.171:8000/bookInfo.jpg">
                            </mu-avatar>
                        </mu-list-item-action>
                        <mu-list-item-content>
                            <mu-list-item-title>java数据库系统开发实例导航</mu-list-item-title>
                            <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">作者：王小明</mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-after-text>3月1日</mu-list-item-after-text>
                        </mu-list-item-action>
                    </mu-list-item>

                    <mu-divider></mu-divider>

                    <mu-list-item avatar :ripple="false" button>
                        <mu-list-item-content>
                            <rate :length="5" :value="2.5" />
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-action>
                                <mu-badge content="2分" color="primary"></mu-badge>
                            </mu-list-item-action>
                        </mu-list-item-action>
                    </mu-list-item>
                    <!-- <mu-list-item avatar :ripple="false" button>
                        <mu-text-field multi-line :rows="3" placeholder="Input One" solo full-width class="demo-divider-form"></mu-text-field>
                    </mu-list-item> -->
                </mu-list>
                <mu-divider></mu-divider>
                <div class="inputComment">
                    <mu-text-field multi-line :rows="8" placeholder="（选填）请发表你的看法" solo full-width class="demo-divider-form"></mu-text-field>
                </div>
            </mu-paper>
        </div>

        <div class="button">
            <mu-button large color="primary" @click="openNormalSnackbar">提交</mu-button>

            <mu-snackbar position="bottom" :open.sync="normal.open">
                {{normal.message}}
                <mu-button flat slot="action" color="secondary" @click="normal.open = false">关闭</mu-button>
            </mu-snackbar>
        </div>
    </div>

</template>

<script>
import Vue from "vue";
import rate from "vue-rate";
Vue.use(rate);

export default {
  data() {
    return {
      shift: "index",
      active2: 0,
      selects: null,
      positions: [
        "top-start",
        "top",
        "top-end",
        "bottom-start",
        "bottom",
        "bottom-end"
      ],
      normal: {
        message: "已退还押金20经验值！",
        open: false,
        timeout: 3000
      }
    };
  },
  mounted() {},
  methods: {
    openNormalSnackbar() {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
    }
  }
};
</script>

<style>
@import "../styles/global.css";

.inputComment {
  padding-left: 10px;
  padding-right: 10px;
}

.button {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>