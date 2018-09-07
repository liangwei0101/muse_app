<template>
  <div>
    <mu-appbar class="top" color="cyan">
      <mu-button icon slot="left" @click="goBack">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      借书成功
      <mu-button flat slot="right" @click="goHome">完成</mu-button>
    </mu-appbar>

      <div class="content">
        <mu-avatar class="icon" :size="45" color="success">
          <mu-icon :size="30" value="check"></mu-icon>
        </mu-avatar>
        <h2>借书成功</h2>
        <a>请于12日之前（一周内）到新大楼20楼XXX处领取您借的图书！逾期将自动取消借阅。</a>
        <br>
        <mu-button class="button" color="cyan" @click="goMyZone">去我的借阅看看</mu-button>
      </div>
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
    }
  }
};
</script>

<style>
.icon {
  margin-top: 50px;
  margin-bottom: 20px;
}
.content {
  margin-top: 58px;
  margin-left: 20px;
  margin-right: 20px;
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
}
.test {
  width: inherit;
  overflow: hidden;
  height: inherit !important;
  background: white;
}
</style>

