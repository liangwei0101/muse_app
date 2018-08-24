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
                <mu-tab>全部</mu-tab>
                <mu-tab>待取书</mu-tab>
                <mu-tab>未还书</mu-tab>
                <mu-tab>待评价</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active2 === 0">
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
                            <mu-list-item-sub-title>
                                状态：待取书
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-after-text>3月1日</mu-list-item-after-text>
                            <mu-button small color="primary">
                                <mu-icon left value="grade"></mu-icon>
                                取消
                            </mu-button>
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
                            <mu-list-item-sub-title>
                                状态：待取书
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-after-text>3月1日</mu-list-item-after-text>
                            <mu-button small color="primary">
                                <mu-icon left value="grade"></mu-icon>
                                续借
                            </mu-button>
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
                            <mu-list-item-sub-title>
                                状态：待取书
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-after-text>3月1日</mu-list-item-after-text>
                            <mu-button small color="primary">
                                <mu-icon left value="grade"></mu-icon>
                                评价
                            </mu-button>
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
                            <mu-list-item-sub-title>
                                状态：待取书
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-after-text>3月1日</mu-list-item-after-text>
                            <mu-button small color="primary">
                                <mu-icon left value="grade"></mu-icon>
                                评价
                            </mu-button>
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
                            <mu-list-item-sub-title>
                                状态：待取书
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-after-text>3月1日</mu-list-item-after-text>
                            <mu-button small color="primary">
                                <mu-icon left value="grade"></mu-icon>
                                评价
                            </mu-button>
                        </mu-list-item-action>
                    </mu-list-item>
                </mu-list>
            </div>
            <div class="demo-text" v-if="active2 === 1">
                <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
                <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
                <p>“那么就去地狱找到你，我绝对不逃！”</p>
                <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
            </div>
            <div class="demo-text" v-if="active2 === 2">
                <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
                <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
                <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
                <p>“也许吧，未来……给你了。”</p>
            </div>
            <div class="demo-text" v-if="active2 === 3">
                <p>“今天月色真美。”</p>
            </div>
        </mu-container>

        <!-- <mu-list textline="three-line">
            <mu-sub-header>今天</mu-sub-header>
            <mu-list-item avatar :ripple="false" button>
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="http://101.132.124.171:8000/bookInfo.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
                    <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item avatar :ripple="false" button>
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="http://101.132.124.171:8000/bookInfo.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>Alex Qin</mu-list-item-title>
                    <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span><br/> 我们去看电影，最近有部烂片上映，又有吐槽的了
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item avatar :ripple="false" button>
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="http://101.132.124.171:8000/bookInfo.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>LOL</mu-list-item-title>
                    <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/> 周末一起 LOL
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item avatar :ripple="false" button>
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="http://101.132.124.171:8000/bookInfo.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>LOL</mu-list-item-title>
                    <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
        </mu-list> -->

    </mu-paper>
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
  mounted() {}
};
</script>

<style>
@import "../styles/global.css";

.demo-list-wrap {
  width: 100%;
  overflow: hidden;
}
</style>