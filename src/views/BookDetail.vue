<template>
    <div>
        <mu-appbar class="top" color="primary">
            <mu-button icon slot="left">
                <mu-icon value="chevron_left"></mu-icon>
            </mu-button>
            图书详情
            <mu-button flat slot="right">
                <mu-icon value="blur_circular"></mu-icon>
            </mu-button>
        </mu-appbar>
        <br>

        <!-- <mu-container class="mu-container">
            <mu-card-media title="Image Title" sub-title="Image Sub Title"> -->
        <!-- <img class="card" src="http://101.132.124.171:8000/bookInfo.jpg"> -->
        <div class="images">
            <mu-flex justify-content="center">
                <mu-paper>
                    <mu-grid-list class="gridlist-demo">
                        <mu-grid-tile :cols="2">
                            <img :src="bookInfo.url" />
                            <span slot="title">{{bookInfo.name}}</span>
                            <span slot="subTitle">by
                                <b>{{bookInfo.author}}</b>
                            </span>
                            <mu-button slot="action" icon>
                                <mu-icon value="star_border"></mu-icon>
                            </mu-button>
                        </mu-grid-tile>
                    </mu-grid-list>
                </mu-paper>
            </mu-flex>
        </div>

        <!-- <mu-grid-list class="gridlist-inline-demo" :cols="1">
            <mu-grid-tile>
                <img :src="bookInfo.url">
                <span slot="title">{{bookInfo.name}}</span>
                <span slot="subTitle">by
                    <b>{{bookInfo.author}}</b>
                </span>
                <mu-button slot="action" icon>
                    <mu-icon value="star_border"></mu-icon>
                </mu-button>
            </mu-grid-tile>
        </mu-grid-list> -->
        <div>
            <mu-paper class="love" :z-depth="1">
                <mu-list>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-title>9.2分</mu-list-item-title>
                        <mu-list-item-sub-title>
                            已有1324人喜欢
                        </mu-list-item-sub-title>
                    </mu-list-item>
                </mu-list>
            </mu-paper>
        </div>

        <div class="tab">
            <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)">
                <mu-tab>图书介绍</mu-tab>
                <mu-tab>图书评论（56）</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active1 === 0">
                <p>“我们屋后有半亩隙地。母亲说：“让它荒芜着怪可惜，既然你们那么爱吃花生，就辟来做花生园吧。”我们几姊弟和几个小丫头都很喜欢——买种的买种，动土的动土，灌园的灌园；过不了几个月，居然收获了！
妈妈说：“今晚我们可以做一个收获节，也请你们爹爹来尝尝我们的新花生，如何？”我们都答应了。母亲把花生做成好几样的食品，还吩咐这节期要在园里的茅亭举行。
那晚上的天色不太好，可是爹爹也到来，实在很难得！爹爹说：“你们爱吃花生吗？”
我们都争着答应：“爱！”
“谁能把花生的好处说出来？”
姊姊说：“花生的气味很美。”
哥哥说：“花生可以制油。”
我说“无论何等人都可用贱价买它来吃；都喜欢吃它。这就是它的好处。”
爹爹说：“花生的用处固然很多；但有一样是很可贵的。这小小的豆不像那好看的苹果、桃子、石榴，把它们的果实悬在枝上，鲜红嫩绿的颜色，令人一望而发生羡慕的心。它只把果子埋在地底，等到成熟，才容人把它挖出来。你们偶然看见一棵花生瑟缩地长在地上，不能立刻辨出它有没有果实，非得等到你接触它才能知道。”
我们都说：“是的。”母亲也点点头。爹爹接下去说：“所以你们要像花生，因为它是有用的，不是伟大、好看的东西。”我说：“那么，人要做有用的人，不要做伟大、体面的人了。”爹爹说：“这是我对于你们的希望。”
我们谈到夜阑才散，所有花生食品虽然没有了，然而父亲的话现在还印在我心版上。”</p>
            </div>
            <div v-if="active1 === 1">
                <mu-list textline="three-line">
                    <mu-list-item avatar :ripple="false" button>
                        <mu-list-item-action>
                            <mu-avatar>
                                <img src="http://101.132.124.171:8000/bookInfo.jpg">
                            </mu-avatar>
                        </mu-list-item-action>
                        <mu-list-item-content>
                            <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
                            <mu-list-item-sub-title>
                                <span style="color: rgba(0, 0, 0, .87)">Mrs xu -</span> 周末我们去玩啊，要不要一起吃个饭呀，,哈哈哈哈哈哈
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
                                <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/> 周末一起玩游戏看电影啊
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
                    <mu-divider></mu-divider>
                </mu-list>
            </div>
        </div>

        <mu-container class="bottom">
            <mu-bottom-nav>
                <mu-bottom-nav-item title="喜欢" icon="favorite"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="立即订阅" icon="local_grocery_store">立即订阅</mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>

    <!-- <mu-grid-list class="card-image">
            <mu-grid-tile class="card-image" title-position="top" action-position="left" :rows="bookInfo.featured ? 2 : 1" :cols="bookInfo.featured ? 2 : 1">
                <span slot="title">{{bookInfo.name}}</span>
                <span slot="subTitle">by
                    <b>{{bookInfo.author}}</b>
                </span>
                <mu-button slot="action" icon>
                    <mu-icon value="star_border"></mu-icon>
                </mu-button>
                <img class="images" :src="bookInfo.url" />
            </mu-grid-tile>
        </mu-grid-list>

        <mu-list>
            <mu-list-item button :ripple="false">
                <mu-list-item-title>All mail</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
            </mu-list-item>

        </mu-list>

        <mu-container class="bottom">
            <mu-bottom-nav :value.sync="shift" shift>
                <mu-bottom-nav-item value="index" title="首页" icon="home"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="music" title="商城 " icon="local_grocery_store"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="books" title="联系人" icon="account_box"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="pictures" title="我的" icon="perm_identity"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container> -->

</template>

<script>
// @ is an alias to /src
import { bookList } from "@/api/book";

export default {
  data() {
    return {
      booDatakList: [],
      bookInfo: {
        url: "http://101.132.124.171:8000/2.jpg",
        name: "晴天",
        author: "周杰伦",
        featured: true
      },
      shift: "index",
      active1: 0
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
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  max-width: 100%;
}
.mu-container {
  margin-top: 28px;
  width: 100% !important;
}
.card {
  margin-top: 36px;
  width: 100%;
  padding-left: 2px;
  padding-right: 2px;
}
.bottom {
  position: fixed;
  z-index: 40;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  bottom: 0px;
}
.love {
  height: inherit;
}
.chip {
  z-index: 20;
}
.demo-text {
  padding: 16px;
  background: #fff;
  text-align: left;
}
.tab {
  padding-bottom: 53px;
}
.images{
  margin-top: 38px;
}
</style>