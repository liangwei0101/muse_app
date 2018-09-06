<template>
    <div>
        <div>
            <mu-paper :z-depth="1" class="demo-list-wrap">

                <mu-appbar color="cyan">
                    <mu-button icon slot="left" @click="goBack">
                        <mu-icon value="chevron_left"></mu-icon>
                    </mu-button>
                    借阅详情
                    <mu-button icon slot="right">
                        <mu-icon value="search"></mu-icon>
                    </mu-button>
                </mu-appbar>

                <mu-container>
                    <div>
                        <mu-list class="badge-list-wrap">
                            <mu-list-item>
                                <mu-list-item-content>
                                    <mu-list-item-title>书名：《java数据库系统开发实例导航》</mu-list-item-title>
                                </mu-list-item-content>
                                <mu-list-item-action>
                                    <mu-badge content="名称"></mu-badge>
                                </mu-list-item-action>
                            </mu-list-item>
                            <mu-list-item>
                                <mu-list-item-content>
                                    <mu-list-item-title>书号：HSBN-1-14-2</mu-list-item-title>
                                </mu-list-item-content>
                                <mu-list-item-action>
                                    <mu-badge content="编号" color="cyan"></mu-badge>
                                </mu-list-item-action>
                            </mu-list-item>
                            <mu-list-item>
                                <mu-list-item-content>
                                    <mu-list-item-title>起始日期：2018-03-05</mu-list-item-title>
                                </mu-list-item-content>
                                <mu-list-item-action>
                                    <mu-badge content="时间" color="cyan"></mu-badge>
                                </mu-list-item-action>
                            </mu-list-item>
                            <mu-list-item>
                                <mu-list-item-content>
                                    <mu-list-item-title>到期日期：2018-03-05</mu-list-item-title>
                                </mu-list-item-content>
                                <mu-list-item-action>
                                    <mu-badge content="时间" color="cyan"></mu-badge>
                                </mu-list-item-action>
                            </mu-list-item>
                            <mu-list-item>
                                <mu-list-item-content>
                                    <mu-list-item-title>支付押金：20经验值</mu-list-item-title>
                                </mu-list-item-content>
                                <mu-list-item-action>
                                    <mu-badge content="经验" color="cyan"></mu-badge>
                                </mu-list-item-action>
                            </mu-list-item>
                        </mu-list>
                        <mu-divider></mu-divider>
                        <mu-list class="badge-list-wrap">
                            <mu-list-item>
                                <mu-list-item-content>
                                    <mu-list-item-title>借阅状态：已过期</mu-list-item-title>
                                </mu-list-item-content>
                                <mu-list-item-action>
                                    <mu-badge content="过期" color="secondary"></mu-badge>
                                </mu-list-item-action>
                            </mu-list-item>
                            <mu-list-item>
                                <mu-list-item-content>
                                    <mu-list-item-title>过期天数：12</mu-list-item-title>
                                </mu-list-item-content>
                                <mu-list-item-action>
                                    <mu-badge content="天数" color="secondary"></mu-badge>
                                </mu-list-item-action>
                            </mu-list-item>
                            <mu-list-item>
                                <mu-list-item-content>
                                    <mu-list-item-title>扣除经验值：15</mu-list-item-title>
                                </mu-list-item-content>
                                <mu-list-item-action>
                                    <mu-badge content="扣除" color="secondary"></mu-badge>
                                </mu-list-item-action>
                            </mu-list-item>
                            <mu-list-item>
                                <mu-list-item-content>
                                    <mu-list-item-title>剩余经验值：20</mu-list-item-title>
                                </mu-list-item-content>
                                <mu-list-item-action>
                                    <mu-badge content="剩余" color="cyan"></mu-badge>
                                </mu-list-item-action>
                            </mu-list-item>
                        </mu-list>
                        <mu-divider></mu-divider>
                    </div>
                </mu-container>
            </mu-paper>
        </div>

        <div>
            <div class="button">
                <mu-button large color="cyan">取消借阅</mu-button>
            </div>
            <div class="button">
                <mu-button large color="cyan">继续借阅</mu-button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      shift: "index",
      active2: 0,
      selects: null
    };
  },
  mounted() {},
  methods: {
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
.button {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>